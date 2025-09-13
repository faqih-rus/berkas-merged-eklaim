"use client";

import React, { useState } from 'react';

// Sample data for Bukti Tindakan Pelayanan
const buktiTindakanData = [
  {
    id: 1,
    tanggal: "08-09-2025",
    judul: "General",
    reg: "",
    kategori: "RESUME"
  },
  {
    id: 2,
    tanggal: "08-09-2025", 
    judul: "General",
    reg: "",
    kategori: "RESUME"
  }
];

const detailData = [
  {
    id: 1,
    tanggal: "",
    judul: "RESUME",
    viewFile: "",
    rm: "",
    tampilLiver: ""
  },
  {
    id: 2,
    tanggal: "",
    judul: "PENGKAJIAN KHUSUS",
    viewFile: "",
    rm: "",
    tampilLiver: ""
  },
  {
    id: 3,
    tanggal: "",
    judul: "LABORATORIUM",
    viewFile: "",
    rm: "",
    tampilLiver: ""
  }
];

export default function BuktiTindakanLayanan() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white min-h-[80vh] p-6">
      {/* Header Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg border border-blue-300 hover:bg-blue-200 transition-colors"
        >
          <span className="mr-2 text-lg">{isExpanded ? '−' : '+'}</span>
          <span className="font-medium">Bukti Tindakan Pelayanan</span>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          {/* First Table - Main Records */}
          <div className="overflow-hidden border border-gray-300 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-400">
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    No
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    Judul
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    REG
                  </th>
                </tr>
              </thead>
              <tbody>
                {buktiTindakanData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-center border-r border-gray-200">
                      {item.id}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200">
                      {item.tanggal}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">
                        {item.judul}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {item.reg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Second Table - Detail Records */}
          <div className="overflow-hidden border border-gray-300 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-400">
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    No
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    Judul
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    View File
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium border-r border-gray-300">
                    RM
                  </th>
                  <th className="px-4 py-3 text-left text-white font-medium">
                    Tampil Liver
                  </th>
                </tr>
              </thead>
              <tbody>
                {detailData.map((item, index) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-center border-r border-gray-200">
                      {/* Empty for these rows as shown in design */}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200">
                      {item.tanggal}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-700">
                      {item.judul}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200">
                      {item.viewFile}
                    </td>
                    <td className="px-4 py-3 border-r border-gray-200">
                      {item.rm}
                    </td>
                    <td className="px-4 py-3">
                      {item.tampilLiver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}