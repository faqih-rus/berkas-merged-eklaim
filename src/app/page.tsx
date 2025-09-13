"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BuktiTindakanLayanan from "./Navbar/BuktiTindakanLayanan";
import Lain from "./Navbar/Lain";
import Download from "./Navbar/Download";
import { PDFDocument } from "pdf-lib";

// Komponen BerkasMerged untuk menampilkan data SEP dan Laporan Pembedahan
function BerkasMerged() {
  return (
    <div className="p-6 bg-white">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mb-6">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-2">
          <h1 className="font-bold text-lg">BERKAS KESELAMATAN</h1>
          <p className="text-sm">Badan Penyelenggara Jaminan Sosial Kesehatan</p>
        </div>
        
        {/* Title */}
        <div className="bg-blue-700 text-white text-center py-2">
          <h2 className="font-bold">SURAT ELIGIBILITAS PESERTA</h2>
          <p className="text-sm">RSPAD GATOT SOEBROTO</p>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-semibold">No. SEP</p>
              <p className="text-sm">0901R0030225V000003</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Tgl. SEP</p>
              <p className="text-sm">2025-02-01</p>
            </div>
            <div>
              <p className="text-sm font-semibold">No.Kartu</p>
              <p className="text-sm">0001797705415 / MR. 01209793</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Nama Peserta</p>
              <p className="text-sm">SITI FATONAH</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Tgl.Lahir</p>
              <p className="text-sm">1964-03-31</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Kelamin</p>
              <p className="text-sm">Perempuan</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Nomor Telepon</p>
              <p className="text-sm">-</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Poli Tujuan</p>
              <p className="text-sm">-</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Faskes Perujuk</p>
              <p className="text-sm">SENTRA MEDIKA HOSPITAL CIKARANG</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Diagnosa Awal</p>
              <p className="text-sm">Fracture of neck of femur</p>
            </div>
          </div>
          
          {/* Catatan */}
          <div className="border-t border-gray-300 pt-3">
            <p className="text-xs italic">
              * Sera Meryretuljid BRJS Keschatan menyapatkan informasi Medis Pasien jika diperlukan.
              <br />
              * SEP bulan sebagai bidit perinamina peserta.
              <br />
              * Dungan tampon tuama SEP elektronik ini merupakan hasil validasi terhadap eligibilitas Pasien secara elektronik (validasi finger print atau biometrik ) asien validasi lain) dan edetputnya Pasien dapat mengakses pelayanan keschatan nijukan sesuai ketentuan berikut. Kidematan dan kesatlan atas informasi data Pasien menjadi tangzung jumeb penuh FRKTL
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-200 text-center py-2">
          <p className="text-sm font-bold">MARKAS BESAR TNI ANGKATAN DARAT</p>
          <p className="text-sm font-bold">RSPAD GATOT SOEBROTO</p>
        </div>
      </div>
      
      {/* Laporan Pembedahan */}
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-2">
          <h2 className="font-bold">LAPORAN PEMBEDAHAN</h2>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-semibold">Nama</p>
              <p className="text-sm">SITI FATONAH</p>
            </div>
            <div>
              <p className="text-sm font-semibold">No.RM</p>
              <p className="text-sm">01209793</p>
            </div>
          </div>
          
          {/* Informasi Pembedahan */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Informasi Pembedahan</h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Jenis Tindakan</th>
                  <th className="border border-gray-300 p-2 text-left">Tanggal</th>
                  <th className="border border-gray-300 p-2 text-left">Dokter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Operasi Patah Tulang Paha</td>
                  <td className="border border-gray-300 p-2">2025-02-05</td>
                  <td className="border border-gray-300 p-2">Dr. Ahmad Santoso, Sp.B</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Hasil Pembedahan */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Hasil Pembedahan</h3>
            <div className="border border-gray-300 p-3 rounded">
              <p className="text-sm">
                Tindakan operasi berjalan lancar. Pasien telah dilakukan fiksasi interna dengan plate and screws.
                Kondisi pasien stabil pasca operasi dan dipindahkan ke ruang pemulihan.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-200 text-center py-2">
          <p className="text-sm">Dokumen ini merupakan bagian dari rekam medis elektronik RSPAD Gatot Soebroto</p>
        </div>
      </div>
    </div>
  );
}

