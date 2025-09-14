"use client";

import { Suspense } from 'react';
import RecordsPageClient from './RecordsPageClient';
import PageAtasComponent from './components/PageAtasComponent';
import PageBawah from './components/page-bawah';

// Loading component for Suspense fallback
function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Memuat halaman...</p>
      </div>
    </div>
  );
}

// Main page component with three sections
export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section Atas */}
      <div className="w-full">
        <PageAtasComponent />
      </div>

      {/* Section Tengah - Records Page Client */}
      <div className="w-full border-t border-gray-300">
        <Suspense fallback={<Loading />}>
          <RecordsPageClient />
        </Suspense>
      </div>

      {/* Section Bawah */}
      <div className="w-full border-t border-gray-300">
        <PageBawah />
      </div>
    </div>
  );
}