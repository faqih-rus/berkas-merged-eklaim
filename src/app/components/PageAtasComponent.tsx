"use client";
import { useState } from 'react';

function PageAtasComponent() {
  const [activeTab, setActiveTab] = useState('detail');

  return (
    <div className="flex flex-col">
      {/* Header with logo and title */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 py-2 px-4 flex items-center">
        <div className="w-12 h-12 mr-4">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-white text-2xl font-bold tracking-wider drop-shadow-md">SIM RS RSPAD GATOT SOEBROTO</h1>
        <div className="ml-4 flex-grow border-t-2 border-red-500"></div>
      </div>

      {/* Main navigation */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white px-2 py-2 flex flex-wrap items-center text-sm">
        <NavButton icon="" text="Home" primary />
        <NavButton text="Laporan" />
        <NavButton text="E-Klaim" active />
        <NavButton icon="E" text="EMR" primary />
        <NavButton icon="E" text="EMR RJ" primary />
        <NavButton icon="E" text="EMR RI" primary />
        <NavButton icon="S" text="Sistem" primary />
        <NavButton text="Bank Darah" />
        <NavButton icon="M" text="Master" primary />
        <NavButton icon="L" text="Laboratorium" primary />
        <NavButton text="Master Laboratorium" />
        <NavButton icon="T" text="Transaksi" primary />
        <NavButton icon="R" text="RadDiag" primary />
        <NavButton icon="I" text="Inquiry" primary />
        <NavButton icon="O" text="Operasi" primary />
        <NavButton text="Gizi" />
        <NavButton icon="M" text="Med. Record" primary />
        <NavButton icon="U" text="Utility" primary />
        <NavButton text="BPJS" />
        <NavButton text="List Order Online" />
      </div>

      {/* Secondary navigation */}
      <div className="bg-gradient-to-b from-gray-700 to-gray-600 text-white px-2 py-1 flex justify-between text-sm border-t border-gray-600">
        <div className="flex items-center">
          <div className="mr-4 hover:text-yellow-200 cursor-pointer">SatuSehat</div>
          <div className="flex items-center hover:text-yellow-200 cursor-pointer">
            <span className="bg-gradient-to-b from-orange-400 to-orange-600 w-4 h-4 inline-block text-center text-xs rounded mr-1 shadow-md border border-orange-300">L</span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Bridging HIS - E-Klaim */}
      <div className="px-3 py-2 bg-gradient-to-b from-gray-200 to-gray-100 border-b border-gray-300">
        <div className="flex items-center">
          <h2 className="font-bold text-green-800">Bridging HIS - E-Klaim</h2>
          <div className="ml-4 flex">
            <button className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-3 py-1 text-xs rounded-t mr-1 border border-blue-300 shadow-md">Y</button>
            <button className="bg-gradient-to-b from-gray-100 to-gray-300 text-black px-3 py-1 text-xs rounded-t border border-gray-400 shadow-md">N</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gradient-to-b from-gray-400 to-gray-500 p-2">
        <div className="flex">
          <TabButton 
            text="Daftar Pasien" 
            isActive={activeTab === 'daftar'} 
            onClick={() => setActiveTab('daftar')}
          />
          <TabButton 
            text="Detail E-klaim" 
            isActive={activeTab === 'detail'} 
            onClick={() => setActiveTab('detail')}
          />
          <TabButton 
            text="Kirim Data" 
            isActive={activeTab === 'kirim'} 
            onClick={() => setActiveTab('kirim')}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="p-2 bg-gradient-to-b from-gray-200 to-gray-300">
        <div className="mb-2">
          <ActionButton text="Kembali" />
          <div className="float-right">
            <ActionButton text="Berkas" className="mr-1" />
            <ActionButton text="Hapus Klaim" className="mr-1" />
            <ActionButton text="Klaim Baru" />
          </div>
        </div>
        
        <div className="bg-white border border-gray-300 rounded mb-2 shadow-md">
          <div className="grid grid-cols-2 gap-0">
            <FormField 
              label="No. Peserta :" 
              right border
            >
              <input type="text" defaultValue="0001797705415" className="border border-gray-300 px-2 py-1 text-sm w-40" />
              <ActionButton text="Cek Kepesertaan" small className="ml-2" />
            </FormField>
            <FormField 
              label="No. SEP :" 
              right
            >
              <input type="text" defaultValue="0901R0030225V000003" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
            <FormField 
              label="Nama Pasien :" 
              right border
            >
              <input type="text" defaultValue="SITI FATONAH" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
            <FormField 
              label="Tanggal Lahir :" 
              right
            >
              <input type="text" defaultValue="1964-03-31" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
            <FormField 
              label="Jaminan/Cara Bayar :" 
              right border
            >
              <select className="border border-gray-300 px-2 py-1 text-sm w-52">
                <option>J K N</option>
              </select>
            </FormField>
            <FormField 
              label="Nomor Medrec :" 
              right
            >
              <input type="text" defaultValue="01209793" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
            <FormField 
              label="Jenis Kelamin :" 
              right border
            >
              <input type="text" defaultValue="Laki-Laki" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
            <FormField 
              label="COB :" 
              right
            >
              <select className="border border-gray-300 px-2 py-1 text-sm w-52">
                <option>-</option>
              </select>
            </FormField>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded mb-2 shadow-md">
          <div className="grid grid-cols-2 gap-0">
            <FormField 
              label="Jenis Rawat :" 
              right border
            >
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
            </FormField>
            <FormField 
              label="Kelas Hak / Kelas Perawatan :" 
              right
            >
              <input type="text" defaultValue="Kelas 3 / Kelas 3" className="border border-gray-300 px-2 py-1 text-sm w-52" />
            </FormField>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded shadow-md">
          <div className="p-2 border-b border-gray-300 flex justify-end">
            <div className="flex items-center">
              <span className="text-sm text-green-800 mr-2">Tarif Rumah Sakit :</span>
              <input type="text" defaultValue="93,771,951" className="border border-gray-300 px-2 py-1 text-sm w-32 text-right" />
              <ActionButton text="Edit Tarif" small className="ml-2" />
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

// Custom components for 3D and gradient effects
interface NavButtonProps {
  icon?: string;
  text: string;
  primary?: boolean;
  active?: boolean;
}

function NavButton({ icon, text, primary, active }: NavButtonProps) {
  return (
    <div className={`mr-3 py-1 flex items-center cursor-pointer ${active ? 'font-bold' : ''} hover:text-yellow-200`}>
      {icon && (
        <span className={`
          ${primary ? 'bg-gradient-to-b from-blue-400 to-blue-600' : ''} 
          w-4 h-4 flex items-center justify-center text-xs rounded mr-1
          ${primary ? 'border border-blue-300 shadow-md' : ''}
        `}>
          {icon}
        </span>
      )}
      <span>{text}</span>
    </div>
  );
}

interface TabButtonProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ text, isActive, onClick }: TabButtonProps) {
  return (
    <button 
      className={`px-4 py-1 text-sm mr-1 rounded-t shadow-md border ${
        isActive 
          ? 'bg-gradient-to-b from-blue-400 to-blue-600 text-white border-blue-700' 
          : 'bg-gradient-to-b from-gray-100 to-gray-300 border-gray-400'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

interface ActionButtonProps {
  text: string;
  small?: boolean;
  className?: string;
}

function ActionButton({ text, small, className = '' }: ActionButtonProps) {
  return (
    <button className={`
      bg-gradient-to-b from-blue-100 to-blue-200 
      border border-blue-300 
      ${small ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'} 
      rounded 
      shadow-md 
      hover:from-blue-200 
      hover:to-blue-300
      active:shadow-inner
      ${className}
    `}>
      {text}
    </button>
  );
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  right?: boolean;
  border?: boolean;
}

function FormField({ label, children, right, border }: FormFieldProps) {
  return (
    <div className={`p-2 border-b ${border ? 'border-r' : ''} border-gray-300 flex`}>
      <div className={`${right ? 'text-right' : ''} w-32 pr-2`}>
        <span className="text-sm text-green-800">{label}</span>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default PageAtasComponent;