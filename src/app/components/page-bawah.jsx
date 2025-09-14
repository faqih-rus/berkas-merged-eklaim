import React, { useState } from 'react';

const MedicalCodingInterface = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (key) => {
    setSelectedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const diagnosisData = [
    { code: 'A18.0', description: 'Tuberculosis of bones and joints', hasSetPrimer: false },
    { code: 'E88.0', description: 'Disorders of plasma protein metabolism, not elsewhere classified', hasSetPrimer: true },
    { code: 'E87.1', description: 'Hypo-osmolality and hyponatraemia', hasSetPrimer: true },
    { code: 'J18.9', description: 'Pneumonia, unspecified', hasSetPrimer: true },
    { code: 'M01.15', description: 'Tuberculous arthritis, pelvic and thigh', hasSetPrimer: true },
  ];

  const procedureData = [
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

  const groupingData = [
    { group: 'PROSEDUR PAHA DAN SENDI PANGGUL (BERAT)', caseMix: 'M-1-20-III', amount: 57406100 },
    { group: 'Sub Acute', caseMix: '-', amount: 0 },
    { group: 'Chronic', caseMix: '-', amount: 0 },
    { group: 'Special Procedure', caseMix: '-', amount: 0 },
    { group: 'Special Prosthesis', caseMix: '-', amount: 0 },
    { group: 'Special Investigation', caseMix: '-', amount: 0 },
    { group: 'Special Drug', caseMix: '-', amount: 0 },
  ];

  return (
    <div className="medical-coding-interface">
      <div className="header-tabs">
        <div className="tab active">Coding UNU Grouper</div>
        <div className="tab">Coding INA Grouper</div>
      </div>

      <div className="content-container">
        {/* Diagnosis Section */}
        <div className="section">
          <div className="section-header">Diagnosa (ICD-10):</div>
          <div className="section-content">
            {diagnosisData.map((item, index) => (
              <div key={index} className="item-row">
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={selectedItems[`diagnosis-${index}`] || false}
                  onChange={() => handleCheckboxChange(`diagnosis-${index}`)}
                />
                <span className="item-description">{item.description}</span>
                <span className="item-code">[{item.code}]</span>
                {item.hasSetPrimer && (
                  <button className="set-primer-btn">Set Primer</button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Procedure Section */}
        <div className="section">
          <div className="section-header">Prosedur (ICD-9-CM):</div>
          <div className="section-content">
            {procedureData.map((item, index) => (
              <div key={index} className="item-row">
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={selectedItems[`procedure-${index}`] || false}
                  onChange={() => handleCheckboxChange(`procedure-${index}`)}
                />
                <span className="item-description">{item.description}</span>
                <span className="item-code">[{item.code}]</span>
                {item.hasSetPrimer && (
                  <button className="set-primer-btn">Set Primer</button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Data Section */}
        <div className="section">
          <div className="section-header centered">Data Klinis</div>
          <div className="section-content clinical-data">
            <div className="blood-pressure-label">Tekanan Darah (mmHg):</div>
            <div className="blood-pressure-inputs">
              <div className="bp-input-group">
                <span>Sistole :</span>
                <input type="text" defaultValue="105" />
              </div>
              <div className="bp-input-group">
                <span>Diastole :</span>
                <input type="text" defaultValue="67" />
              </div>
            </div>
          </div>
        </div>

        {/* Grouper Results v5 */}
        <div className="section">
          <div className="section-header centered">Hasil Grouper E-Klaim v5</div>
          <div className="section-content">
            <table className="grouper-table">
              <tbody>
                {groupingData.map((item, index) => (
                  <tr key={index}>
                    <td className="group-label">{index === 0 ? 'Group' : ''}</td>
                    <td className="group-name">{item.group}</td>
                    <td className="case-mix">{item.caseMix}</td>
                    <td className="currency">Rp.</td>
                    <td className="amount">{item.amount.toLocaleString('id-ID')}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="3"></td>
                  <td className="total-label">Total</td>
                  <td className="currency">Rp.</td>
                  <td className="total-amount">57,406,100</td>
                </tr>
              </tbody>
            </table>
            
            <div className="status-info">
              <div className="status-item">
                <span>Status Data Klaim</span>
                <span className="status-value">sent</span>
              </div>
              <div className="status-item">
                <span>Status Klaim</span>
                <span className="status-value">sent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grouper Results v6 */}
        <div className="section">
          <div className="section-header centered">Hasil Grouper E-Klaim v6</div>
          <div className="section-content v6-results">
            <div className="mdc-row">
              <span className="label">MDC</span>
              <span className="value">Diseases and Disorders of the Musculoskeletal System and Connective Tissue</span>
              <span className="code">18</span>
            </div>
            <div className="drg-row">
              <span className="label">DRG</span>
              <span className="value">Hip & Femur Proc. Except Replacement Proc. (Age Above 18) w/ Mild CC</span>
              <span className="code">1817111</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn">Cetak Klaim</button>
          <button className="btn">Kirim Klaim Online</button>
          <button className="btn edit-btn">Edit Ulang Klaim</button>
        </div>

        {/* User Info */}
        <div className="user-info">
          User: andreas | Group: Admin
        </div>
      </div>

      <style jsx>{`
        .medical-coding-interface {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #333;
          max-width: 900px;
          margin: 0 auto;
          background-color: #f9f9f9;
          border: 1px solid #ccc;
        }
        
        .header-tabs {
          display: flex;
          background-color: #e0e0e0;
          border-bottom: 1px solid #ccc;
        }
        
        .tab {
          padding: 8px 16px;
          background-color: #d0d0d0;
          border-right: 1px solid #ccc;
          cursor: pointer;
        }
        
        .tab.active {
          background-color: #f0f0f0;
          font-weight: bold;
        }
        
        .content-container {
          background-color: white;
        }
        
        .section {
          border-bottom: 1px solid #ccc;
        }
        
        .section-header {
          background-color: #f0f0f0;
          padding: 6px 12px;
          font-weight: bold;
          border-bottom: 1px solid #ccc;
        }
        
        .section-header.centered {
          text-align: center;
        }
        
        .section-content {
          padding: 12px;
        }
        
        .item-row {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .item-checkbox {
          margin-right: 8px;
        }
        
        .item-description {
          flex: 1;
        }
        
        .item-code {
          background-color: #f0f0f0;
          padding: 2px 6px;
          border: 1px solid #ccc;
          margin: 0 8px;
          font-family: monospace;
        }
        
        .set-primer-btn {
          background-color: #4a86e8;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 12px;
          cursor: pointer;
        }
        
        .clinical-data {
          text-align: center;
        }
        
        .blood-pressure-label {
          font-style: italic;
          color: green;
          margin-bottom: 10px;
        }
        
        .blood-pressure-inputs {
          display: flex;
          justify-content: center;
          gap: 30px;
        }
        
        .bp-input-group {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .bp-input-group input {
          width: 50px;
          text-align: center;
          border: 1px solid #ccc;
          padding: 2px;
        }
        
        .grouper-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
        }
        
        .grouper-table td {
          padding: 4px;
        }
        
        .group-label {
          text-align: right;
          padding-right: 10px;
          font-weight: bold;
          width: 50px;
        }
        
        .group-name {
          color: #333;
        }
        
        .case-mix {
          text-align: center;
          width: 80px;
        }
        
        .currency {
          text-align: right;
          width: 30px;
        }
        
        .amount {
          text-align: right;
          width: 100px;
        }
        
        .total-row {
          border-top: 2px solid #666;
        }
        
        .total-label {
          text-align: right;
          font-weight: bold;
        }
        
        .total-amount {
          text-align: right;
          font-weight: bold;
        }
        
        .status-info {
          margin-top: 15px;
        }
        
        .status-item {
          display: flex;
          gap: 10px;
          color: red;
          font-size: 13px;
        }
        
        .status-value {
          font-weight: bold;
        }
        
        .v6-results {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .mdc-row, .drg-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .mdc-row .label, .drg-row .label {
          font-weight: bold;
          width: 40px;
        }
        
        .mdc-row .value, .drg-row .value {
          flex: 1;
        }
        
        .mdc-row .code, .drg-row .code {
          font-weight: bold;
          width: 60px;
        }
        
        .action-buttons {
          display: flex;
          gap: 10px;
          padding: 12px;
          background-color: #f0f0f0;
        }
        
        .btn {
          background-color: #4a86e8;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 3px;
          cursor: pointer;
        }
        
        .edit-btn {
          margin-left: auto;
        }
        
        .user-info {
          padding: 6px 12px;
          background-color: #d0e0d0;
          border-top: 1px solid #ccc;
          font-size: 12px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default MedicalCodingInterface;