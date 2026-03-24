import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Pengalaman dan kontribusi Andriyansah di ekosistem crypto.",
};

interface ExperienceItem {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "FROGGIES / FROG (Solana)",
    role: "Community Moderator",
    period: "2020 – 2021",
    description:
      "Moderator komunitas project di Solana ecosystem. Mengelola community channel, menjawab pertanyaan member, dan membantu koordinasi event.",
    tags: ["community", "solana", "moderator"],
  },
  {
    title: "Arbitrum Ecosystem",
    role: "Brand Ambassador & Content Creator",
    period: "2021 – 2022",
    description:
      "BA untuk ekosistem Arbitrum. Membuat konten edukasi dan promosi, serta membantu onboarding user baru ke Layer 2.",
    tags: ["BA", "content", "arbitrum", "L2"],
  },
  {
    title: "Airdrop Hunter",
    role: "Active Participant",
    period: "2019 – Present",
    description:
      "Aktif mengikuti berbagai airdrop campaign, testnet, dan task-based earning dari ratusan project crypto.",
    tags: ["airdrop", "testnet", "campaign"],
  },
  {
    title: "AMA & Community Events",
    role: "Participant & Winner",
    period: "2020 – Present",
    description:
      "Aktif di berbagai AMA session, memenangkan rewards, dan berkontribusi di community events.",
    tags: ["AMA", "rewards", "community"],
  },
  {
    title: "Content Creation",
    role: "Creator",
    period: "2020 – Present",
    description:
      "Membuat konten edukasi crypto di berbagai platform: thread, artikel, dan social media content.",
    tags: ["content", "edukasi", "social"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Portfolio
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">
        Proof of Experience
      </h1>
      <p className="mb-12 text-muted">
        Bukan CV korporat. Ini bukti pengalaman nyata di ekosistem crypto.
      </p>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="rounded-xl border border-card-border bg-card-bg p-6"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground">{exp.title}</h3>
              <span className="text-xs text-muted">{exp.period}</span>
            </div>
            <p className="mb-1 text-sm font-medium text-accent">{exp.role}</p>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
