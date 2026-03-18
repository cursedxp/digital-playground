export interface BlogFrontmatter {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  tags?: string[];
  readTime?: string;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
}

const NOCODB_API =
  "https://core.optimotion.dev/api/v1/db/data/noco/pfj0f9gvfaprl5w/mq2rfhtokkgjrja";
const NOCODB_TOKEN = process.env.NOCODB_TOKEN!;

async function fetchNocoDB(params: string = ""): Promise<Record<string, unknown>[]> {
  const url = `${NOCODB_API}${params ? `?${params}` : ""}`;
  const res = await fetch(url, {
    headers: { "xc-token": NOCODB_TOKEN },
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data.list || [];
}

function recordToPost(record: Record<string, unknown>): BlogPost {
  const tags = (record.Tags as string || "")
    .split(",")
    .map((t: string) => t.trim())
    .filter(Boolean);

  return {
    frontmatter: {
      slug: (record.Slug as string) || "",
      title: (record.Title as string) || "",
      summary: (record.Summary as string) || "",
      date: (record.CreatedAt as string || "").split("T")[0],
      author: (record.Author as string) || "Anil Ozsoy",
      tags: tags.length > 0 ? tags : undefined,
      readTime: (record["Read Time"] as string) || undefined,
    },
    content: (record.Content as string) || "",
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const records = await fetchNocoDB(
    "where=(Status,eq,published)&sort=-CreatedAt&limit=50"
  );
  return records.map(recordToPost);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const records = await fetchNocoDB(
    `where=(Slug,eq,${slug})~and(Status,eq,published)&limit=1`
  );
  if (records.length === 0) return null;
  return recordToPost(records[0]);
}

export async function getBlogSlugs(): Promise<string[]> {
  const records = await fetchNocoDB(
    "where=(Status,eq,published)&fields=Slug&limit=100"
  );
  return records.map((r) => (r.Slug as string) || "").filter(Boolean);
}
