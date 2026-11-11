---
name: slice-figma
description: Jalankan alur Figma ke kode lewat agent Builder untuk satu halaman penuh
argument-hint: link Figma dan nama folder proyek
agent: "Builder"
---

# Slice Figma

Mulai alur implementasi desain Figma memakai agent Builder untuk **satu halaman penuh**, yaitu seluruh section yang berada dalam satu frame.

## Input

- Link Figma yang memuat `fileKey` dan `nodeId` frame halaman.
- Nama folder proyek.

Jika salah satu tidak ada, tanyakan dulu sebelum melanjutkan.

## Langkah

### 1. Ekstraksi

- Panggil Figma per section di dalam frame halaman tersebut, bukan sekali untuk seluruh halaman.
- Ekstrak token warna, spacing, dan tipografi.
- Ekspor logo, icon, dan gambar ke `public/`.
- Ringkas di chat: token, daftar section, daftar aset, dan aturan responsif.

### 2. Persetujuan

Minta persetujuan pengguna setelah ringkasan ekstraksi. Berhenti dan tunggu balasan. Jangan menulis kode sebelum disetujui.

Jika pengguna menolak, revisi ringkasan sesuai koreksinya, tampilkan ringkasan baru, lalu minta persetujuan lagi. Ulangi sampai disetujui.

### 3. Implementasi

Setelah disetujui:

- Buat token di `tailwind.config.ts` atau `app/globals.css`.
- Buat komponen section dan primitif.
- Buat halaman dan sambungkan komponen.
- Implementasi mobile-first sampai cocok dengan frame desktop.

### 4. Validasi

- Jalankan `npm run lint`.
- Jalankan `npm run build`.
- Jalankan `npm run test`.
- Nyalakan dev server dan cek lebar 375, 768, 1024, dan lebar desktop Figma.
- Catat selisih visual yang tersisa.

## Aturan

- Ikuti `.github/instructions/project.instructions.md`.
- Jangan menambah dependency tanpa persetujuan.
- Jangan `push` ke remote.
- Jangan memanggil sub-agent.

## Output

Laporkan file yang berubah, perintah dan hasilnya, status test, serta selisih visual per breakpoint.
