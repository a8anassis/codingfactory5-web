const express = require('express');
const app = express();
const port = 3000;

const dataSource = require('./connect').dataSource
const categoryRoute = require('./routes/category.route')
const postRoute = require('./routes/post.route')

app.use(express.json());

app.use('/api/categories', categoryRoute);
app.use('/api/posts', postRoute)

app.listen(port, () =>{
    console.log("Server is Up");
})