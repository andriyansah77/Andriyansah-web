import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostsByCategory } from "@/lib/mdx";
import { ArticleLayout } from "@/components/ui/article-layout";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByCategory("memecoin");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("memecoin", slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function MemecoinArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("memecoin", slug);

  if (!post) notFound();

  return (
    <ArticleLayout meta={post.meta} backHref="/memecoin" backLabel="Memecoin Trading">
      <MDXRemote source={post.content} />
    </ArticleLayout>
  );
}
