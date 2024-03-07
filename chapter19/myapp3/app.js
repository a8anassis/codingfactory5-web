const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', express.static('files'))

const logger = (req, res, next) => {
    let url = req.url;
    let time = new Date();
    console.log('Received request for' + url + ' at ' + time);
    next();
}

app.get('/user', logger, (req, res)=>{
  console.log("Get User");
  res.send("Get User");
})

app.post('/user', (req, res) => {
  
  console.log("Post Request");
  console.log(req.body) 

  let name = req.body.name;
  let surname = req.body.surname;
  res.status(200).send('Name: ' + name + ' Surname: ' + surname);
})

app.post('/userForm', (req, res) => {

  console.log(req.body);

  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;

  res.status(200).send('Name: ' + firstname + ', Surname: ' + lastname + ', Email: ' + email);
})

app.listen(port, ()=> {
  console.log("Server is listening on port: ", port)
})