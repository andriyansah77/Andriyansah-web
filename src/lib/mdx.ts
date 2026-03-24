import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: "pemula" | "menengah" | "lanjut";
  date: string;
  updated: string;
  author: string;
  featured: boolean;
  draft: boolean;
  order: number;
  readingTime: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

export function getPostsByCategory(category: string): PostMeta[] {
  const dir = path.join(contentDirectory, category);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const slug = filename.replace(".mdx", "");
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        category: data.category || category,
        tags: data.tags || [],
        difficulty: data.difficulty || "pemula",
        date: data.date || "",
        updated: data.updated || data.date || "",
        author: data.author || "Andriyansah",
        featured: data.featured || false,
        draft: data.draft || false,
        order: data.order || 99,
        readingTime: stats.text,
      } as PostMeta;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => a.order - b.order);

  return posts;
}

export function getPost(category: string, slug: string): Post | null {
  const filePath = path.join(contentDirectory, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      category: data.category || category,
      tags: data.tags || [],
      difficulty: data.difficulty || "pemula",
      date: data.date || "",
      updated: data.updated || data.date || "",
      author: data.author || "Andriyansah",
      featured: data.featured || false,
      draft: data.draft || false,
      order: data.order || 99,
      readingTime: stats.text,
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const categories = ["learn", "airdrop", "trading", "memecoin", "blog"];
  const allPosts: PostMeta[] = [];

  for (const category of categories) {
    allPosts.push(...getPostsByCategory(category));
  }

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestPosts(count: number = 3): PostMeta[] {
  return getAllPosts().slice(0, count);
}
