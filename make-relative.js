const fs = require('fs');
const path = require('path');

const files = [
  'index.html', 
  '404.html', 
  '_not-found/index.html',
  'privacy/index.html',
  'terms/index.html'
];
const search = '/Development-of-a-Responsive-Business-Website/';

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate how many levels deep this file is
    // e.g. "privacy/index.html" -> depth 1 -> needs "../"
    // e.g. "index.html" -> depth 0 -> needs ""
    const depth = file.split('/').length - 1;
    const replacement = depth > 0 ? '../'.repeat(depth) : '';
    
    content = content.split(search).join(replacement);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated paths in ${file} (depth: ${depth}, replacement: "${replacement}")`);
  }
});
