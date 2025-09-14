const fs = require('fs');
const path = require('path');

console.log('🔍 Starting PDF copy process...');

// Ensure out directory exists
const outDir = path.join(process.cwd(), 'out');
const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    console.log('📁 Created out directory');
}

// List of required PDF files
const requiredPdfs = [
    'Lab PK-1.pdf',
    'Lab PK-2.pdf', 
    'LAB PA-1.pdf',
    'Rad-1.pdf',
    'Rad-2.pdf',
    'Surat Permintaan Konsultasi - Resume - 1.pdf',
    'Surat Permintaan Konsultasi - Resume - 2.pdf',
    'Lap Pembedahan - 1.pdf',
    'Bukti Tindakan Layanan - 1.pdf',
    'Bukti Tindakan Layanan - 2.pdf',
    'S E P - 1.pdf',
    'Billing - 1.pdf',
    'Lain lain - 1.pdf',
    'test.pdf'
];

let copiedFiles = 0;
let missingFiles = 0;

console.log('📋 Copying PDF files...');

requiredPdfs.forEach(pdfFile => {
    const sourcePath = path.join(publicDir, pdfFile);
    const destPath = path.join(outDir, pdfFile);
    
    if (fs.existsSync(sourcePath)) {
        try {
            fs.copyFileSync(sourcePath, destPath);
            console.log(`✅ Copied: ${pdfFile}`);
            copiedFiles++;
        } catch (error) {
            console.log(`❌ Failed to copy ${pdfFile}:`, error.message);
            missingFiles++;
        }
    } else {
        console.log(`❌ Source file not found: ${pdfFile}`);
        missingFiles++;
    }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Successfully copied: ${copiedFiles} files`);
console.log(`❌ Missing or failed: ${missingFiles} files`);

if (missingFiles === 0) {
    console.log('🎉 All PDF files copied successfully!');
} else {
    console.log('⚠️  Some PDF files are missing from public directory');
}

// List all PDF files actually in out directory
console.log('\n📁 PDF files in out directory:');
try {
    const outFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.pdf'));
    if (outFiles.length > 0) {
        outFiles.forEach(file => console.log(`  - ${file}`));
    } else {
        console.log('  No PDF files found in out directory');
    }
} catch (error) {
    console.log('❌ Could not read out directory');
}

console.log('✅ PDF copy process complete');