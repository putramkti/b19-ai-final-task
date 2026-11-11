export type IconAsset = {
  src: string;
  width: number;
  height: number;
};

export type Highlight = {
  id: string;
  step: string;
  code: string;
  title: string;
  body: string;
  icon: IconAsset;
};

export type CtaLink = {
  label: string;
  href: string;
  icon: IconAsset;
};

export const brand = {
  name: "Berijalan",
  division: "Academy Division",
  logo: { src: "/assets/icons/logo-mark.svg", width: 15, height: 12 },
} as const;

export const headerStatus = {
  live: "Stream Ready",
  cohort: "Q2 Cohort",
  cohortIcon: {
    src: "/assets/icons/shield-check.svg",
    width: 10.5,
    height: 11.667,
  },
} as const;

export const heroBadge =
  "Berijalan • Batch 19 • Intensif Full Stack & AI Engineering";

export const hero = {
  titleLead: "Welcome Aboard",
  titleAccent: "Bootcamp Batch 19",
  description:
    "Perjalanan transformatif Anda menjadi engineer profesional berkelas dunia dimulai dari sini. Siapkan diri, bangun kolaborasi, dan ciptakan karya berdampak.",
} as const;

export const highlights: readonly Highlight[] = [
  {
    id: "track",
    step: "01",
    code: "Track",
    title: "16 Minggu Intensif",
    body: "Kurikulum komprehensif dari fundamental hingga deployment siap industri.",
    icon: { src: "/assets/icons/card-track.svg", width: 16.667, height: 17.5 },
  },
  {
    id: "craft",
    step: "02",
    code: "Craft",
    title: "Real-World Projects",
    body: "Bangun portfolio produk digital nyata yang teruji skala produksi.",
    icon: { src: "/assets/icons/card-craft.svg", width: 15, height: 15.875 },
  },
  {
    id: "guild",
    step: "03",
    code: "Guild",
    title: "Mentorship 1-on-1",
    body: "Didampingi langsung oleh senior engineers dan tech leads.",
    icon: { src: "/assets/icons/card-guild.svg", width: 16.667, height: 16.667 },
  },
];

export const actions: {
  primary: CtaLink;
  secondary: CtaLink;
} = {
  primary: {
    label: "Mulai Sesi Orientasi",
    href: "/orientasi",
    icon: { src: "/assets/icons/arrow-right.svg", width: 12, height: 12 },
  },
  secondary: {
    label: "Akses Portal Belajar",
    href: "/portal",
    icon: { src: "/assets/icons/portal-play.svg", width: 13.5, height: 14.25 },
  },
};

export const deckFooter = {
  context: "Orientation Keynote • Stage Active",
  current: "Slide 01",
  total: "01",
  previous: {
    label: "Slide sebelumnya",
    icon: { src: "/assets/icons/chevron-left.svg", width: 4.933, height: 8 },
  },
  next: {
    label: "Slide berikutnya",
    icon: { src: "/assets/icons/chevron-right.svg", width: 4.933, height: 8 },
  },
} as const;