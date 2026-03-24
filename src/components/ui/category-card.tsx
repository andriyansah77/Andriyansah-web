import Link from "next/link";
import { BookOpen, Rocket, TrendingUp, Flame, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Rocket,
  TrendingUp,
  Flame,
};

interface CategoryCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export function CategoryCard({ slug, title, description, icon, color }: CategoryCardProps) {
  const Icon = iconMap[icon] || BookOpen;

  return (
    <Link href={`/${slug}`}>
      <div className="group rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:border-accent/40 hover:bg-card-bg/80">
        <div className={cn("mb-4", color)}>
          <Icon size={28} />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </Link>
  );
}
