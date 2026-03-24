import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${siteConfig.url}/${post.category}/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    { url: siteConfig.url, priority: 1.0 },
    { url: `${siteConfig.url}/about`, priority: 0.8 },
    { url: `${siteConfig.url}/portfolio`, priority: 0.8 },
    { url: `${siteConfig.url}/learn`, priority: 0.9 },
    { url: `${siteConfig.url}/airdrop`, priority: 0.9 },
    { url: `${siteConfig.url}/trading`, priority: 0.9 },
    { url: `${siteConfig.url}/memecoin`, priority: 0.9 },
    { url: `${siteConfig.url}/blog`, priority: 0.8 },
    { url: `${siteConfig.url}/contact`, priority: 0.5 },
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...postUrls];
}
