"use client";

import React, { useState } from 'react';

export default function Lain() {
  const [selectedItems, setSelectedItems] = useState<number[]>([1]); // Default first item checked

  const toggleItem = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const medicalItems = [
    {
      id: 1,
      tanggal: "07-09-2025 19:15",
      namaPemeriksaan: "Catatan Terintegrasi",
      dokter: "",
      viewDetail: true,
      liver: true
    },
    {
      id: 2,
      tanggal: "07-09-2025 19:04",
      namaPemeriksaan: "Pengkajian Unit Gawat Darurat (UGD)",
      dokter: "dr. Rosiana Candra Pardosi",
      viewDetail: false,
      liver: false
    },
    {
      id: 3,
      tanggal: "07-09-2025 19:04",
      namaPemeriksaan: "Pengkajian Unit Gawat Darurat (UGD) - Triase",
      dokter: "dr. Rosiana Candra Pardosi",
      viewDetail: false,
      liver: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section with ITEM label */}
      <div className="bg-green-500 text-white text-center py-2 font-semibold">
        ITEM
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-400">
              <th className="border border-gray-300 px-4 py-3 text-center text-white font-medium w-16">No</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-white font-medium w-40">Tanggal</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-white font-medium">Nama Pemeriksaan</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-white font-medium w-48">Dokter</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-white font-medium w-20">Liver</th>
            </tr>
          </thead>
          <tbody>
            {medicalItems.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-center text-sm">
                  {item.tanggal}
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                      {item.namaPemeriksaan}
                    </span>
                    {item.viewDetail && (
                      <button className="ml-3 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm border border-blue-300 transition-colors">
                        View Detail
                      </button>
                    )}
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-center text-sm text-gray-600">
                  {item.dokter || "-"}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Information Section */}
      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
        <h3 className="font-semibold text-gray-800 mb-3">Informasi Tambahan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p><strong>Total Pemeriksaan:</strong> {medicalItems.length}</p>
            <p><strong>Pemeriksaan Aktif:</strong> {selectedItems.length}</p>
          </div>
          <div>
            <p><strong>Tanggal Terakhir:</strong> 07-09-2025</p>
            <p><strong>Status:</strong> Dalam Pemeriksaan</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-wrap gap-3 justify-end">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Lihat Detail
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Data
          </button>
          <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Pemeriksaan
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-3 bg-blue-50 border-t border-blue-200">
        <div className="text-center text-sm text-blue-700">
          <p className="mb-1"><strong>RSPAD GATOT SOEBROTO</strong></p>
          <p>Sistem Informasi Rekam Medis - Data Pemeriksaan Lain-lain</p>
        </div>
      </div>
    </div>
  );
}