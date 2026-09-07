import { getCollection, type CollectionEntry } from "astro:content";

/** Convert a human tag ("Test Automation") into a URL slug ("test-automation"). */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** All published posts, newest first. */
export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export interface TagInfo {
  tag: string;
  slug: string;
  count: number;
}

/** Every distinct tag across published posts, with counts, sorted by count then name. */
export async function getAllTags(): Promise<TagInfo[]> {
  const posts = await getPublishedPosts();
  const map = new Map<string, TagInfo>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = slugifyTag(tag);
      const existing = map.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(slug, { tag, slug, count: 1 });
      }
    }
  }
  return [...map.values()].sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag)
  );
}
