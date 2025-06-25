# SIMBELMAWA React Dashboard - Educational Version

**🎓 FOR EDUCATIONAL PURPOSE ONLY**

Website mirip dengan sistem SIMBELMAWA yang dibuat untuk tujuan pembelajaran dan demonstrasi teknologi web modern. Project ini menampilkan data lowongan magang dengan UI yang interaktif dan responsif.

## ⚠️ DISCLAIMER

- Project ini dibuat **MURNI UNTUK TUJUAN EDUKASI**
- Tidak berafiliasi dengan sistem resmi SIMBELMAWA
- Data yang ditampilkan hanya untuk demonstrasi pembelajaran
- Digunakan untuk mempelajari React.js, modern web development, dan UI/UX design

## 🚀 Fitur Utama & Kelebihan

- **Modern UI/UX**: Design yang bersih dan modern dengan animasi yang halus
- **Interactive Job Cards**: Klik pada job card untuk melihat detail lengkap
- **📊 KELEBIHAN: Jumlah Posisi**: Menampilkan jumlah posisi yang akan diterima per lowongan
- **Advanced Filtering**: Filter berdasarkan kategori, provinsi, dan pencarian
- **Responsive Design**: Tampil sempurna di desktop, tablet, dan mobile
- **Real-time Search**: Pencarian yang responsif dengan debouncing
- **Beautiful Animations**: Menggunakan Framer Motion untuk animasi yang smooth
- **Modal Detail**: Modal interaktif yang menampilkan detail lengkap lowongan
- **Enhanced Information**: Menampilkan gaji estimasi, durasi magang, dan benefit

## 🛠 Tech Stack

- **React 18** - Library JavaScript untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi untuk React
- **Lucide React** - Icon library yang modern
- **Headless UI** - Unstyled UI components

## 📦 Instalasi

1. **Clone atau copy project ini**
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Copy data JSON** dari project PHP lama ke folder `public/`:
   ```bash
   copy "d:\PROJECTVPS\simbelmawa\output\*.json" "d:\PROJECTVPS\simbelmawa-react\public\"
   ```

## 🚀 Menjalankan Aplikasi

1. **Development Mode:**

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di http://localhost:5173

2. **Build untuk Production:**

   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## 📁 Struktur Project

```
simbelmawa-react/
├── public/
│   └── lowongan_all_20250625_090649.json  # Data lowongan
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigasi header
│   │   ├── HeroSection.jsx     # Section hero dengan statistik
│   │   ├── FilterSection.jsx   # Komponen filter pencarian
│   │   ├── JobCard.jsx         # Card untuk setiap lowongan
│   │   ├── JobModal.jsx        # Modal detail lowongan
│   │   ├── Pagination.jsx      # Komponen pagination
│   │   └── StatsSection.jsx    # Section statistik bottom
│   ├── App.jsx                 # Komponen utama
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## ✨ Fitur Detail

### 1. Interactive Job Cards

- Hover effects dengan smooth animations
- Click to open detailed modal
- Responsive grid layout

### 2. Advanced Job Modal

- Detailed job information
- Requirements and benefits section
- Salary and duration information
- Beautiful gradient design
- Smooth open/close animations

### 3. Smart Filtering

- Real-time search across multiple fields
- Category and province dropdowns
- Auto-submit on filter change
- Reset filters functionality

### 4. Modern Design

- Gradient backgrounds
- Glass morphism effects
- Consistent color scheme
- Beautiful typography with Inter font

## 🎨 Customization

### Colors

Edit `tailwind.config.js` untuk mengubah color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6', // Main blue
        600: '#2563eb', // Darker blue
      }
    }
  }
}
```

### Animations

Edit animasi di komponen menggunakan Framer Motion variants.

## 🔧 Troubleshooting

1. **Port sudah digunakan:**

   - Vite akan otomatis mencari port yang tersedia
   - Atau specify port: `npm run dev -- --port 3000`

2. **Data tidak muncul:**

   - Pastikan file JSON ada di folder `public/`
   - Check console browser untuk error

3. **Build error:**
   - Jalankan `npm install` ulang
   - Clear node_modules dan install ulang

## 📝 Migration dari PHP

Aplikasi ini menggantikan `index.php` dengan fitur yang sama plus:

- Interactive modal details
- Better performance dengan Virtual DOM
- Modern development experience
- Easy deployment ke Vercel/Netlify

## 🚀 Deployment

### 🌐 GitHub Pages (Recommended untuk Educational Project)

1. **Setup Repository:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Educational SIMBELMAWA React App"
   ```

2. **Create GitHub Repository:**

   - Buat repository baru di GitHub
   - Nama: `simbelmawa-react-educational`
   - Set sebagai public repository

3. **Push ke GitHub:**

   ```bash
   git remote add origin https://github.com/username/simbelmawa-react-educational.git
   git branch -M main
   git push -u origin main
   ```

4. **Setup GitHub Pages:**

   - Masuk ke repository Settings
   - Scroll ke section "Pages"
   - Source: "GitHub Actions"
   - Akan otomatis deploy setiap push ke main branch

5. **Auto-Deploy dengan GitHub Actions:**
   Project sudah include `.github/workflows/deploy.yml` untuk auto-deploy

### Vercel (Alternative)

1. Push ke GitHub repository
2. Connect ke Vercel
3. Deploy otomatis

### Netlify (Alternative)

1. Build project: `npm run build`
2. Upload folder `dist/` ke Netlify

### Manual Hosting

1. Build: `npm run build`
2. Serve folder `dist/` dengan web server apapun

## 📡 Live Demo

- GitHub Pages: `https://username.github.io/simbelmawa-react-educational/`
- Pastikan ganti `username` dengan GitHub username Anda

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

**Dibuat dengan ❤️ menggunakan React dan Tailwind CSS**
