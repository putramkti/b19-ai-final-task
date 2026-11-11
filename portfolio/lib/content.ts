export type IconAsset = {
  src: string;
  width: number;
  height: number;
};

/** Accent used by a tech chip's leading dot. */
export type Accent = "teal" | "indigo" | "sky" | "muted";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
  icon: IconAsset;
};

export type SpecRow = {
  label: string;
  value: string;
  accent?: boolean;
};

export type Pillar = {
  id: string;
  title: string;
  body: string;
  icon: IconAsset;
};

export type TimelineEntry = {
  period: string;
  title: string;
  body: string;
  current?: boolean;
};

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: IconAsset;
  chips: { label: string; accent: Accent }[];
  footer: string;
};

export type ProjectFilter = "all" | "fullstack" | "uiux";

export type Project = {
  id: string;
  title: string;
  category: string;
  body: string;
  image: string;
  tags: string[];
  filters: Exclude<ProjectFilter, "all">[];
};

export type SocialLink = {
  label: string;
  icon: IconAsset;
  href: string;
  /** True while the real profile URL is unknown; surfaced to assistive tech. */
  placeholder?: boolean;
};

/* ------------------------------------------------------------------ *
 * Icons — exported from the Figma frame, native sizes preserved.
 * ------------------------------------------------------------------ */

const icon = (name: string, width: number, height: number): IconAsset => ({
  src: `/assets/icons/${name}.svg`,
  width,
  height,
});

export const icons = {
  arrowDown: icon("arrow-down", 12, 12),
  arrowRight: icon("arrow-right", 10.6667, 10.6667),
  person: icon("person", 12, 12),
  copy: icon("copy", 11.3333, 13.3333),
  terminalPrompt: icon("terminal-prompt", 11.6667, 9.3333),
  statCode: icon("stat-code", 23.3333, 14),
  statProjects: icon("stat-projects", 23.3879, 23.4157),
  statSatisfaction: icon("stat-satisfaction", 23.3333, 23.3333),
  download: icon("download", 12, 12),
  pillarCleanCode: icon("pillar-clean-code", 16.5, 16.5),
  pillarUserCentric: icon("pillar-user-centric", 18.3333, 18.3333),
  pillarGrowth: icon("pillar-growth", 14.6667, 18.3333),
  timeline: icon("timeline", 16.25, 13.3333),
  categoryFrontend: icon("category-frontend", 21.6667, 17.3333),
  categoryBackend: icon("category-backend", 19.5, 19.5),
  categoryDesign: icon("category-design", 21.6667, 21.6667),
  categoryDevops: icon("category-devops", 21.6667, 17.3333),
  star: icon("star", 14.6667, 14),
  externalLink: icon("external-link", 12, 12),
  codeBrackets: icon("code-brackets", 13.3333, 8),
  mail: icon("mail", 16.6667, 13.3333),
  linkedin: icon("linkedin", 15, 15),
  windowCode: icon("window-code", 15, 12),
  xTwitter: icon("x-twitter", 13.5, 15),
  send: icon("send", 14.25, 12),
} as const;

/* ------------------------------------------------------------------ *
 * Brand & navigation
 * ------------------------------------------------------------------ */

export const brand = {
  monogram: "AP.",
  wordmark: "Portfolio",
  owner: "Alex Pratama",
} as const;

export const navItems: readonly NavItem[] = [
  { label: "About", href: "#tentang" },
  { label: "Skills", href: "#keahlian" },
  { label: "Projects", href: "#proyek", active: true },
  { label: "Contact", href: "#kontak" },
];

export const headerAction = {
  label: "GET IN TOUCH",
  href: "#kontak",
} as const;

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */

