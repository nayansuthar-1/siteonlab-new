// WordPress REST API data layer for the blog.
// Replaces the old hardcoded src/lib/blog-data.ts — articles are now
// authored in WordPress (wp-admin) and fetched server-side.
//
// WordPress conventions expected:
// - Posts use the native title, excerpt, content, featured image, author,
//   categories and publish date.
// - The featured "Spotlight" article is the post marked Sticky in WordPress.
// - Extra fields come from an ACF field group exposed to REST under `acf`:
//     key_takeaways (textarea, one per line)
//     metrics       (textarea, one per line)
//     read_time     (text, e.g. "8 min read")
//     author_role   (text, e.g. "Chief AI Officer")

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    initials: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  keyTakeaways: string[];
  metrics: string[];
  /** Rendered HTML from WordPress. */
  fullBody: string;
}

const WP_URL = (process.env.WORDPRESS_API_URL ?? "https://hybridmonks.com").replace(/\/$/, "");
const REVALIDATE_SECONDS = 60;

interface WPPost {
  id: number;
  slug: string;
  date: string;
  sticky: boolean;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  acf?: {
    key_takeaways?: string | string[];
    metrics?: string | string[];
    read_time?: string;
    author_role?: string;
  };
  _embedded?: {
    author?: { name?: string; avatar_urls?: Record<string, string> }[];
    "wp:featuredmedia"?: { source_url?: string }[];
    "wp:term"?: { taxonomy?: string; name?: string }[][];
  };
}

const stripHtml = (html: string): string =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .trim();

const initialsFromName = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const estimateReadTime = (html: string): string => {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

// ACF textareas arrive as a single string (one item per line); ACF Pro
// repeaters arrive as arrays. Accept both.
const toList = (value: string | string[] | undefined): string[] => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean);
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
};

const mapPost = (post: WPPost): Article => {
  const authorName = post._embedded?.author?.[0]?.name ?? "HybridMonks Team";
  const categories = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term?.taxonomy === "category" && term.name && term.name !== "Uncategorized");

  return {
    id: String(post.id),
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    category: categories[0]?.name ?? "Insights",
    excerpt: stripHtml(post.excerpt.rendered),
    author: {
      name: authorName,
      role: post.acf?.author_role ?? "Contributor",
      avatar: post._embedded?.author?.[0]?.avatar_urls?.["96"] ?? "",
      initials: initialsFromName(authorName),
    },
    date: formatDate(post.date),
    readTime: post.acf?.read_time || estimateReadTime(post.content.rendered),
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    keyTakeaways: toList(post.acf?.key_takeaways),
    metrics: toList(post.acf?.metrics),
    fullBody: post.content.rendered,
  };
};

async function wpFetch(path: string): Promise<WPPost[]> {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    throw new Error(`WordPress request failed: ${res.status} ${path}`);
  }
  return res.json();
}

/** All posts split into the sticky (featured) post and the rest, newest first. */
export async function getBlogData(): Promise<{
  featured: Article | null;
  articles: Article[];
}> {
  try {
    const posts = await wpFetch("/posts?per_page=100&_embed=1");
    const stickyIndex = posts.findIndex((post) => post.sticky);
    const featured = stickyIndex === -1 ? null : mapPost(posts[stickyIndex]);
    const articles = posts
      .filter((_, index) => index !== stickyIndex)
      .map(mapPost);
    return { featured, articles };
  } catch (error) {
    console.error("[wp] Failed to fetch posts:", error);
    return { featured: null, articles: [] };
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const posts = await wpFetch(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`);
    return posts.length > 0 ? mapPost(posts[0]) : null;
  } catch (error) {
    console.error(`[wp] Failed to fetch post "${slug}":`, error);
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const posts = await wpFetch("/posts?per_page=100&_fields=slug");
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("[wp] Failed to fetch slugs:", error);
    return [];
  }
}
