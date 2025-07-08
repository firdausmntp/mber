# 🎯 MBER - Prediksi Lowongan Magang

[![Deploy to GitHub Pages](https://github.com/firdausmntp/mber/actions/workflows/deploy.yml/badge.svg)](https://github.com/firdausmntp/mber/actions/workflows/deploy.yml)

Website prediksi lowongan magang yang menggunakan AI matching untuk memberikan rekomendasi lowongan terbaik berdasarkan profil pengguna.

## 🚀 Live Demo

**🌐 [https://firdausmntp.github.io/mber/](https://firdausmntp.github.io/mber/)**

## ⚠️ DISCLAIMER

- Project ini dibuat **MURNI UNTUK TUJUAN EDUKASI**
- Tidak berafiliasi dengan sistem resmi SIMBELMAWA
- Data yang ditampilkan hanya untuk demonstrasi pembelajaran
- Prediksi berbasis algoritma, hasil sebenarnya tergantung banyak faktor lain

## ✨ Fitur Utama

- 🎯 **Smart Matching**: AI dengan fuzzy search & database 1000+ keyword
- 📊 **Analisis Mendalam**: 100+ kategori skill & bidang
- 📈 **Prediksi Akurat**: Peluang diterima & rekomendasi
- 🔍 **Filter Advanced**: Hanya menampilkan lowongan dengan match > 0%
- 💡 **Rekomendasi**: Tips pengembangan skill & karir
- **Real-time Search**: Pencarian yang responsif dengan debouncing
- **Beautiful Animations**: Menggunakan Framer Motion untuk animasi yang smooth
- **Modal Detail**: Modal interaktif yang menampilkan detail lengkap lowongan

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS
- **UI Components**: Lucide React, Framer Motion, Headless UI
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages + GitHub Actions

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/firdausmntp/mber.git
cd mber

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

Project ini menggunakan **GitHub Actions** untuk auto-deploy ke GitHub Pages setiap kali ada push ke branch `main`.

### Auto Deploy Process:

1. ✅ Push code ke `main` branch
2. ✅ GitHub Actions akan otomatis:
   - Install dependencies
   - Build project
   - Deploy ke GitHub Pages
3. ✅ Website live di: https://firdausmntp.github.io/mber/

### Manual Deploy (jika diperlukan):

```bash
npm run deploy
```

## 🎯 Cara Kerja Prediksi

### Input:

- **Nama**: Identitas pengguna
- **Jurusan**: Program studi (contoh: Teknik Informatika)
- **Skills**: Keahlian dipisah koma (contoh: JavaScript, React, Python)
- **Lokasi**: Preferensi lokasi (opsional)

### Algoritma Matching:

1. **Keyword Generation**: Mapping jurusan → kategori skill + sinonim
2. **Smart Matching**: Fuzzy matching + exact matching dengan bobot
3. **Scoring System**: Posisi match (bobot 5) > Bidang match (bobot 3) > Deskripsi match (bobot 2)
4. **Acceptance Rate**: Estimasi peluang berdasarkan posisi tersedia vs pendaftar

### Output:

- ✅ Semua lowongan yang cocok (match > 0%)
- 📊 Match percentage per lowongan
- 📈 Peluang diterima dengan breakdown
- 💡 Rekomendasi skill development

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Create Pull Request

---

**Dibuat dengan ❤️ menggunakan React dan Tailwind CSS**
