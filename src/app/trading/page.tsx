import type { Metadata } from "next";
import { PostCard } from "@/components/ui/post-card";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Trading Basics",
  description:
    "Dasar-dasar trading crypto: istilah, strategi entry/exit, risk management.",
};

export default function TradingPage() {
  const posts = getPostsByCategory("trading");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
        Trading Basics
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Dasar Trading Crypto
      </h1>
      <p className="mb-12 text-muted">
        Sebelum masuk pasar, pahami dulu fondasinya. Istilah, strategi dasar,
        dan cara mengelola risiko — tanpa sok jago, tanpa ilusi cuan instan.
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
