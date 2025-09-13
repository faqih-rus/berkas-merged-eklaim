"use client";

import React from 'react';

export default function Lain() {
  return (
    <div className="p-6 bg-white">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-2">
          <h1 className="font-bold text-lg">DOKUMEN LAIN-LAIN</h1>
          <p className="text-sm">RSPAD GATOT SOEBROTO</p>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Dokumen Pendukung Lainnya</h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">No</th>
                  <th className="border border-gray-300 p-2 text-left">Jenis Dokumen</th>
                  <th className="border border-gray-300 p-2 text-left">Tanggal</th>
                  <th className="border border-gray-300 p-2 text-left">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">Surat Rujukan</td>
                  <td className="border border-gray-300 p-2">2025-01-30</td>
                  <td className="border border-gray-300 p-2">Rujukan dari SENTRA MEDIKA HOSPITAL CIKARANG</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">Hasil X-Ray</td>
                  <td className="border border-gray-300 p-2">2025-02-01</td>
                  <td className="border border-gray-300 p-2">X-Ray Femur menunjukkan fraktur</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">Persetujuan Tindakan</td>
                  <td className="border border-gray-300 p-2">2025-02-01</td>
                  <td className="border border-gray-300 p-2">Informed consent untuk operasi</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">4</td>
                  <td className="border border-gray-300 p-2">Surat Keterangan Dokter</td>
                  <td className="border border-gray-300 p-2">2025-02-05</td>
                  <td className="border border-gray-300 p-2">Keterangan kondisi pasien pasca operasi</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Catatan */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">Catatan Penting:</h4>
            <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
              <li>Semua dokumen telah diverifikasi dan sesuai dengan standar pelayanan</li>
              <li>Dokumen pendukung telah dilengkapi sesuai persyaratan BPJS</li>
              <li>Pasien diharapkan menyimpan dokumen ini sebagai bukti pelayanan</li>
            </ul>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-200 text-center py-2">
          <p className="text-sm">Dokumen pendukung pelayanan medis RSPAD Gatot Soebroto</p>
        </div>
      </div>
    </div>
  );
}