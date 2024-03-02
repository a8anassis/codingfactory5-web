const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  let q = req.query;
  console.log(q);

  let name = q.name;
  let surname = q.surname;
  let age = q.age;

  res.send('Name: ' + name + ' Surname: ' + surname + ' Age: ' + age);
})

app.get('/product/:product/:cost', (req, res) => {
  let q = req.params;
  console.log(q)

  let name = q.product;
  let cost = q.cost; 

  res.send('Name: ' + name + ' Cost: ' + cost);
})


app.listen(port, ()=>{
  console.log("Server is listening")
})