export const hero = {
  badge: "Tersedia untuk proyek baru & kontrak freelance",
  headline: {
    line1: "Membangun Solusi Web",
    line2: "Modern dengan",
    accent: "Pengalaman Digital",
    accentTail: " yang",
    line4: "Memukau.",
  },
  description:
    "Saya Alex Pratama — Full Stack Developer & UI/UX Designer berbasis di Jakarta. Berfokus pada arsitektur web berperforma tinggi, antarmuka interaktif yang memikat, dan sistem backend yang skalabel.",
  primaryCta: { label: "EKSPLORASI PROYEK", href: "#proyek" },
  secondaryCta: { label: "TENTANG SAYA", href: "#tentang" },
  stackLabel: "CORE STACK:",
  stack: [
    { label: "React 19", accent: "teal" as Accent },
    { label: "Next.js 15", accent: "indigo" as Accent },
    { label: "TypeScript", accent: "teal" as Accent },
    { label: "Node.js", accent: "sky" as Accent },
    { label: "Tailwind CSS", accent: "indigo" as Accent },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * Key stats
 * ------------------------------------------------------------------ */

export const stats: readonly Stat[] = [
  {
    id: "experience",
    value: "3+ Tahun",
    label: "Pengalaman Industri Nyata",
    icon: icons.statCode,
  },
  {
    id: "projects",
    value: "25+ Proyek",
    label: "Selesai & Beroperasi di Production",
    icon: icons.statProjects,
  },
  {
    id: "satisfaction",
    value: "99%",
    label: "Tingkat Kepuasan Klien & Partner",
    icon: icons.statSatisfaction,
  },
];

/* ------------------------------------------------------------------ *
 * About
 * ------------------------------------------------------------------ */

export const about = {
  eyebrow: "PROFIL & DEDIKASI",
  title: "Tentang Saya",
  description:
    "Mengenal lebih dekat perjalanan, nilai integritas, dan filosofi kerja saya.",
  profile: {
    image: "/assets/images/avatar-alex.jpg",
    imageAlt:
      "Ilustrasi potret Alex Pratama dengan latar gelap bergradasi ungu dan teal",
    name: "Alex Pratama, S.Kom.",
    role: "Full Stack Software Crafter & UX Architect",
  },
  specs: [
    { label: "Lokasi", value: "Jakarta / Remote Global" },
    { label: "Status Kerja", value: "Open to Contract / Fulltime", accent: true },
    { label: "Pendidikan", value: "Teknik Informatika (Computer Science)" },
  ] satisfies readonly SpecRow[],
  cvCta: { label: "UNDUH CURRICULUM VITAE (PDF)", href: "#kontak" },
  prose: [
    "Perjalanan saya dalam rekayasa perangkat lunak dimulai dari rasa ingin tahu mendalam tentang bagaimana sistem skala besar dapat dibangun tanpa mengorbankan estetika dan intuisi visual. Saya percaya bahwa kode yang bersih dan desain yang empatik bukanlah dua hal yang terpisah, melainkan satu kesatuan karya.",
    "Sebagai profesional yang memadukan perspektif teknis dan desain, saya terbiasa memimpin siklus pengembangan dari nol: mulai dari riset kebutuhan pengguna, penyusunan wireframe di Figma, implementasi frontend modern dengan React dan Next.js, hingga konfigurasi basis data terdistribusi dan integrasi API yang aman.",
  ],
  pillars: [
    {
      id: "clean-code",
      title: "Clean Code",
      body: "Penerapan standar SOLID, TypeScript strict mode, dan pengujian berkala untuk keandalan jangka panjang.",
      icon: icons.pillarCleanCode,
    },
    {
      id: "user-centric",
      title: "User-Centric",
      body: "Antarmuka dibuat berlandaskan aksesibilitas WCAG, micro-interactions halus, dan performa 60fps.",
      icon: icons.pillarUserCentric,
    },
    {
      id: "agility",
      title: "Agility & Growth",
      body: "Iterasi cepat dengan komunikasi transparan, adaptif terhadap kebutuhan bisnis dan arsitektur modern.",
      icon: icons.pillarGrowth,
    },
  ] satisfies readonly Pillar[],
  timeline: {
    title: "Jejak Karier Singkat",
    entries: [
      {
        period: "2022 — Sekarang",
        title: "Lead Full Stack Engineer & Designer — TechNova Studio",
        body: "Mengarahkan arsitektur produk SaaS, design system enterprise, dan integrasi backend cloud.",
        current: true,
      },
      {
        period: "2021 — 2022",
        title: "Frontend Developer — Nusantara Digital Lab",
        body: "Membangun web app responsif berkecepatan tinggi menggunakan React, Next.js, dan Tailwind CSS.",
      },
    ] satisfies readonly TimelineEntry[],
  },
} as const;

/* ------------------------------------------------------------------ *
 * Skills
 * ------------------------------------------------------------------ */

export const skills = {
  eyebrow: "KOMPILASI INSTRUMEN",
  title: "Keahlian & Teknologi",
  description:
    "Daftar perkakas teknis, pustaka kode, dan platform yang saya gunakan untuk mewujudkan produk digital berskala produksi.",
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      blurb: "Antarmuka responsif, dinamis, dan teroptimasi.",
      icon: icons.categoryFrontend,
      chips: [
        { label: "React 18/19", accent: "teal" },
        { label: "Next.js", accent: "indigo" },
        { label: "TypeScript", accent: "teal" },
        { label: "Vue.js 3", accent: "indigo" },
        { label: "Tailwind CSS", accent: "sky" },
        { label: "HTML5/CSS3", accent: "muted" },
      ],
      footer: "Core Discipline",
    },
    {
      id: "backend",
      title: "Backend & DB",
      blurb: "Layanan mikro, struktur data, dan API aman.",
      icon: icons.categoryBackend,
      chips: [
        { label: "Node.js", accent: "teal" },
        { label: "Express / Nest", accent: "indigo" },
        { label: "PostgreSQL", accent: "teal" },
        { label: "MongoDB", accent: "sky" },
        { label: "REST & GraphQL", accent: "muted" },
        { label: "Prisma ORM", accent: "indigo" },
      ],
      footer: "Production Tested",
    },
    {
      id: "design",
      title: "UI/UX Design",
      blurb: "Interaksi teruji, hierarki visual & prototipe.",
      icon: icons.categoryDesign,
      chips: [
        { label: "Figma", accent: "sky" },
        { label: "Design Tokens", accent: "indigo" },
        { label: "Wireframing", accent: "teal" },
        { label: "User Research", accent: "muted" },
        { label: "Prototyping", accent: "sky" },
      ],
      footer: "Human Centered",
    },
    {
      id: "devops",
      title: "Tools & DevOps",
      blurb: "Alur kerja modern, automasi, dan deployment.",
      icon: icons.categoryDevops,
      chips: [
        { label: "Git & GitHub", accent: "indigo" },
        { label: "Docker", accent: "teal" },
        { label: "CI/CD Actions", accent: "muted" },
        { label: "Vercel & Cloudflare", accent: "indigo" },
        { label: "VS Code & Zed", accent: "sky" },
      ],
      footer: "Seamless Workflow",
    },
  ] satisfies readonly SkillCategory[],
} as const;

