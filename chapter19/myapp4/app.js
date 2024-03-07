const express = require('express');
const app = express();
const port = 3001;

const http = require('http');

let url = "http://localhost:3000/users";

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/create', (req, res) => {
  res.render('form', {});
})

app.get('/users', (req, res) => {
  http.get(url, (result) => {
    let body = "";
    
    result.on("data", (chunk)=>{
      body+=chunk;
    });

    result.on("end", ()=>{
      try {
        let json = JSON.parse(body);
        res.render('users', {users: json})
      } catch(error) {
        console.log(error)
      }
    })
  })
})

app.post('/user', (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;

  res.render('user', {
    name: firstname,
    surname: lastname,
    email: email
  })
})

app.listen(port, ()=>{
  console.log("Server is up");
})