const fs = require('fs');
const http = require('http');
const os = require('os');

const osType = os.type();

const htmlContent = `<!DOCTYPE html><html><html><h3>Hello, World 2! Your OS type is ${osType}</h3></html>`;

const server = http.createServer((req, res) => {
  fs.writeFileSync('./index1.html', htmlContent);
  let readFile = fs.readFileSync('index1.html', 'utf8');
  if (readFile) {
    res.setHeader('Content-Type', 'text/html');
    res.end(readFile);
  }
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
})