/* ------------------------------------------------------------------ *
 * Projects
 * ------------------------------------------------------------------ */

const projectItems: readonly Project[] = [
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    category: "SaaS & Business Intelligence",
    body: "Platform analitik real-time untuk memonitor metrik bisnis, retensi pengguna, dan pertumbuhan revenue secara akurat dengan visualisasi data interaktif.",
    image: "/assets/images/project-saas.jpg",
    tags: ["Next.js", "Tailwind CSS", "Chart.js", "PostgreSQL"],
    filters: ["fullstack"],
  },
  {
    id: "zenith",
    title: "Zenith E-Commerce Platform",
    category: "E-Commerce & FinTech",
    body: "Aplikasi toko online modern dengan alur checkout instan tanpa hambatan, sistem filter produk multi-kriteria canggih, dan manajemen inventori terintegrasi.",
    image: "/assets/images/project-zenith.jpg",
    tags: ["React", "TypeScript", "Stripe API", "Tailwind"],
    filters: ["fullstack"],
  },
  {
    id: "collabtask",
    title: "CollabTask — Project Management Tool",
    category: "Productivity & Real-time",
    body: "Aplikasi kolaborasi tim dengan sinkronisasi papan Kanban dua arah secara real-time via WebSocket, time tracking, dan manajemen sprint terperinci.",
    image: "/assets/images/project-collabtask.jpg",
    tags: ["Vue.js 3", "Node.js", "Socket.io", "MongoDB"],
    filters: ["uiux"],
  },
  {
    id: "fintrack",
    title: "FinTrack — Personal Finance App",
    category: "Personal Finance & Mobile Web",
    body: "Aplikasi pelacak keuangan pribadi dan anggaran pintar dengan visualisasi laporan interaktif, pembagian pos pengeluaran otomatis, dan enkripsi data lokal.",
    image: "/assets/images/project-fintrack.jpg",
    tags: ["React Native / Next", "Tailwind CSS", "SQLite / Cloud"],
    filters: ["uiux"],
  },
];

