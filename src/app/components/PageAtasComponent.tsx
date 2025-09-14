"use client";
import { useState } from 'react';

function PageAtasComponent() {
  const [activeTab, setActiveTab] = useState('detail');

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header with logo and title */}
      <div className="bg-green-600 py-2 px-4 flex items-center">
        <div className="w-12 h-12 bg-white rounded-md mr-4 p-1">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-white text-2xl font-bold tracking-wider">SIM RS RSPAD GATOT SOEBROTO</h1>
        <div className="ml-4 flex-grow border-t border-red-500"></div>
      </div>

      {/* Main navigation */}
      <div className="bg-gray-700 text-white px-2 py-1 flex flex-wrap items-center text-sm">
        <div className="flex items-center mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 flex items-center justify-center text-xs rounded mr-1">🏠</span>
          <span>Home</span>
        </div>
        <div className="mr-3 py-1">Laporan</div>
        <div className="mr-3 py-1 font-bold">E-Klaim</div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">E</span>
          <span>EMR</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">E</span>
          <span>EMR RJ</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">E</span>
          <span>EMR RI</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">S</span>
          <span>Sistem</span>
        </div>
        <div className="mr-3 py-1">Bank Darah</div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">M</span>
          <span>Master</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">L</span>
          <span>Laboratorium</span>
        </div>
        <div className="mr-3 py-1">Master Laboratorium</div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">T</span>
          <span>Transaksi</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">R</span>
          <span>RadDiag</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">I</span>
          <span>Inquiry</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">O</span>
          <span>Operasi</span>
        </div>
        <div className="mr-3 py-1">Gizi</div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">M</span>
          <span>Med. Record</span>
        </div>
        <div className="mr-3 py-1">
          <span className="bg-blue-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">U</span>
          <span>Utility</span>
        </div>
        <div className="mr-3 py-1">BPJS</div>
        <div className="mr-3 py-1">List Order Online</div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-gray-700 text-white px-2 py-1 flex justify-between text-sm border-t border-gray-600">
        <div className="flex items-center">
          <div className="mr-4">SatuSehat</div>
          <div className="flex items-center">
            <span className="bg-orange-500 w-4 h-4 inline-block text-center text-xs rounded mr-1">L</span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Bridging HIS - E-Klaim */}
      <div className="px-3 py-2 bg-white border-b border-gray-300">
        <div className="flex items-center">
          <h2 className="font-bold text-green-800">Bridging HIS - E-Klaim</h2>
          <div className="ml-4 flex">
            <button className="bg-blue-500 text-white px-3 py-1 text-xs rounded-t mr-1">Y</button>
            <button className="bg-gray-200 text-black px-3 py-1 text-xs rounded-t">N</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-400 p-2">
        <div className="flex">
          <button 
            className={`px-4 py-1 text-sm mr-1 ${activeTab === 'daftar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('daftar')}
          >
            Daftar Pasien
          </button>
          <button 
            className={`px-4 py-1 text-sm mr-1 ${activeTab === 'detail' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('detail')}
          >
            Detail E-klaim
          </button>
          <button 
            className={`px-4 py-1 text-sm ${activeTab === 'kirim' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('kirim')}
          >
            Kirim Data
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-2 bg-gray-200">
        <div className="mb-2">
          <button className="bg-blue-100 border border-blue-300 px-3 py-1 text-sm">Kembali</button>
          <div className="float-right">
            <button className="bg-blue-100 border border-blue-300 px-3 py-1 text-sm mr-1">Berkas</button>
            <button className="bg-blue-100 border border-blue-300 px-3 py-1 text-sm mr-1">Hapus Klaim</button>
            <button className="bg-blue-100 border border-blue-300 px-3 py-1 text-sm">Klaim Baru</button>
          </div>
        </div>
        
        <div className="bg-white border border-gray-300 rounded mb-2">
          <div className="grid grid-cols-2 gap-0">
            <div className="p-2 border-b border-r border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">No. Peserta :</span>
              </div>
              <div className="flex-1">
                <input type="text" defaultValue="0001797705415" className="border border-gray-300 px-2 py-1 text-sm w-40" />
                <button className="ml-2 bg-blue-100 border border-blue-300 px-2 py-1 text-xs">Cek Kepesertaan</button>
              </div>
            </div>
            <div className="p-2 border-b border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">No. SEP :</span>
              </div>
              <input type="text" defaultValue="0901R0030225V000003" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
            <div className="p-2 border-b border-r border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Nama Pasien :</span>
              </div>
              <input type="text" defaultValue="SITI FATONAH" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
            <div className="p-2 border-b border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Tanggal Lahir :</span>
              </div>
              <input type="text" defaultValue="1964-03-31" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
            <div className="p-2 border-b border-r border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Jaminan/Cara Bayar :</span>
              </div>
              <select className="border border-gray-300 px-2 py-1 text-sm w-52">
                <option>J K N</option>
              </select>
            </div>
            <div className="p-2 border-b border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Nomor Medrec :</span>
              </div>
              <input type="text" defaultValue="01209793" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
            <div className="p-2 border-b border-r border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Jenis Kelamin :</span>
              </div>
              <input type="text" defaultValue="Laki-Laki" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
            <div className="p-2 border-b border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">COB :</span>
              </div>
              <select className="border border-gray-300 px-2 py-1 text-sm w-52">
                <option>-</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded mb-2">
          <div className="grid grid-cols-2 gap-0">
            <div className="p-2 border-b border-r border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Jenis Rawat :</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Inap</span>
                <div className="flex items-center mr-2">
                  <input type="checkbox" id="naik-kelas" className="mr-1" />
                  <label htmlFor="naik-kelas" className="text-sm">Naik Kelas</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="ada-intensif" className="mr-1" />
                  <label htmlFor="ada-intensif" className="text-sm">Ada Rawat Intensif</label>
                </div>
              </div>
            </div>
            <div className="p-2 border-b border-gray-300 flex">
              <div className="text-right w-32 pr-2">
                <span className="text-sm text-green-800">Kelas Hak / Kelas Perawatan :</span>
              </div>
              <input type="text" defaultValue="Kelas 3 / Kelas 3" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded">
          <div className="p-2 border-b border-gray-300 flex justify-end">
            <div className="flex items-center">
              <span className="text-sm text-green-800 mr-2">Tarif Rumah Sakit :</span>
              <input type="text" defaultValue="93,771,951" className="border border-gray-300 px-2 py-1 text-sm w-32 text-right" />
              <button className="ml-2 bg-blue-100 border border-blue-300 px-2 py-1 text-xs">Edit Tarif</button>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span className="text-sm text-gray-600 italic">Menyatakan benar bahwa data tarif yang tersebut di atas adalah benar sesuai dengan kondisi yang sesungguhnya.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAtasComponent;