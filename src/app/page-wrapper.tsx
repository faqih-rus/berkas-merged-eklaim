"use client";

import { Suspense } from 'react';
import RecordsPageClient from './RecordsPageClient';

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

export default function RecordsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <RecordsPageClient />
    </Suspense>
  );
}