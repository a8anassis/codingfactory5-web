const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send("Hello World");
})

app.get('/about', (req, res)=>{
  console.log("About req");
  res.send("About web page")
})

app.get('/login', (req, res)=>{
  console.log("Login req");
  res.send("Login web page")
})

app.listen(port, ()=>{
  console.log("Server is listening");
})