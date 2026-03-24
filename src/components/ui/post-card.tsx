import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

interface PostCardProps {
  post: PostMeta;
}

const difficultyColors: Record<string, string> = {
  pemula: "bg-green-500/10 text-green-400",
  menengah: "bg-yellow-500/10 text-yellow-400",
  lanjut: "bg-red-500/10 text-red-400",
};

export function PostCard({ post }: PostCardProps) {
  const href =
    post.category === "blog"
      ? `/blog/${post.slug}`
      : `/${post.category}/${post.slug}`;

  return (
    <Link href={href}>
      <article className="group rounded-xl border border-card-border bg-card-bg p-5 transition-all hover:border-accent/40 hover:bg-card-bg/80">
        <div className="mb-3 flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              difficultyColors[post.difficulty] || difficultyColors.pemula
            }`}
          >
            {post.difficulty}
          </span>
          <span className="text-xs text-muted">{post.readingTime}</span>
        </div>
        <h3 className="mb-2 font-semibold text-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">
          {post.description}
        </p>
      </article>
    </Link>
  );
}
