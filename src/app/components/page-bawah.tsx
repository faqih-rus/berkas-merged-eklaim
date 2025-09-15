"use client";

import { useState } from 'react';

interface SelectedItems {
  [key: string]: boolean;
}

interface DiagnosisItem {
  code: string;
  description: string;
  hasSetPrimer: boolean;
}

interface ProcedureItem {
  code: string;
  description: string;
  hasSetPrimer: boolean;
}

interface GroupingItem {
  group: string;
  caseMix: string;
  amount: number;
}

const MedicalCodingInterface = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});
  const [activeTab, setActiveTab] = useState('unu');

  const handleCheckboxChange = (key: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const diagnosisData: DiagnosisItem[] = [
    { code: 'A18.0', description: 'Tuberculosis of bones and joints', hasSetPrimer: false },
    { code: 'E88.0', description: 'Disorders of plasma-protein metabolism, not elsewhere classified', hasSetPrimer: true },
    { code: 'E87.1', description: 'Hypo-osmolality and hyponatraemia', hasSetPrimer: true },
    { code: 'J18.9', description: 'Pneumonia, unspecified', hasSetPrimer: true },
    { code: 'M01.15', description: 'Tuberculous arthritis, pelvic and thigh', hasSetPrimer: true },
  ];

  const procedureData: ProcedureItem[] = [
    { code: '99.18', description: 'Injection or infusion of electrolytes', hasSetPrimer: false },
    { code: '89.52', description: 'Electrocardiogram', hasSetPrimer: true },
    { code: '88.72', description: 'Diagnostic ultrasound of heart', hasSetPrimer: true },
    { code: '93.57', description: 'Application of other wound dressing', hasSetPrimer: true },
    { code: '87.49', description: 'Other chest x-ray', hasSetPrimer: true },
    { code: '88.26', description: 'Other skeletal x-ray of pelvis and hip', hasSetPrimer: true },
    { code: '87.41', description: 'Computerized axial tomography of thorax', hasSetPrimer: true },
    { code: '90.59', description: 'Microscopic examination of blood, Other microscopic examination', hasSetPrimer: true },
    { code: '79.35', description: 'Open reduction of fracture with internal fixation, femur', hasSetPrimer: true },
    { code: '77.45', description: 'Biopsy of femur', hasSetPrimer: true },
    { code: '78.05', description: 'Bone graft of femur', hasSetPrimer: true },
  ];

  const groupingData: GroupingItem[] = [
    { group: 'PROSEDUR PADA DAN SENDI PANGGUL (BERAT)', caseMix: 'M-1-20-III', amount: 57406100 },
    { group: 'Sub Acute', caseMix: '-', amount: 0 },
    { group: 'Chronic', caseMix: '-', amount: 0 },
    { group: 'Special Procedure', caseMix: '-', amount: 0 },
    { group: 'Special Prosthesis', caseMix: '-', amount: 0 },
    { group: 'Special Investigation', caseMix: '-', amount: 0 },
    { group: 'Special Drug', caseMix: '-', amount: 0 },
  ];

  return (
    <div className="flex flex-col bg-gray-100 font-sans text-sm">


      {/* Medical Coding Tabs */}
      <div className="bg-white border border-gray-300 mt-3 mx-3">
        <div className="flex">
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'unu' ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-700'} border-r border-gray-300`}
            onClick={() => setActiveTab('unu')}
          >
            Coding UNU Grouper
          </button>
          <button 
            className={`px-4 py-2 font-medium ${activeTab === 'ina' ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setActiveTab('ina')}
          >
            Coding INA Grouper
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white border border-gray-300 mx-3 mb-3">
        {/* Diagnosis Section */}
        <div className="border-b border-gray-300">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 border-b border-gray-300">
            Diagnosis (ICD-10):
          </div>
          <div className="p-4">
            {diagnosisData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4"
                  checked={selectedItems[`diagnosis-${index}`] || false}
                  onChange={() => handleCheckboxChange(`diagnosis-${index}`)}
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-gray-700">{item.description}</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 text-xs border border-gray-300">
                      {item.code}
                    </span>
                    {item.hasSetPrimer && (
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded">
                        Set Primer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Section */}
        <div className="border-b border-gray-300">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 border-b border-gray-300">
            Prosedur (ICD-9-CM):
          </div>
          <div className="p-4">
            {procedureData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="checkbox"
                  className="mr-3 w-4 h-4"
                  checked={selectedItems[`procedure-${index}`] || false}
                  onChange={() => handleCheckboxChange(`procedure-${index}`)}
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-gray-700">{item.description}</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-1 text-xs border border-gray-300">
                      {item.code}
                    </span>
                    {item.hasSetPrimer && (
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs rounded">
                        Set Primer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Klinis Section */}
        <div className="border-b border-gray-300">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 text-center">
            Data Klinis
          </div>
          <div className="p-4">
            <div className="text-center mb-4">
              <span className="italic text-green-600">Tekanan Darah (mmHg):</span>
            </div>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Sistole :</span>
                <input 
                  type="text" 
                  defaultValue="105"
                  className="border border-gray-300 px-2 py-1 w-16 text-center"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Diastole :</span>
                <input 
                  type="text" 
                  defaultValue="67"
                  className="border border-gray-300 px-2 py-1 w-16 text-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hasil Grouper Section */}
        <div className="border-b border-gray-300">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 text-center">
            Hasil Grouper E-Klaim v5
          </div>
          <div className="p-4">
            <table className="w-full text-xs">
              <tbody>
                {groupingData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 font-medium text-right pr-4 w-32">
                      {index === 0 ? 'Group' : ''}
                    </td>
                    <td className="py-2 text-gray-700">{item.group}</td>
                    <td className="py-2 text-center w-24">{item.caseMix}</td>
                    <td className="py-2 text-right w-20">Rp.</td>
                    <td className="py-2 text-right w-32">
                      {item.amount.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-400">
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2"></td>
                  <td className="py-2 text-right font-medium">Total</td>
                  <td className="py-2 text-right font-medium">Rp. 57,406,100</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-red-500 text-xs">
                <span className="font-medium">Status Data Klaim</span>
                <span>sent</span>
              </div>
              <div className="flex items-center gap-2 text-red-500 text-xs mt-1">
                <span className="font-medium">Status Klaim</span>
                <span>sent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hasil Grouper v6 Section */}
        <div className="border-b border-gray-300">
          <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 text-center">
            Hasil Grouper E-Klaim v6
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-4">
                <span className="font-medium">MDC</span>
                <span className="text-gray-700">Diseases and Disorders of the Musculoskeletal System and Connective Tissue</span>
              </div>
              <span className="font-medium">18</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="font-medium">DRG</span>
                <span className="text-gray-700">Hip & Femur Proc. Except Replacement Proc. (Age Above 18) w/ Mild CC</span>
              </div>
              <span className="font-medium">I817111</span>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="bg-gray-100 px-4 py-3 flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded">
            Cetak Klaim
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded">
            Kirim Klaim Online
          </button>
          <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded">
              Edit Ulang Klaim
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="bg-green-100 px-4 py-2 text-xs text-gray-600 border-t border-gray-300">
          User: andreas | Group: Admin
        </div>
      </div>
    </div>
  );
};

export default MedicalCodingInterface;