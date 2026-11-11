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

export type ProjectFilter = "all" | "fullstack" | "console";

export type Project = {
  id: string;
  title: string;
  category: string;
  body: string;
  image: string;
  tags: string[];
  filters: Exclude<ProjectFilter, "all">[];
  /** Outbound links; the card renders a static label for the ones it lacks. */
  demoHref?: string;
  sourceHref?: string;
};

export type SocialLink = {
  label: string;
  icon: IconAsset;
  href: string;
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
  monogram: "PJM.",
  wordmark: "Portfolio",
  owner: "Putra Jadi Mukti",
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
  badge: "Terbuka untuk peran full-time & proyek freelance",
  headline: {
    line1: "Software Engineer",
    line2: "yang membangun sistem",
    accent: "web end-to-end",
    accentTail: ".",
  },
  description:
    "Saya Putra Jadi Mukti — Software Engineer berbasis di Semarang. Menangani pengembangan dari sisi antarmuka hingga lapisan data: TypeScript dan Next.js di frontend, .NET maupun Laravel di backend.",
  primaryCta: { label: "EKSPLORASI PROYEK", href: "#proyek" },
  secondaryCta: { label: "TENTANG SAYA", href: "#tentang" },
  stackLabel: "CORE STACK:",
  stack: [
    { label: "TypeScript", accent: "teal" as Accent },
    { label: "Next.js", accent: "indigo" as Accent },
    { label: "React", accent: "teal" as Accent },
    { label: ".NET", accent: "sky" as Accent },
    { label: "Laravel", accent: "indigo" as Accent },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * Key stats
 * ------------------------------------------------------------------ */

export const stats: readonly Stat[] = [
  {
    id: "bootcamp",
    value: "2026",
    label: "Bootcamp Batch 19",
    icon: icons.statCode,
  },
  {
    id: "projects",
    value: "4 Proyek",
    label: "Proyek Pilihan",
    icon: icons.statProjects,
  },
  {
    id: "coverage",
    value: "Full-stack",
    label: "Cakupan Keahlian",
    icon: icons.categoryBackend,
  },
];

/* ------------------------------------------------------------------ *
 * About
 * ------------------------------------------------------------------ */

export const about = {
  eyebrow: "PROFIL & DEDIKASI",
  title: "Tentang Saya",
  description:
    "Mengenal lebih dekat latar pendidikan, pengalaman kerja, dan cara saya membangun perangkat lunak.",
  profile: {
    image:
      "https://res.cloudinary.com/oruemcnw/image/upload/f_auto,q_auto,w_800/profile_gqzbeh",
    imageAlt: "Foto profil Putra Jadi Mukti",
    name: "Putra Jadi Mukti",
    role: "Software Engineer",
  },
  specs: [
    { label: "Lokasi", value: "Semarang, Indonesia" },
    { label: "Status Kerja", value: "Open to Full-time / Freelance", accent: true },
    { label: "Pendidikan", value: "S1 Informatika, UPN Veteran Yogyakarta" },
  ] satisfies readonly SpecRow[],
  cvCta: { label: "UNDUH CURRICULUM VITAE (PDF)", href: "#kontak" },
  prose: [
    "Saya Putra Jadi Mukti, Software Engineer yang terbiasa menangani pekerjaan dari hulu ke hilir: merancang antarmuka, membangun API, memodelkan basis data, sampai menyiapkan rilis. Latar pendidikan S1 Informatika di UPN Veteran Yogyakarta membentuk cara saya bekerja secara sistematis dan berbasis data.",
    "Pengalaman magang di Formulatrix dan Qdee Fresh menempatkan saya pada alur kerja tim produk yang nyata — dari membaca kebutuhan, menulis kode yang mudah ditinjau, hingga menguji perilaku sistem sebelum dirilis. Saya menikmati pekerjaan yang rapi, terukur, dan mudah dirawat oleh orang berikutnya.",
  ],
  pillars: [
    {
      id: "clean-code",
      title: "Clean Code",
      body: "Kode yang konsisten, bertipe jelas, dan mudah ditinjau ulang oleh anggota tim berikutnya.",
      icon: icons.pillarCleanCode,
    },
    {
      id: "user-centric",
      title: "User-Centric",
      body: "Antarmuka disusun berdasarkan alur pemakaian nyata, bukan sekadar tampilan yang rapi.",
      icon: icons.pillarUserCentric,
    },
    {
      id: "agility",
      title: "Agility & Growth",
      body: "Terbiasa bekerja iteratif, belajar cepat, dan menyesuaikan diri dengan tuntutan proyek.",
      icon: icons.pillarGrowth,
    },
  ] satisfies readonly Pillar[],
  timeline: {
    title: "Jejak Karier Singkat",
    entries: [
      {
        period: "Jun — Jul 2026",
        title: "Formulatrix",
        body: "Berpartisipasi dalam pengembangan perangkat lunak pada tim produk, mengerjakan fitur dan perbaikan terarah.",
        current: true,
      },
      {
        period: "Okt — Des 2025",
        title: "Qdee Fresh",
        body: "Terlibat dalam pengerjaan aplikasi web, mulai dari implementasi antarmuka hingga integrasi data.",
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
    "Perkakas teknis yang saya gunakan sehari-hari untuk membangun produk digital dari sisi antarmuka hingga basis data.",
  categories: [
    {
      id: "design",
      title: "Design",
      blurb: "Perancangan antarmuka dan alur sebelum masuk ke kode.",
      icon: icons.categoryDesign,
      chips: [{ label: "Figma", accent: "sky" }],
      footer: "Design Tooling",
    },
    {
      id: "frontend",
      title: "Frontend",
      blurb: "Antarmuka bertipe kuat, komponen reaktif, dan rute modern.",
      icon: icons.categoryFrontend,
      chips: [
        { label: "TypeScript", accent: "teal" },
        { label: "React", accent: "indigo" },
      ],
      footer: "Core Discipline",
    },
    {
      id: "backend",
      title: "Backend",
      blurb: "Layanan aplikasi, API, dan logika domain di sisi server.",
      icon: icons.categoryBackend,
      chips: [
        { label: ".NET", accent: "indigo" },
        { label: "C#", accent: "teal" },
        { label: "Laravel", accent: "sky" },
      ],
      footer: "Production Tested",
    },
    {
      id: "data",
      title: "Data & Scripting",
      blurb: "Pengolahan data, kueri, dan otomasi pendukung.",
      icon: icons.categoryDevops,
      chips: [
        { label: "Python", accent: "teal" },
        { label: "SQL", accent: "muted" },
      ],
      footer: "Data Handling",
    },
  ] satisfies readonly SkillCategory[],
} as const;

/* ------------------------------------------------------------------ *
 * Projects
 * ------------------------------------------------------------------ */

const projectImage = (publicId: string) =>
  `https://res.cloudinary.com/oruemcnw/image/upload/f_auto,q_auto,w_840/${publicId}`;

const projectItems: readonly Project[] = [
  {
    id: "warehouse-inventory",
    title: "Warehouse Inventory System",
    category: "Full-stack Freelance",
    body: "Sistem inventori gudang untuk mencatat stok masuk dan keluar, memantau ketersediaan barang, serta menyajikan laporan persediaan secara terpusat.",
    image: projectImage("screenshot-2026-10-09-210222_ffbun4"),
    tags: ["Laravel", "React", "TypeScript", "Inertia.js", "Tailwind"],
    filters: ["fullstack"],
  },
  {
    id: "poker-console",
    title: "PokerConsoleApp",
    category: "Bootcamp",
    body: "Permainan Texas Hold'em berbasis terminal dengan aturan taruhan lengkap, dilindungi 95 unit test NUnit untuk menjaga konsistensi logika permainan.",
    image: projectImage("poker-console_1"),
    tags: ["C#", ".NET", "Spectre.Console", "NUnit"],
    filters: ["console"],
    sourceHref: "https://github.com/putramkti/PokerGame",
  },
  {
    id: "jec-consultant",
    title: "JEC Consultant",
    category: "Full-stack Freelance",
    body: "Company profile bilingual dengan CMS buatan sendiri, sehingga tim internal dapat memperbarui konten dua bahasa tanpa menyentuh kode.",
    image: projectImage("jec-consultant_1"),
    tags: ["Laravel", "Blade", "Tailwind", "CMS"],
    filters: ["fullstack"],
    demoHref: "https://jecconsultant.co.id",
  },
  {
    id: "raf-invoice",
    title: "RAF Invoice",
    category: "Freelance",
    body: "Generator invoice yang menampilkan pratinjau langsung dan menghasilkan PDF dari satu template yang sama, sehingga hasil cetak identik dengan tampilan layar.",
    image: projectImage("raf-invoice_1"),
    tags: ["Next.js", "Puppeteer", "Supabase", "shadcn/ui"],
    filters: ["fullstack"],
  },
];

const projectFilters: readonly { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "SEMUA (4)" },
  { id: "fullstack", label: "FULL STACK" },
  { id: "console", label: "CONSOLE" },
];

export const projects = {
  eyebrow: "BUKTI KAPABILITAS",
  title: "Proyek Pilihan",
  description:
    "Empat proyek yang mewakili rentang pekerjaan saya — dari sistem inventori dan company profile, generator dokumen, sampai aplikasi terminal beruji otomatis.",
  filters: projectFilters,
  emptyState: "Belum ada proyek pada kategori ini.",
  items: projectItems,
  actions: {
    demo: "KUNJUNGI SITUS",
    source: "KODE SUMBER",
    unavailable: "TAUTAN BELUM ADA",
  },
} as const;

/* ------------------------------------------------------------------ *
 * Contact
 * ------------------------------------------------------------------ */

export const contact = {
  badge: "Mari Memulai Sesuatu yang Hebat",
  title: "Mari Kolaborasi Bersama.",
  description:
    "Punya kebutuhan sistem baru, ingin merapikan aplikasi yang sudah berjalan, atau sekadar berdiskusi teknis seputar arsitektur web? Silakan hubungi saya melalui salah satu kanal di bawah.",
  email: {
    label: "Surel Utama",
    address: "putramukti26@gmail.com",
    href: "mailto:putramukti26@gmail.com",
  },
  location: {
    label: "Domisili",
    value: "Semarang, Jawa Tengah",
  },
  socials: [
    {
      label: "GitHub",
      icon: icons.windowCode,
      href: "https://github.com/putramkti",
    },
    {
      label: "LinkedIn",
      icon: icons.linkedin,
      href: "https://linkedin.com/in/putramukti",
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
  name: "Putra Jadi Mukti",
  tagline: "Software Engineer — membangun sistem web end-to-end.",
  copyright: "© 2026 Putra Jadi Mukti.",
  links: [
    { label: "About", href: "#tentang" },
    { label: "Skills", href: "#keahlian" },
    { label: "Projects", href: "#proyek", active: true },
    { label: "Contact", href: "#kontak" },
  ] satisfies readonly NavItem[],
} as const;