const projectFilters: readonly { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "SEMUA (4)" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "uiux", label: "UI/UX APP" },
];

export const projects = {
  eyebrow: "BUKTI KAPABILITAS",
  title: "Proyek Pilihan",
  description:
    "Beberapa karya terbaik yang pernah saya rancang dan bangun dengan fokus pada skalabilitas serta kenyamanan interaksi pengguna.",
  filters: projectFilters,
  emptyState: "Belum ada proyek pada kategori ini.",
  items: projectItems,
  actions: {
    demo: "DEMO LANGSUNG",
    source: "KODE SUMBER",
  },
} as const;

/* ------------------------------------------------------------------ *
 * Contact
 * ------------------------------------------------------------------ */

export const contact = {
  badge: "Mari Memulai Sesuatu yang Hebat",
  title: "Mari Kolaborasi Bersama.",
  description:
    "Memiliki ide produk baru, kebutuhan transformasi sistem yang membutuhkan penanganan teliti, atau ingin sekadar berdiskusi teknis seputar arsitektur modern? Pintu diskusi saya selalu terbuka.",
  email: {
    label: "Surel Utama",
    address: "hello@alexpratama.dev",
    href: "mailto:hello@alexpratama.dev",
  },
  socials: [
    {
      label: "LinkedIn",
      icon: icons.linkedin,
      href: "#tautan-linkedin-belum-tersedia",
      placeholder: true,
    },
    {
      label: "GitHub",
      icon: icons.windowCode,
      href: "#tautan-github-belum-tersedia",
      placeholder: true,
    },
    {
      label: "Twitter / X",
      icon: icons.xTwitter,
      href: "#tautan-twitter-belum-tersedia",
      placeholder: true,
    },
  ] satisfies readonly SocialLink[],
  form: {
    title: "Kirimkan Pesan Langsung",
    nameLabel: "NAMA LENGKAP",
    namePlaceholder: "mis. Budi Santoso",
    emailLabel: "ALAMAT EMAIL",
    emailPlaceholder: "nama@perusahaan.com",
    messageLabel: "PESAN / RENCANA PROYEK",
    messagePlaceholder:
      "Ceritakan tujuan, lingkup kebutuhan, dan perkiraan waktu proyek Anda...",
    submit: "KIRIM PESAN SEKARANG",
    success: "Terima kasih! Pesan Anda sudah tervalidasi dan siap dikirim.",
    errors: {
      nameRequired: "Nama lengkap wajib diisi.",
      emailRequired: "Alamat email wajib diisi.",
      emailInvalid: "Format email belum sesuai, contoh: nama@perusahaan.com",
      messageRequired: "Ceritakan sedikit tentang rencana proyek Anda.",
      messageTooShort: "Pesan minimal 20 karakter agar konteksnya jelas.",
    },
  },
} as const;

/* ------------------------------------------------------------------ *
 * Footer
 * ------------------------------------------------------------------ */

export const footer = {
  name: "Alex Pratama",
  tagline: "Dibuat dengan dedikasi dan passion untuk kesempurnaan web.",
  copyright: "© 2024 Creative Technologist. All rights reserved.",
  links: [
    { label: "About", href: "#tentang" },
    { label: "Skills", href: "#keahlian" },
    { label: "Projects", href: "#proyek", active: true },
    { label: "Contact", href: "#kontak" },
    { label: "Privacy Policy", href: "#kebijakan-privasi" },
  ] satisfies readonly NavItem[],
} as const;