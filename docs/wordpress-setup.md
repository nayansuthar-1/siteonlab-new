# Headless WordPress — Blog Setup Guide

The blog (`/blog` and `/blog/[slug]`) is powered by WordPress via its REST API.
The Next.js frontend fetches posts from the URL in the `WORDPRESS_API_URL`
env var (currently `https://hybridmonks.com`) and revalidates every 60 seconds
(ISR) — new/edited posts appear on the site within a minute, no redeploy needed.

The old hardcoded articles live in git history if you need them for re-entry:
`git show 30bc24e:src/lib/blog-data.ts`

## One-time WordPress setup (wp-admin)

### 1. Install ACF (free)
Plugins → Add New → search **"Advanced Custom Fields"** (by WP Engine) → Install → Activate.

### 2. Create the field group
ACF → Field Groups → Add New. Name it **Article Details** and add these 4 fields:

| Label | Field Name (must match exactly) | Type | Notes |
|---|---|---|---|
| Key Takeaways | `key_takeaways` | Textarea | One takeaway per line (renders as the numbered list) |
| Metrics | `metrics` | Textarea | One metric per line (renders as the 3 "Pillar Outcome" callouts) |
| Read Time | `read_time` | Text | e.g. `8 min read` — optional; auto-estimated from word count if empty |
| Author Role | `author_role` | Text | e.g. `Chief AI Officer` — shown under the author name |

Settings for the group:
- **Location rule:** Post Type is equal to Post
- **Show in REST API:** Yes ← required, fields won't reach the frontend otherwise

### 3. Create categories
Posts → Categories. These become the filter pills on `/blog` (derived automatically
from whatever categories your published posts use). The original pillar set was:
- AI Visibility & GEO
- B2B Revenue Growth
- B2B SEO
- Demand Generation
- AI & Automation

Assign exactly one category per post (the frontend shows the first one).

### 4. Publishing a post — checklist
- **Title** → headline + URL slug
- **Content** → the article body (rich text, headings/lists/images all supported)
- **Excerpt** → the card/intro text (Settings sidebar → Excerpt; enable it under
  the ⋮ menu → Preferences → Panels if hidden)
- **Featured Image** → the card thumbnail + article hero (16:9 works best, ≥1200px wide)
- **Category** → pick one
- **Article Details (ACF box)** → takeaways, metrics, read time, author role
- Publish

### 5. Featured Spotlight article
Mark exactly **one** post as *sticky*: edit the post → Settings sidebar →
Status & visibility → check **"Stick to the top of the blog"**. That post becomes
the big Featured Spotlight on `/blog`; all other posts fill the grid.

## Deployment notes
- Set `WORDPRESS_API_URL` in the frontend host's env vars (e.g. Vercel project settings).
- WordPress currently sits on the apex domain `hybridmonks.com`. The Next.js
  frontend needs its own domain — the usual pattern is to move WordPress to a
  subdomain (e.g. `cms.hybridmonks.com`) and point the apex back at the frontend.
  When WordPress moves, update `WORDPRESS_API_URL` — nothing else changes.
- If the WordPress site is ever unreachable, the blog renders empty instead of
  crashing (errors are logged server-side with a `[wp]` prefix).
