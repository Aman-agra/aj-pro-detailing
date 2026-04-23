const https = require('https');

https.get('https://ajpromobiledetailing.com/', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // Extract standard src attributes
    const srcRegex = /src=["'](https:\/\/ajpromobiledetailing\.com\/wp-content\/uploads\/[^"'\s]+?\.(?:jpg|jpeg|png|webp))["']/g;
    
    // Extract background-image URLs from inline styles
    const bgRegex = /background-image:\s*url\(['"]?(https:\/\/ajpromobiledetailing\.com\/wp-content\/uploads\/[^"'\s\)]+?\.(?:jpg|jpeg|png|webp))['"]?\)/g;

    const urls = new Set();
    
    let match;
    while ((match = srcRegex.exec(data)) !== null) {
      urls.add(match[1]);
    }
    
    while ((match = bgRegex.exec(data)) !== null) {
      urls.add(match[1]);
    }

    console.log(JSON.stringify(Array.from(urls), null, 2));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
