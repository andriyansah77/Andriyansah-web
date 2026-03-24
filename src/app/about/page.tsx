import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tentang Andriyansah — perjalanan di crypto sejak 2017, dari platform gratis hingga airdrop, community, dan edukasi.",
};

const timeline = [
  {
    year: "2017",
    title: "Awal Mula",
    description:
      "Mulai mengenal cara menghasilkan uang dari platform dan aplikasi gratis. Belajar bagaimana internet bisa jadi sumber penghasilan.",
  },
  {
    year: "2019",
    title: "Masuk Crypto",
    description:
      "Mengenal cryptocurrency lebih dalam. Fokus ke airdrop sebagai pintu masuk utama ke ekosistem crypto.",
  },
  {
    year: "2020",
    title: "Aktif di Ekosistem",
    description:
      "Terlibat sebagai moderator project Solana (FROGGIES/FROG), BA Arbitrum, content creator, dan aktif di berbagai campaign.",
  },
  {
    year: "2021",
    title: "Peak Activity",
    description:
      "Income tertinggi dari airdrop dan campaign. Aktif di AMA, community roles, dan berbagai peluang ekosistem crypto.",
  },
  {
    year: "Now",
    title: "Edukasi & Sharing",
    description:
      "Membangun platform edukasi berbasis pengalaman nyata. Membantu orang memahami crypto dan menemukan peluang dengan cara yang lebih praktis.",
  },
];

const experiences = [
  { category: "Community", items: ["Moderator Project Solana (FROGGIES/FROG)"] },
  { category: "BA & Content", items: ["BA Arbitrum", "Content Creator"] },
  { category: "Airdrop", items: ["Aktif sejak 2019", "Berbagai campaign & testnet"] },
  { category: "Rewards", items: ["AMA Rewards", "Campaign Prizes"] },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      {/* Intro */}
      <section className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Tentang Saya
        </p>
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Andriyansah</h1>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Saya mulai mengenal cara menghasilkan uang dari internet sejak 2017,
            lewat aplikasi dan platform gratis. Dari situ, saya masuk lebih
            dalam ke dunia cryptocurrency pada 2019 — terutama lewat airdrop,
            community work, dan content creation.
          </p>
          <p>
            Selama perjalanan, saya pernah terlibat sebagai moderator project di
            Solana, Brand Ambassador di ekosistem Arbitrum, content creator,
            dan aktif mengikuti berbagai campaign, AMA, serta aktivitas onchain
            dan komunitas.
          </p>
          <p>
            Sekarang saya membangun platform edukasi ini untuk membantu orang
            memahami crypto dari nol — dengan pendekatan yang praktis, berbasis
            pengalaman nyata, bukan teori kosong.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Timeline</h2>
        <div className="space-y-6">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex gap-6 rounded-xl border border-card-border bg-card-bg p-5"
            >
              <div className="shrink-0 text-2xl font-bold text-accent">
                {item.year}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Summary */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Pengalaman</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.category}
              className="rounded-xl border border-card-border bg-card-bg p-5"
            >
              <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                {exp.category}
              </h3>
              <ul className="space-y-2">
                {exp.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background hover:bg-accent-hover transition-colors"
        >
          Lihat Portfolio Lengkap
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
