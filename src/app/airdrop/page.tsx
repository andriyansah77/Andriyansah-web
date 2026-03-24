import type { Metadata } from "next";
import { PostCard } from "@/components/ui/post-card";
import { getPostsByCategory } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Airdrop Academy",
  description:
    "Panduan lengkap airdrop: mindset, cara cari project, jenis-jenis, dan cara aman.",
};

export default function AirdropPage() {
  const posts = getPostsByCategory("airdrop");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">
        Airdrop Academy
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Panduan Airdrop
      </h1>
      <p className="mb-12 text-muted">
        Dari mindset sampai eksekusi. Panduan lengkap buat kamu yang mau serius
        di airdrop — berdasarkan pengalaman nyata, bukan teori.
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
