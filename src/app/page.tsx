import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/ui/category-card";
import { PostCard } from "@/components/ui/post-card";
import { siteConfig } from "@/lib/site-config";
import { getLatestPosts } from "@/lib/mdx";

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Praktisi Crypto & Educator
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Belajar crypto dari{" "}
          <span className="text-accent">pengalaman nyata</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
          Airdrop, campaign, community, trading dasar, dan memecoin — dari
          praktisi yang sudah jalani sejak 2017. Bukan teori. Bukan hype.
          Pengalaman.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background hover:bg-accent-hover transition-colors"
          >
            Mulai Belajar
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 font-medium text-muted hover:border-accent/40 hover:text-foreground transition-colors"
          >
            Tentang Saya
          </Link>
        </div>
      </section>

      {/* Journey Snapshot */}
      <section className="border-t border-card-border py-16">
        <h2 className="mb-8 text-2xl font-bold">Perjalanan Singkat</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { year: "2017", text: "Mulai cari peluang dari platform gratis" },
            { year: "2019", text: "Masuk crypto, fokus airdrop & community" },
            { year: "2020–21", text: "Peak income dari airdrop & campaign" },
            { year: "Now", text: "Edukasi & sharing pengalaman nyata" },
          ].map((item) => (
            <div
              key={item.year}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <div className="mb-2 text-2xl font-bold text-accent">
                {item.year}
              </div>
              <p className="text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-card-border py-16">
        <h2 className="mb-8 text-2xl font-bold">Mulai Belajar</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      {latestPosts.length > 0 && (
        <section className="border-t border-card-border py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Artikel Terbaru</h2>
            <Link
              href="/blog"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-card-border py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">Siap mulai?</h2>
        <p className="mb-6 text-muted">
          Ikuti perjalanan belajar crypto dari nol — gratis, praktis, dan
          berbasis pengalaman.
        </p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background hover:bg-accent-hover transition-colors"
        >
          Mulai dari Sini
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
