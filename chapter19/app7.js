const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === "/quick-api") {
    res.end('<h1>Quick Api</h1>');
  }

  if (req.url === "/another-api") {
    res.end('<h1>Another Api</h1>')
  }
});

server.listen(3000, () =>{
  console.log('Server is listening');
})