const http = require('http');
const fs = require('fs');
const os = require('os');

const osType = os.type();

const htmlContent = `<!DOCTYPE html><html><html><h3>Hello, World! Your OS type is ${osType}</h3></html>`;

const server = http.createServer((req, res) => {
  console.log("step 1");
  fs.writeFile('./index.html', htmlContent, (err1) => {
    if (err1) {
      console.log("Problem in writing file")
    } else {
      console.log("step 2");
      fs.readFile('index.html', (err2, content) => {
        if (err2){
          console.log("Problem in reading file")
        } else {
          res.setHeader('Content-Type', 'text/html');
          res.end(content);
        }
      });
    }
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
})
