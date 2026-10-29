const fs=require('fs');
fs.copyFileSync('node_modules/xlsx/dist/xlsx.full.min.js','www/xlsx.full.min.js');
fs.copyFileSync('node_modules/html5-qrcode/html5-qrcode.min.js','www/html5-qrcode.min.js');
console.log('libs copied');
