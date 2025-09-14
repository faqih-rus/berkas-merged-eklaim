# README - Struktur File PDF

## Pastikan File PDF Ada di Lokasi yang Benar

Semua file PDF harus berada di folder `public/` di root project:

```
berkas-sidebar-eklaim/
├── public/
│   ├── Lab PK-1.pdf                              ✅
│   ├── Lab PK-2.pdf                              ✅
│   ├── LAB PA-1.pdf                              ✅
│   ├── Rad-1.pdf                                 ✅
│   ├── Rad-2.pdf                                 ✅
│   ├── Surat Permintaan Konsultasi - Resume - 1.pdf  ✅
│   ├── Surat Permintaan Konsultasi - Resume - 2.pdf  ✅
│   ├── Lap Pembedahan - 1.pdf                   ✅
│   ├── Bukti Tindakan Layanan - 1.pdf           ✅
│   ├── Bukti Tindakan Layanan - 2.pdf           ✅
│   ├── S E P - 1.pdf                            ✅
│   ├── Billing - 1.pdf                          ✅
│   ├── Lain lain - 1.pdf                        ✅
│   └── test.pdf                                  ✅
├── src/
├── scripts/
└── ...
```

## Command untuk Test Local

```bash
# Test apakah PDF files ter-copy dengan benar
npm run copy-pdfs

# Build dan test
npm run build
```

## Troubleshooting

1. **Pastikan file PDF ada di folder `public/`**
2. **Commit semua file PDF ke repository GitHub**
3. **Redeploy di Netlify setelah commit**
4. **Check build logs di Netlify untuk error message**

## Yang Sudah Diperbaiki

✅ Next.js config untuk static export
✅ Netlify config untuk PDF serving
✅ Build script untuk copy PDF files
✅ Error handling untuk production
✅ .gitignore updated untuk include PDF files