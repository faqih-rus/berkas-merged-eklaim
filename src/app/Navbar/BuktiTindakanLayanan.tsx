"use client";

import React from 'react';

export default function BuktiTindakanLayanan() {
  return (
    <div className="p-6 bg-white">
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-2">
          <h1 className="font-bold text-lg">BUKTI TINDAKAN LAYANAN</h1>
          <p className="text-sm">RSPAD GATOT SOEBROTO</p>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Tindakan Medis yang Dilakukan</h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">No</th>
                  <th className="border border-gray-300 p-2 text-left">Tanggal</th>
                  <th className="border border-gray-300 p-2 text-left">Jenis Tindakan</th>
                  <th className="border border-gray-300 p-2 text-left">Dokter</th>
                  <th className="border border-gray-300 p-2 text-left">Biaya</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">2025-02-01</td>
                  <td className="border border-gray-300 p-2">Konsultasi Dokter Spesialis</td>
                  <td className="border border-gray-300 p-2">Dr. Ahmad Santoso, Sp.B</td>
                  <td className="border border-gray-300 p-2">Rp 350.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">2025-02-02</td>
                  <td className="border border-gray-300 p-2">Operasi Patah Tulang Paha</td>
                  <td className="border border-gray-300 p-2">Dr. Ahmad Santoso, Sp.B</td>
                  <td className="border border-gray-300 p-2">Rp 15.000.000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">3</td>
                  <td className="border border-gray-300 p-2">2025-02-03</td>
                  <td className="border border-gray-300 p-2">Perawatan Post Operasi</td>
                  <td className="border border-gray-300 p-2">Dr. Siti Nurhaliza, Sp.An</td>
                  <td className="border border-gray-300 p-2">Rp 2.500.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Total */}
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Biaya:</span>
              <span className="font-bold text-lg">Rp 17.850.000</span>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-200 text-center py-2">
          <p className="text-sm">Dokumen ini merupakan bukti sah tindakan medis yang telah dilakukan</p>
        </div>
      </div>
    </div>
  );
}