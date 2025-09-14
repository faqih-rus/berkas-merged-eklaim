"use client";

import { useEffect, useState } from 'react';

interface PdfDebugProps {
  pdfUrl: string;
  tabId: string;
}

export default function PdfDebugInfo({ pdfUrl, tabId }: PdfDebugProps) {
  const [debugInfo, setDebugInfo] = useState<{
    exists: boolean | null;
    error: string | null;
    status: number | null;
  }>({
    exists: null,
    error: null,
    status: null
  });

  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        setDebugInfo({
          exists: response.ok,
          error: response.ok ? null : `HTTP ${response.status}`,
          status: response.status
        });
      } catch (error) {
        setDebugInfo({
          exists: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          status: null
        });
      }
    };

    if (pdfUrl && process.env.NODE_ENV === 'development') {
      checkPdfExists();
    }
  }, [pdfUrl]);

  // Only show debug info in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-3 m-4 rounded text-sm">
      <h4 className="font-semibold text-yellow-800 mb-2">Debug Info (Dev Only)</h4>
      <p><strong>Tab:</strong> {tabId}</p>
      <p><strong>PDF URL:</strong> {pdfUrl}</p>
      <p><strong>Exists:</strong> {debugInfo.exists === null ? 'Checking...' : debugInfo.exists ? '✅ Yes' : '❌ No'}</p>
      {debugInfo.error && <p><strong>Error:</strong> {debugInfo.error}</p>}
      {debugInfo.status && <p><strong>Status:</strong> {debugInfo.status}</p>}
    </div>
  );
}