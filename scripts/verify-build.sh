#!/bin/bash
# Netlify Build Script
# This script ensures PDFs are properly copied during build

echo "🔍 Starting build verification..."

# Create out directory if it doesn't exist
mkdir -p out

# Copy all PDF files from public to out directory
echo "📁 Copying PDF files from public to out directory..."
if [ -d "public" ]; then
    # Copy all PDF files
    find public -name "*.pdf" -exec cp {} out/ \;
    echo "✅ PDF files copied to out directory"
    
    # List copied files
    echo "📋 PDF files in out directory:"
    ls -la out/*.pdf 2>/dev/null || echo "❌ No PDF files found in out directory"
else
    echo "❌ Public directory not found!"
fi

# Verify PDF files exist in public
echo "🔍 Checking PDF files in public directory..."
if [ -d "public" ]; then
    echo "📁 PDF files found in public directory:"
    find public -name "*.pdf" -type f -exec basename {} \;
else
    echo "❌ Public directory not found!"
fi

# Check if specific required PDFs exist
required_pdfs=(
    "Lab PK-1.pdf"
    "Lab PK-2.pdf" 
    "LAB PA-1.pdf"
    "Rad-1.pdf"
    "Rad-2.pdf"
    "Surat Permintaan Konsultasi - Resume - 1.pdf"
    "Surat Permintaan Konsultasi - Resume - 2.pdf"
    "Lap Pembedahan - 1.pdf"
    "Bukti Tindakan Layanan - 1.pdf"
    "Bukti Tindakan Layanan - 2.pdf"
    "S E P - 1.pdf"
    "Billing - 1.pdf"
    "Lain lain - 1.pdf"
    "test.pdf"
)

echo "🔍 Checking required PDF files..."
missing_files=0
for pdf in "${required_pdfs[@]}"; do
    if [ -f "out/$pdf" ]; then
        echo "✅ Found: $pdf"
    else
        echo "❌ Missing: $pdf"
        missing_files=$((missing_files + 1))
    fi
done

if [ $missing_files -eq 0 ]; then
    echo "🎉 All required PDF files are present!"
else
    echo "⚠️  $missing_files PDF files are missing"
fi

echo "✅ Build verification complete"