# PDF Viewer Component - Dokumentasi

## Deskripsi
Komponen PDF Viewer yang modular dan dapat digunakan kembali untuk menampilkan file PDF dengan fitur navigasi, zoom, dan kontrol halaman.

## Lokasi File
- Komponen utama: `src/app/components/PdfViewer.tsx`
- Contoh penggunaan: `src/app/example/page.tsx`

## Fitur
- ✅ Tampilan PDF dengan kontrol navigasi
- ✅ Zoom in/out dengan kontrol persentase
- ✅ Navigasi halaman (next/previous)
- ✅ Input nomor halaman langsung
- ✅ Toolbar yang dapat disembunyikan
- ✅ Loading state dan error handling
- ✅ Responsive design
- ✅ Callback functions untuk monitoring

## Props Interface

```typescript
interface PdfViewerProps {
  fileUrl?: string;           // URL file PDF
  width?: number;             // Lebar viewer (default: 800)
  height?: number;            // Tinggi viewer (default: 600)
  showToolbar?: boolean;      // Tampilkan toolbar (default: true)
  showPageInfo?: boolean;     // Tampilkan info halaman (default: true)
  className?: string;         // CSS class tambahan
  onPageChange?: (pageNumber: number) => void;     // Callback saat halaman berubah
  onDocumentLoad?: (numPages: number) => void;     // Callback saat dokumen dimuat
}
```

## Cara Penggunaan

### 1. Import Komponen
```typescript
import PdfViewer from './components/PdfViewer';
```

### 2. Penggunaan Dasar
```jsx
<PdfViewer />
```

### 3. Penggunaan dengan Kustomisasi
```jsx
<PdfViewer
  fileUrl="/documents/laporan.pdf"
  width={900}
  height={700}
  showToolbar={true}
  showPageInfo={true}
  className="my-custom-class"
  onPageChange={(page) => console.log('Halaman:', page)}
  onDocumentLoad={(pages) => console.log('Total halaman:', pages)}
/>
```

### 4. Penggunaan dalam Layout Besar
```jsx
function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        {/* Sidebar */}
        <SidebarComponent />
      </div>
      
      <div className="col-span-2">
        {/* PDF Viewer */}
        <PdfViewer
          fileUrl="/berkas/dokumen.pdf"
          width={800}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
```

## Contoh Integrasi dengan State Management

```jsx
function DocumentViewer() {
  const [pdfUrl, setPdfUrl] = useState('/sample.pdf');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [viewerSize, setViewerSize] = useState({ width: 800, height: 600 });

  return (
    <div>
      {/* Kontrol */}
      <div className="mb-4 space-x-4">
        <button onClick={() => setPdfUrl('/doc1.pdf')}>
          Dokumen 1
        </button>
        <button onClick={() => setPdfUrl('/doc2.pdf')}>
          Dokumen 2
        </button>
        <button onClick={() => setViewerSize({ width: 1000, height: 800 })}>
          Layar Besar
        </button>
      </div>

      {/* Viewer */}
      <PdfViewer
        fileUrl={pdfUrl}
        width={viewerSize.width}
        height={viewerSize.height}
        onPageChange={setCurrentPage}
        onDocumentLoad={setTotalPages}
      />

      {/* Info */}
      <div className="mt-4">
        <p>Halaman {currentPage} dari {totalPages}</p>
      </div>
    </div>
  );
}
```

## Dependencies
- `react-pdf`: Untuk rendering PDF
- `React`: hooks useState
- `Tailwind CSS`: untuk styling

## CSS yang Diperlukan
Komponen secara otomatis mengimpor CSS yang diperlukan:
```typescript
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
```

## Customization
Komponen dapat disesuaikan dengan:
1. Props untuk ukuran dan perilaku
2. CSS classes melalui prop `className`
3. Callback functions untuk integrasi dengan aplikasi
4. Styling Tailwind CSS yang sudah ada

## Akses ke Halaman Contoh
Buka `/example` untuk melihat implementasi lengkap komponen dalam konteks halaman yang lebih besar.

## Tips Penggunaan
1. Pastikan file PDF dapat diakses dari URL yang diberikan
2. Gunakan callback `onDocumentLoad` untuk mengetahui total halaman
3. Gunakan callback `onPageChange` untuk sinkronisasi dengan state aplikasi
4. Sesuaikan `width` dan `height` sesuai layout halaman
5. Set `showToolbar={false}` jika ingin membuat kontrol custom sendiri
