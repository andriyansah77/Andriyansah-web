import type { Metadata } from "next";
import { PostCard } from "@/components/ui/post-card";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel, opini, dan insight dari pengalaman nyata di dunia crypto.",
};

export default function BlogPage() {
  const posts = getPostsByCategory("blog");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Blog
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Insights & Stories
      </h1>
      <p className="mb-12 text-muted">
        Cerita, opini, analisis, dan pelajaran dari perjalanan di dunia crypto.
      </p>

      {posts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-card-border bg-card-bg p-8 text-center">
          <p className="text-muted">Konten sedang disiapkan. Stay tuned.</p>
        </div>
      )}
    </div>
  );
}
