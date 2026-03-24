import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { PostMeta } from "@/lib/mdx";

interface ArticleLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
  backHref: string;
  backLabel: string;
}

const difficultyColors: Record<string, string> = {
  pemula: "bg-green-500/10 text-green-400",
  menengah: "bg-yellow-500/10 text-yellow-400",
  lanjut: "bg-red-500/10 text-red-400",
};

export function ArticleLayout({
  meta,
  children,
  backHref,
  backLabel,
}: ArticleLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Back link */}
      <Link
        href={backHref}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              difficultyColors[meta.difficulty] || difficultyColors.pemula
            }`}
          >
            {meta.difficulty}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Clock size={12} />
            {meta.readingTime}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <Calendar size={12} />
            {meta.date}
          </span>
        </div>
        <h1 className="text-3xl font-bold md:text-4xl">{meta.title}</h1>
        {meta.description && (
          <p className="mt-4 text-lg text-muted">{meta.description}</p>
        )}
      </header>

      {/* Content */}
      <article className="prose">{children}</article>

      {/* Tags */}
      {meta.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-card-border pt-6">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
