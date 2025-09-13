"use client";

import React, { useState } from 'react';

export default function BuktiTindakanLayanan() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-white">
      {/* Header with collapsible sections */}
      <div className="border-b border-gray-200">
        {/* Bukti Tindakan Pelayanan Section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('bukti-tindakan')}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 flex items-center justify-between border border-blue-200 rounded-sm"
          >
            <span className="text-blue-700 font-medium">+ Bukti Tindakan Pelayanan</span>
            <svg 
              className={`w-4 h-4 text-blue-700 transform transition-transform ${activeSection === 'bukti-tindakan' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeSection === 'bukti-tindakan' && (
            <div className="border border-gray-300 border-t-0">
              {/* First Table */}
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-400">
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">No</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Tanggal</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Judul</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">REG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">08-09-2025</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded border border-blue-300 transition-colors">
                        General
                      </button>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">08-09-2025</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded border border-blue-300 transition-colors">
                        General
                      </button>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  </tr>
                </tbody>
              </table>

              {/* Second Table */}
              <table className="w-full border-collapse mt-0">
                <thead>
                  <tr className="bg-gray-400">
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">No</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Tanggal</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Judul</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">View File</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">RM</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Tampil Liver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">1</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-left font-semibold">RESUME</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-left font-semibold">PENGKAJIAN KHUSUS</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-left font-semibold">LABORATORIUM</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Additional sections can be added here following the same pattern */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('resume')}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 flex items-center justify-between border border-blue-200 rounded-sm"
          >
            <span className="text-blue-700 font-medium">+ Resume Medis</span>
            <svg 
              className={`w-4 h-4 text-blue-700 transform transition-transform ${activeSection === 'resume' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeSection === 'resume' && (
            <div className="border border-gray-300 border-t-0 p-4">
              <div className="text-gray-600">
                <p className="mb-2"><strong>Tanggal:</strong> 08-09-2025</p>
                <p className="mb-2"><strong>Diagnosis:</strong> Fracture of neck of femur</p>
                <p className="mb-2"><strong>Tindakan:</strong> Operasi Patah Tulang Paha</p>
                <p className="mb-2"><strong>Dokter:</strong> Dr. Ahmad Santoso, Sp.B</p>
                <p className="text-sm text-gray-500">Resume lengkap tindakan medis dan perawatan pasien.</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('laboratorium')}
            className="w-full px-4 py-3 text-left bg-blue-50 hover:bg-blue-100 flex items-center justify-between border border-blue-200 rounded-sm"
          >
            <span className="text-blue-700 font-medium">+ Hasil Laboratorium</span>
            <svg 
              className={`w-4 h-4 text-blue-700 transform transition-transform ${activeSection === 'laboratorium' ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeSection === 'laboratorium' && (
            <div className="border border-gray-300 border-t-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-400">
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Pemeriksaan</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Hasil</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Nilai Normal</th>
                    <th className="border border-gray-300 px-4 py-2 text-center text-white font-medium">Satuan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Hemoglobin</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">12.5</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">12.0-15.0</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">g/dL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Leukosit</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">8.200</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">4.000-10.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">/μL</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Trombosit</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">350.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">150.000-450.000</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">/μL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-1"><strong>RSPAD GATOT SOEBROTO</strong></p>
          <p>Sistem Informasi Rekam Medis - Bukti Tindakan dan Pelayanan</p>
        </div>
      </div>
    </div>
  );
}