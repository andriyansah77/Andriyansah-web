import type { Metadata } from "next";
import { PostCard } from "@/components/ui/post-card";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Memecoin Trading",
  description:
    "Framework praktis trading memecoin: risiko, cara baca holder, tools yang berguna.",
};

export default function MemecoinPage() {
  const posts = getPostsByCategory("memecoin");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400">
        Memecoin Trading
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Trading Memecoin
      </h1>
      <p className="mb-12 text-muted">
        High risk, high reward — tapi jangan masuk buta. Framework praktis untuk
        navigasi dunia memecoin tanpa jadi exit liquidity.
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
