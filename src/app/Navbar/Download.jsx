"use client";

import React from 'react';

export default function Download() {
  const handleDownloadRekap = () => {
    // Download the merged PDF file
    const link = document.createElement('a');
    link.href = '/Prototype Berkas Merged-Eklaim-11092025.pdf';
    link.download = 'Rekap Berkas E-Klaim.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={handleDownloadRekap}
          className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium text-lg"
        >
          Download Rekap PDF
        </button>
      </div>
    </div>
  );
}