// Tab configuration - maps labels to slugs
const TABS = [
  { label: "BERKAS MERGED", slug: "berkas-merged" },
  { label: "Lab PK", slug: "lab-pk" },
  { label: "Lab PA", slug: "lab-pa" },
  { label: "Rad", slug: "rad" },
  { label: "Resume", slug: "resume" },
  { label: "Lab Pembedahan", slug: "lab-pembedahan" },
  { label: "Bukti Tindakan/Layanan", slug: "bukti-tindakan-layanan" },
  { label: "S E P", slug: "sep" },
  { label: "Billing", slug: "billing" },
  { label: "Top Up", slug: "top-up" },
  { label: "Jadwal", slug: "jadwal" },
  { label: "Lain", slug: "lain" },
  { label: "Download", slug: "download" }
];

// Map tab slugs to PDF URLs based on your file structure
const TAB_PDFS: Record<string, string | string[]> = {
  "berkas-merged": [
    "/Lab PK-1.pdf",
    "/Lab PK-2.pdf", 
    "/LAB PA-1.pdf",
    "/Rad-1.pdf",
    "/Rad-2.pdf",
    "/Surat Permintaan Konsultasi - Resume - 1.pdf",
    "/Surat Permintaan Konsultasi - Resume - 2.pdf",
    "/Lap Pembedahan - 1.pdf",
    "/Bukti Tindakan Layanan - 1.pdf",
    "/Bukti Tindakan Layanan - 2.pdf",
    "/S E P - 1.pdf",
    "/Billing - 1.pdf",
    "/Lain lain - 1.pdf"
  ], // All PDF files merged
  "lab-pk": ["/Lab PK-1.pdf", "/Lab PK-2.pdf"], // Multiple files
  "lab-pa": "/LAB PA-1.pdf",
  "rad": ["/Rad-1.pdf", "/Rad-2.pdf"], // Multiple files
  "resume": ["/Surat Permintaan Konsultasi - Resume - 1.pdf", "/Surat Permintaan Konsultasi - Resume - 2.pdf"], // Multiple files
  "lab-pembedahan": "/Lap Pembedahan - 1.pdf",
  "bukti-tindakan-layanan": ["/Bukti Tindakan Layanan - 1.pdf", "/Bukti Tindakan Layanan - 2.pdf"], // Multiple files - but will show custom component
  "sep": "/S E P - 1.pdf",
  "billing": "/Billing - 1.pdf",
  "top-up": "/test.pdf", // No specific top-up PDF, using test file
  "jadwal": "/test.pdf", // No specific jadwal PDF, using test file
  "lain": "/Lain lain - 1.pdf", // Will show custom component, but PDF available if needed
  "download": [] // No PDF preview, will show download buttons instead
};// Sample metadata for search functionality
const METADATA: Record<string, Array<{ title: string; date: string; tags: string[] }>> = {
  "berkas-merged": [
    { title: "Berkas Merged E-Klaim", date: "2025-09-11", tags: ["rekam medis", "e-klaim", "merged"] },
    { title: "Dokumen Lengkap Pasien", date: "2025-09-11", tags: ["lengkap", "berkas"] }
  ],
  "lab-pk": [
    { title: "Hasil Lab Patologi Klinik - Part 1", date: "2025-09-10", tags: ["patologi", "klinik", "lab"] },
    { title: "Hasil Lab Patologi Klinik - Part 2", date: "2025-09-10", tags: ["patologi", "klinik", "lab"] }
  ],
  // ... (metadata lainnya tetap sama)
};

