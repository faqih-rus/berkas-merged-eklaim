# Netlify Build Script
# This script helps ensure PDFs are properly copied during build

echo "🔍 Checking PDF files in public directory..."

# List all PDF files in public directory
if [ -d "public" ]; then
    echo "📁 PDF files found in public directory:"
    find public -name "*.pdf" -type f
else
    echo "❌ Public directory not found!"
fi

# Check if PDF files exist in out directory after build
echo "🔍 Checking PDF files in out directory..."
if [ -d "out" ]; then
    echo "📁 PDF files found in out directory:"
    find out -name "*.pdf" -type f
else
    echo "❌ Out directory not found! Build may have failed."
fi

echo "✅ Build verification complete"