---
name: project
description: Aturan proyek Next.js, Tailwind, data/API, aksesibilitas, dan alur kerja untuk welcome-aboard dan portofolio
applyTo: "**/*.ts,**/*.tsx,**/*.css"
---

# Aturan Proyek

## Proyek dan Stack

- Next.js App Router, TypeScript `strict`, Tailwind CSS.
- Aset disimpan di `public/`.
- Gambar selalu lewat `next/image`, font lewat `next/font`.

## Konvensi Kode

- `PascalCase` untuk komponen, `camelCase` untuk variabel dan fungsi.
- Jangan gunakan `any`.

## Server dan Client Component

- Default ke Server Component.
- Gunakan `use client` hanya untuk state, event handler, atau browser API.

## Struktur Direktori

- `app/` untuk route.
- `components/ui/` untuk komponen primitif.
- `components/sections/` untuk section halaman.
- `lib/` untuk utilitas.

## Tailwind

- Token warna/spacing didefinisikan di `globals.css` atau config.
- Jangan hardcode hex atau px berulang.

## Aksesibilitas

- Gunakan HTML semantik.
- Semua input form punya `label`.
- Semua gambar punya `alt` yang bermakna.
- Fokus keyboard harus terlihat.
- Navigasi keyboard berfungsi penuh.
- Kontras warna memadai.

## Data dan API

- Fetch data di server. Jangan pakai `useEffect` untuk data fetching.
- Pisahkan kode server dan client dengan jelas.
- Tangani semua state: loading, error, empty, dan success.
- Jangan bocorkan detail error internal ke UI.
- Jangan pakai `dangerouslySetInnerHTML` tanpa sanitasi.

## Dependency

- Jangan tambah dependency baru tanpa persetujuan.

## Testing

- Komponen interaktif diuji dengan Vitest + React Testing Library.
- Logika murni diuji dengan unit test.

## Definition of Done

| Jenis perubahan | Kriteria |
|---|---|
| Perubahan kecil | `lint` dan `build` lulus |
| Fitur | `lint`, `build`, test, audit aksesibilitas, dan semua state (loading/error/empty/success) |
| Implementasi dari Figma | Semua di atas ditambah cek fidelity pada empat lebar layar |
| Bug fix | Reproduksi bug dan tambahkan regression test |

## Commit

- Format Conventional Commits: `type(scope): deskripsi`.
- Scope: `welcome-aboard`, `portofolio`, atau `github`.
- Maksimal 72 karakter.
- Stage file spesifik (hindari `git add .`).
- Jangan `push` tanpa instruksi.

## Interaksi dengan Figma

- Implementasi dibatasi pada elemen yang terlihat di desain.
- Fitur non-Figma tetap menangani loading, error, empty, dan success.