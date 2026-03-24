import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.socials.telegram && (
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                Telegram
              </a>
            )}
            {siteConfig.socials.twitter && (
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                X / Twitter
              </a>
            )}
            <Link
              href="/contact"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
