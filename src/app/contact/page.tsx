import type { Metadata } from "next";
import { Send, AtSign } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Andriyansah — Telegram, X/Twitter, dan social links.",
};

const socials = [
  {
    name: "Telegram",
    href: siteConfig.socials.telegram,
    icon: Send,
    description: "Chat langsung atau ikuti channel",
  },
  {
    name: "X / Twitter",
    href: siteConfig.socials.twitter,
    icon: AtSign,
    description: "Follow untuk update dan insight harian",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Contact
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Let&apos;s Connect</h1>
      <p className="mb-12 text-muted">
        Mau tanya seputar crypto, kolaborasi, atau sekadar ngobrol? Reach out.
      </p>

      <div className="space-y-4">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-card-border bg-card-bg p-5 transition-all hover:border-accent/40"
            >
              <div className="rounded-lg bg-accent/10 p-3 text-accent">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted">{social.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-12 rounded-xl border border-card-border bg-card-bg p-6 text-center">
        <p className="text-sm text-muted">
          Follow untuk update terbaru seputar airdrop, trading, dan peluang crypto lainnya.
        </p>
      </div>
    </div>
  );
}
