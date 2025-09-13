"use client";

import React from 'react';

export default function Download() {
  const downloadFiles = [
    {
      name: "Berkas Merged E-Klaim",
      filename: "Prototype Berkas Merged-Eklaim-11092025.pdf",
      size: "2.1 MB",
      description: "Dokumen lengkap gabungan semua berkas"
    },
    {
      name: "Lab Patologi Klinik - 1",
      filename: "Lab PK-1.pdf",
      size: "450 KB",
      description: "Hasil laboratorium patologi klinik bagian 1"
    },
    {
      name: "Lab Patologi Klinik - 2", 
      filename: "Lab PK-2.pdf",
      size: "320 KB",
      description: "Hasil laboratorium patologi klinik bagian 2"
    },
    {
      name: "Lab Patologi Anatomi",
      filename: "LAB PA-1.pdf", 
      size: "280 KB",
      description: "Hasil laboratorium patologi anatomi"
    },
    {
      name: "Radiologi - 1",
      filename: "Rad-1.pdf",
      size: "1.2 MB", 
      description: "Hasil pemeriksaan radiologi bagian 1"
    },
    {
      name: "Radiologi - 2",
      filename: "Rad-2.pdf",
      size: "980 KB",
      description: "Hasil pemeriksaan radiologi bagian 2"
    },
    {
      name: "Resume Medis - 1",
      filename: "Surat Permintaan Konsultasi - Resume - 1.pdf",
      size: "340 KB",
      description: "Resume dan surat permintaan konsultasi bagian 1"
    },
    {
      name: "Resume Medis - 2", 
      filename: "Surat Permintaan Konsultasi - Resume - 2.pdf",
      size: "380 KB",
      description: "Resume dan surat permintaan konsultasi bagian 2"
    },
    {
      name: "Laporan Pembedahan",
      filename: "Lap Pembedahan - 1.pdf",
      size: "420 KB",
      description: "Laporan lengkap tindakan pembedahan"
    },
    {
      name: "Bukti Tindakan Layanan - 1",
      filename: "Bukti Tindakan Layanan - 1.pdf", 
      size: "180 KB",
      description: "Bukti tindakan dan layanan medis bagian 1"
    },
    {
      name: "Bukti Tindakan Layanan - 2",
      filename: "Bukti Tindakan Layanan - 2.pdf",
      size: "220 KB", 
      description: "Bukti tindakan dan layanan medis bagian 2"
    },
    {
      name: "Surat Eligibilitas Peserta (SEP)",
      filename: "S E P - 1.pdf",
      size: "150 KB",
      description: "Surat Eligibilitas Peserta BPJS"
    },
    {
      name: "Billing",
      filename: "Billing - 1.pdf", 
      size: "120 KB",
      description: "Rincian biaya dan billing"
    },
    {
      name: "Dokumen Lain-lain",
      filename: "Lain lain - 1.pdf",
      size: "200 KB",
      description: "Dokumen pendukung lainnya"
    }
  ];

  const handleDownload = (filename: string) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    // Download all files sequentially with a small delay
    downloadFiles.forEach((file, index) => {
      setTimeout(() => {
        handleDownload(file.filename);
      }, index * 500); // 500ms delay between downloads
    });
  };

  return (
    <div className="p-6 bg-white">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-3">
          <h1 className="font-bold text-lg">DOWNLOAD BERKAS</h1>
          <p className="text-sm">Download semua dokumen rekam medis</p>
        </div>
        
        {/* Download All Button */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <button
            onClick={handleDownloadAll}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Semua Berkas ({downloadFiles.length} file)
          </button>
        </div>
        
        {/* Individual Downloads */}
        <div className="p-4">
          <h3 className="font-semibold mb-4 text-gray-700">Download Individual:</h3>
          <div className="space-y-3">
            {downloadFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{file.name}</h4>
                  <p className="text-sm text-gray-600">{file.description}</p>
                  <p className="text-xs text-gray-500 mt-1">Ukuran: {file.size}</p>
                </div>
                <button
                  onClick={() => handleDownload(file.filename)}
                  className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="bg-gray-200 p-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Total ukuran berkas:</strong> Sekitar 8.5 MB
            </p>
            <p className="text-xs text-gray-500">
              Semua dokumen dalam format PDF. Pastikan Anda memiliki PDF reader untuk membuka file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}