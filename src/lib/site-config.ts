export const siteConfig = {
  name: "Andriyansah",
  title: "Andriyansah — Praktisi Crypto & Educator",
  description:
    "Belajar crypto dari nol sampai paham cara mencari peluang nyata: airdrop, campaign, community, trading dasar, dan memecoin.",
  url: "https://andriyansah.my.id",
  author: "Andriyansah",
  socials: {
    telegram: "https://t.me/highestgwei",
    twitter: "https://x.com/highestgwei",
  },
  nav: [
    { label: "Learn", href: "/learn" },
    { label: "Airdrop", href: "/airdrop" },
    { label: "Trading", href: "/trading" },
    { label: "Memecoin", href: "/memecoin" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
  categories: [
    {
      slug: "learn",
      title: "Learn Crypto",
      description: "Mulai dari nol. Pahami dasar-dasar crypto, wallet, blockchain, dan risikonya.",
      icon: "BookOpen",
      color: "text-cyan-400",
    },
    {
      slug: "airdrop",
      title: "Airdrop Academy",
      description: "Panduan lengkap airdrop: mindset, cara cari project, jenis-jenis, dan cara aman.",
      icon: "Rocket",
      color: "text-green-400",
    },
    {
      slug: "trading",
      title: "Trading Basics",
      description: "Dasar-dasar trading crypto: istilah, strategi entry/exit, risk management.",
      icon: "TrendingUp",
      color: "text-purple-400",
    },
    {
      slug: "memecoin",
      title: "Memecoin Trading",
      description: "Framework praktis trading memecoin: risiko, cara baca holder, tools yang berguna.",
      icon: "Flame",
      color: "text-orange-400",
    },
  ],
} as const;
