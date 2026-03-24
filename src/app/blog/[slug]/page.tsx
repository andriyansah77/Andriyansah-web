import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostsByCategory } from "@/lib/mdx";
import { ArticleLayout } from "@/components/ui/article-layout";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPostsByCategory("blog");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("blog", slug);

  if (!post) notFound();

  return (
    <ArticleLayout meta={post.meta} backHref="/blog" backLabel="Blog">
      <MDXRemote source={post.content} />
    </ArticleLayout>
  );
}
