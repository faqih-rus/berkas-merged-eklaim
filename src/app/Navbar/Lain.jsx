"use client";

import React, { useState } from 'react';

// Sample data for Lain tab
const lainData = [
  {
    id: 1,
    tanggal: "07-09-2025 19:15",
    namaPemeriksaan: "Catatan Terintegrasi",
    dokter: "",
    liver: true,
    viewDetail: true
  },
  {
    id: 2,
    tanggal: "07-09-2025 19:04",
    namaPemeriksaan: "Pengkajian Unit Gawat Darurat (UGD)",
    dokter: "dr. Rosiana Candra Pardosi",
    liver: false,
    viewDetail: false
  },
  {
    id: 3,
    tanggal: "07-09-2025 19:04",
    namaPemeriksaan: "Pengkajian Unit Gawat Darurat (UGD) - Triase",
    dokter: "dr. Rosiana Candra Pardosi",
    liver: false,
    viewDetail: false
  }
];

export default function Lain() {
  return (
    <div className="bg-white min-h-[80vh]">
      {/* Header with ITEM label */}
      <div className="bg-green-500 text-white text-center py-3 font-medium text-lg">
        ITEM
      </div>

      {/* Main Table */}
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300 w-16">
                No
              </th>
              <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300 w-48">
                Tanggal
              </th>
              <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300 flex-1">
                Nama Pemeriksaan
              </th>
              <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300 w-64">
                Dokter
              </th>
              <th className="px-4 py-3 text-left text-white font-medium w-24">
                Liver
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {lainData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-4 text-center border-r border-gray-200 text-gray-700">
                  {item.id}
                </td>
                <td className="px-4 py-4 border-r border-gray-200 text-gray-700">
                  {item.tanggal}
                </td>
                <td className="px-4 py-4 border-r border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">{item.namaPemeriksaan}</span>
                    {item.viewDetail && (
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors">
                        View Detail
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 border-r border-gray-200 text-gray-700">
                  {item.dokter}
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex justify-center">
                    <input
                      type="checkbox"
                      checked={item.liver}
                      readOnly
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}