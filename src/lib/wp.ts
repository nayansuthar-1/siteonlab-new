// WordPress REST API data layer for the blog.
// Replaces the old hardcoded src/lib/blog-data.ts — articles are now
// authored in WordPress (wp-admin) and fetched server-side.
//
// WordPress conventions expected:
// - Posts use the native title, excerpt, content, featured image, author,
//   categories and publish date.
// - The featured "Spotlight" article is the post marked Sticky in WordPress.
// - The article body is composed in the "Headless CMS" plugin (wp-admin) as
//   an ordered list of repeatable, optional sections, stored as JSON in the
//   `sections` post meta and exposed to REST under `meta.sections`.
//   `read_time` / `author_role` are simple optional post meta. Posts created
//   before the section builder are synthesized from their legacy fields.

/** One block of a composed article, rendered in order. */
export type ArticleSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "html"; html: string }
  | { type: "image"; url: string; caption?: string }
  | { type: "takeaways"; title?: string; items: string[] }
  | { type: "metrics"; title?: string; items: string[] }
  | { type: "quote"; text: string; cite?: string };

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
  /** Items of the first takeaways section — used by the featured card. */
  keyTakeaways: string[];
  /** Ordered body blocks composed in the Headless CMS builder. */
  sections: ArticleSection[];
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
  meta?: {
    sections?: string;
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

/** Sections JSON written by the Headless CMS plugin; null when absent/invalid. */
const parseSections = (raw: string | undefined): ArticleSection[] | null => {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as ArticleSection[]) : null;
  } catch {
    return null;
  }
};

/** Plain text of all sections, for read-time estimation and excerpt fallback. */
const sectionsToText = (sections: ArticleSection[]): string =>
  sections
    .map((s) => {
      switch (s.type) {
        case "html":
          return stripHtml(s.html);
        case "image":
          return s.caption ?? "";
        case "takeaways":
        case "metrics":
          return s.items.join(" ");
        default:
          return s.text;
      }
    })
    .join(" ");

const mapPost = (post: WPPost): Article => {
  const authorName = post._embedded?.author?.[0]?.name ?? "HybridMonks Team";
  const categories = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term?.taxonomy === "category" && term.name && term.name !== "Uncategorized");

  // Prefer the section builder; synthesize sections for legacy posts.
  let sections = parseSections(post.meta?.sections);
  if (!sections) {
    sections = [];
    const metrics = toList(post.meta?.metrics);
    if (metrics.length > 0) sections.push({ type: "metrics", items: metrics });
    const takeaways = toList(post.meta?.key_takeaways);
    if (takeaways.length > 0)
      sections.push({ type: "takeaways", title: "Key Takeaways", items: takeaways });
    if (stripHtml(post.content.rendered))
      sections.push({ type: "html", html: post.content.rendered });
  }

  const bodyText = sectionsToText(sections);
  const excerpt = stripHtml(post.excerpt.rendered) || bodyText.slice(0, 160).trim();

  return {
    id: String(post.id),
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    category: categories[0]?.name ?? "Insights",
    excerpt,
    author: {
      name: authorName,
      role: post.meta?.author_role ?? "Contributor",
      avatar: post._embedded?.author?.[0]?.avatar_urls?.["96"] ?? "",
      initials: initialsFromName(authorName),
    },
    date: formatDate(post.date),
    readTime: post.meta?.read_time || estimateReadTime(bodyText),
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
    keyTakeaways:
      sections.find(
        (s): s is Extract<ArticleSection, { type: "takeaways" }> => s.type === "takeaways"
      )?.items ?? [],
    sections,
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