// Main Page Component
export default function RecordsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentTabSlug = searchParams.get("tab") || "berkas-merged";
  const searchQuery = searchParams.get("q") || "";
  
  const currentTab = TABS.find(tab => tab.slug === currentTabSlug) || TABS[0];
  const pdfUrls = TAB_PDFS[currentTabSlug];
  
  const tabMetadata = useMemo(() => {
    return METADATA[currentTabSlug] || [];
  }, [currentTabSlug]);
  
  const filteredMetadata = useMemo(() => {
    if (!searchQuery) return tabMetadata;
    
    const query = searchQuery.toLowerCase();
    return tabMetadata.filter(item => (
      item.title.toLowerCase().includes(query) || 
      item.date.includes(query) || 
      item.tags.some(tag => tag.toLowerCase().includes(query))
    ));
  }, [tabMetadata, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto" style={{ maxWidth: '1440px' }}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden" style={{ width: '100%', maxWidth: '1440px' }}>
          <Tabs 
            tabs={TABS} 
            currentTabSlug={currentTabSlug} 
          />
          
          {/* PDF Preview Area */}
          <div className="bg-white">
            {currentTabSlug === "bukti-tindakan-layanan" ? (
              <BuktiTindakanLayanan />
            ) : currentTabSlug === "lain" ? (
              <Lain />
            ) : currentTabSlug === "download" ? (
              <Download />
            ) : (
              <PdfPanel 
                pdfUrls={pdfUrls} 
                tabId={currentTabSlug}
                tabLabel={currentTab.label}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --------- COMPONENT: Tabs ---------
interface TabsProps {
  tabs: Array<{ label: string; slug: string }>;
  currentTabSlug: string;
}

function Tabs({ tabs, currentTabSlug }: TabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleTabClick = useCallback((slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", slug);
    params.delete("q");
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);
  
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      
      let newIndex = index;
      if (e.key === "ArrowLeft") {
        newIndex = index === 0 ? tabs.length - 1 : index - 1;
      } else {
        newIndex = index === tabs.length - 1 ? 0 : index + 1;
      }
      
      const tabElement = document.getElementById(`tab-${tabs[newIndex].slug}`);
      tabElement?.focus();
    } else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleTabClick(tabs[index].slug);
    }
  }, [handleTabClick, tabs]);
  
  return (
    <div role="tablist" aria-label="Medical records tabs" className="flex overflow-x-auto bg-sky-300 px-2 py-1">
      {tabs.map((tab, index) => (
        <button
          key={tab.slug}
          id={`tab-${tab.slug}`}
          role="tab"
          aria-selected={currentTabSlug === tab.slug}
          aria-controls={`panel-${tab.slug}`}
          tabIndex={currentTabSlug === tab.slug ? 0 : -1}
          className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-all focus:outline-none rounded-md mx-1 ${
            currentTabSlug === tab.slug 
            ? "bg-sky-500 text-white shadow-md" 
            : "bg-sky-200 text-gray-700 hover:bg-sky-400 hover:text-white"
          }`}
          onClick={() => handleTabClick(tab.slug)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// --------- COMPONENT: PdfPanel ---------
interface PdfPanelProps {
  pdfUrls: string | string[] | undefined;
  tabId: string;
  tabLabel: string;
}

function PdfPanel({ pdfUrls, tabId, tabLabel }: PdfPanelProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [key, setKey] = useState(0);
  const [useIframe, setUseIframe] = useState(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const [merging, setMerging] = useState(false);
  
  // Convert to array for consistent handling
  const pdfArray = useMemo(() => {
    if (!pdfUrls) return [];
    return Array.isArray(pdfUrls) ? pdfUrls : [pdfUrls];
  }, [pdfUrls]);
  
  const hasMultiplePdfs = pdfArray.length > 1;
  
  // Helper function to get display name from PDF URL
  const getPdfDisplayName = (url: string) => {
    const filename = url.split('/').pop() || '';
    return filename.replace('.pdf', '').replace(/-/g, ' ');
  };

  // Function to merge PDFs
  const mergePdfs = useCallback(async (urls: string[]): Promise<string> => {
    setMerging(true);
    try {
      const mergedPdf = await PDFDocument.create();
      
      for (const url of urls) {
        try {
          console.log(`Fetching PDF: ${url}`);
          const response = await fetch(url);
          if (!response.ok) {
            console.warn(`Failed to fetch PDF from ${url}: ${response.status}`);
            continue;
          }
          const arrayBuffer = await response.arrayBuffer();
          const pdf = await PDFDocument.load(arrayBuffer);
          const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
          
          pages.forEach((page) => {
            mergedPdf.addPage(page);
          });
          console.log(`Successfully added pages from: ${url}`);
        } catch (err) {
          console.warn(`Failed to load PDF from ${url}:`, err);
        }
      }
      
      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([new Uint8Array(mergedPdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      
      console.log(`Successfully merged ${urls.length} PDFs`);
      return url;
    } catch (error) {
      console.error("Error merging PDFs:", error);
      throw error;
    } finally {
      setMerging(false);
    }
  }, []);
  
  // Effect to handle PDF loading and merging
  useEffect(() => {
    let isActive = true;
    
    const initializePdf = async () => {
      if (!isActive) return;
      
      setLoading(true);
      setError(false);
      setUseIframe(false);
      setKey(prev => prev + 1);
      
      // Clean up previous merged URL
      setMergedPdfUrl(prev => {
        if (prev) {
          URL.revokeObjectURL(prev);
        }
        return null;
      });
      
      // If we have multiple PDFs, merge them (except for special tabs)
      if (pdfArray.length > 1 && !["bukti-tindakan-layanan", "lain", "download"].includes(tabId)) {
        try {
          const mergedUrl = await mergePdfs(pdfArray);
          if (isActive) {
            setMergedPdfUrl(mergedUrl);
          } else {
            // Clean up if component was unmounted
            URL.revokeObjectURL(mergedUrl);
          }
        } catch (error) {
          if (isActive) {
            console.error("Failed to merge PDFs:", error);
            setError(true);
          }
        }
      }
      
      // Set loading to false after a short delay to ensure PDF is ready
      if (isActive) {
        setTimeout(() => {
          if (isActive) {
            setLoading(false);
          }
        }, 500);
      }
    };
    
    initializePdf();
    
    // Cleanup function
    return () => {
      isActive = false;
    };
  }, [pdfUrls, tabId, pdfArray, mergePdfs]); // Include all necessary dependencies
  
  // Separate effect for cleanup on unmount
  useEffect(() => {
    return () => {
      if (mergedPdfUrl) {
        URL.revokeObjectURL(mergedPdfUrl);
      }
    };
  }, [mergedPdfUrl]);
  
  // Determine which PDF URL to use
  const displayPdfUrl = useMemo(() => {
    // If we have a merged PDF, use it
    if (mergedPdfUrl) return mergedPdfUrl;
    // Otherwise use the first PDF
    return pdfArray.length > 0 ? pdfArray[0] : null;
  }, [mergedPdfUrl, pdfArray]);
  
  const handleLoad = () => {
    console.log('PDF loaded successfully');
    setLoading(false);
  };
  
  const handleError = () => {
    console.log('PDF load error, trying fallback');
    setLoading(false);
    if (!useIframe) {
      setUseIframe(true);
      setLoading(true);
      setKey(prev => prev + 1);
    } else {
      setError(true);
    }
  };
  
  // Set a timeout to stop loading if it takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.log('PDF loading timeout, stopping loader');
        setLoading(false);
      }
    }, 5000); // Increased timeout to 5 seconds for merging
    
    return () => clearTimeout(timer);
  }, [loading, key]);

  const handleRetry = () => {
    setLoading(true);
    setError(false);
    setUseIframe(false);
    setKey(prev => prev + 1);
  };
  
  // If no PDF URL is available for this tab
  if (pdfArray.length === 0) {
    return (
      <div 
        id={`panel-${tabId}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabId}`}
        className="bg-white min-h-[80vh] flex flex-col items-center justify-center p-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Dokumen tidak tersedia</h3>
        <p className="text-gray-500 mb-4 text-center">Tab ini belum memiliki dokumen PDF.</p>
      </div>
    );
  }
  
  return (
    <div 
      id={`panel-${tabId}`}
      role="tabpanel"
      aria-labelledby={`tab-${tabId}`}
      className="bg-white"
    >
      {/* Show file count if multiple PDFs */}
      {hasMultiplePdfs && (
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 text-center">
          <span className="text-sm font-medium text-gray-700">
            {merging 
              ? `Menggabungkan ${pdfArray.length} dokumen...`
              : mergedPdfUrl 
                ? `${pdfArray.length} Dokumen Berhasil Digabung dalam 1 PDF`
                : `${pdfArray.length} Dokumen Tersedia - Menampilkan dokumen pertama`
            }
          </span>
        </div>
      )}
      
      <div className="bg-white">
        {/* Merging indicator */}
        {merging && (
          <div className="flex flex-col items-center justify-center h-[600px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
            <p className="mt-4 text-gray-700">Menggabungkan {pdfArray.length} dokumen menjadi 1 file PDF...</p>
          </div>
        )}
        
        {/* Loading skeleton */}
        {!merging && loading && (
          <div className="animate-pulse flex flex-col p-8 space-y-6 h-[600px]">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
            <div className="h-40 bg-gray-200 rounded w-full"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </div>
        )}
        
        {/* Error state */}
        {error && (
          <div className="flex flex-col items-center justify-center h-[600px] text-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-lg font-medium text-gray-700 mb-4">Tidak dapat memuat PDF</p>
            <p className="text-sm text-gray-500 mb-4">Gagal memuat dokumen</p>
            <button 
              onClick={handleRetry}
              className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Coba Lagi
            </button>
          </div>
        )}
        
        {/* PDF preview */}
        {!merging && displayPdfUrl && !error && (
          <div className="relative w-full bg-white">
            <div className="relative w-full h-[800px] bg-white">
              {!useIframe ? (
                <object
                  key={`object-${key}`}
                  data={displayPdfUrl}
                  type="application/pdf"
                  className={`absolute inset-0 w-full h-full border-0 ${loading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleLoad}
                  title={`PDF document for ${tabLabel}`}
                  aria-label={`PDF viewer for ${tabLabel}`}
                >
                  <iframe
                    src={displayPdfUrl}
                    className="w-full h-full border-0"
                    onLoad={handleLoad}
                    onError={handleError}
                  />
                  <p className="p-4 text-center">Browser Anda tidak mendukung tampilan PDF. Anda dapat <a href={displayPdfUrl} download className="text-sky-500 underline">download PDF</a> ini.</p>
                </object>
              ) : (
                <iframe
                  key={`iframe-${key}`}
                  src={displayPdfUrl}
                  className={`absolute inset-0 w-full h-full border-0 ${loading ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleLoad}
                  onError={handleError}
                  title={`PDF document for ${tabLabel}`}
                />
              )}
            </div>
            
            {/* Show individual document links only if NOT merged (for tabs that don't support merging) */}
            {hasMultiplePdfs && !mergedPdfUrl && (
              <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Dokumen tambahan:</p>
                <div className="flex flex-wrap gap-2">
                  {pdfArray.slice(1).map((pdfUrl, index) => (
                    <a
                      key={`additional-${index}`}
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-700 text-sm rounded-md hover:bg-sky-200 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {getPdfDisplayName(pdfUrl)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}