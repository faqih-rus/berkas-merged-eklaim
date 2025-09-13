# Berkas Sidebar eKlaim

Platform terintegrasi untuk mengelola dan mengorganisir berkas-berkas dalam sistem eKlaim dengan antarmuka yang mudah digunakan.

## Getting Started

### Prerequisites

Pastikan Anda memiliki Node.js versi 18 atau lebih tinggi:

```bash
node --version
npm --version
```

### Installation

1. Clone repository ini atau gunakan project yang sudah ada
2. Install dependencies:

```bash
npm install
```

### Development

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### Build

Untuk membuat production build:

```bash
npm run build
npm start
```

## Fitur

- **Organisasi Berkas**: Kelola dan organisir semua berkas eKlaim dengan sistem kategorisasi
- **Pencarian Cepat**: Temukan berkas dengan fitur pencarian yang canggih
- **Keamanan Terjamin**: Data berkas aman dengan sistem keamanan berlapis

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Code linting

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
└── lib/
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
