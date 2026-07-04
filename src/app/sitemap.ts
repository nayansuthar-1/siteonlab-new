import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllSlugs } from "@/lib/wp";
import { ALL_CASE_STUDIES } from "@/components/case-studies/data";

// Every static route on the site. Dynamic case-study and blog routes are
// appended below.
const STATIC_PATHS = [
  "",
  "/about",
  "/case-studies",
  "/contact",
  "/portfolio",
  "/package",
  "/website-audit",
  "/blog",
  "/privacy-policy",
  "/terms-and-conditions",
  "/industries/b2b-saas",
  "/industries/b2b-technology",
  "/industries/cybersecurity",
  "/industries/law-firm",
  "/industries/manufacturing-industrial",
  "/industries/professional-services",
  "/service/abm",
  "/service/ai-seo-and-geo",
  "/service/ai-software-development",
  "/service/b2b-paid-media",
  "/service/b2b-website-design-development",
  "/service/content-marketing",
  "/service/conversion-rate-optimization",
  "/service/demand-generation",
  "/service/gtm-revenue-strategy",
  "/service/local-seo",
  "/service/marketing-automation",
  "/service/revenue-measurement-and-analytics",
  "/service/seo",
  "/service/technical-seo",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}` || SITE_URL,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = ALL_CASE_STUDIES.map((cs) => ({
    url: `${SITE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Blog slugs come from WordPress; getAllSlugs already returns [] on failure.
  const slugs = await getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}
