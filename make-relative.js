const fs = require('fs');
const path = require('path');

const files = [
  'index.html', 
  '404.html', 
  '_not-found/index.html',
  'privacy/index.html',
  'terms/index.html',
  'login/index.html'
];
const search = '/Development-of-a-Responsive-Business-Website/';

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate how many levels deep this file is
    const depth = file.split('/').length - 1;
    const replacement = depth > 0 ? '../'.repeat(depth) : '';
    
    // 1. Make images relative
    content = content.split('/Development-of-a-Responsive-Business-Website/images/').join(replacement + 'images/');
    
    // 2. Make favicon relative
    content = content.split('/Development-of-a-Responsive-Business-Website/favicon.ico').join(replacement + 'favicon.ico');
    
    // 3. Make CSS files relative (matches _next/static/...css)
    const cssRegex = /\/Development-of-a-Responsive-Business-Website\/(_next\/static\/[^\s"']+\.css)/g;
    content = content.replace(cssRegex, (match, p1) => {
      return replacement + p1;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated paths selectively in ${file} (depth: ${depth}, replacement: "${replacement}")`);
  }
});
