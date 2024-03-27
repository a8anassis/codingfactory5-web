const typeorm = require('typeorm');

const CategoryEntity = require('./model/Category').CategoryEntity;
const PostEntity = require('./model/Post').PostEntity

// console.log(process.env.HOST, process.env.DBUSER, process.env.PASSWORD, process.env.DATABASE)

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306,
    username: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [CategoryEntity, PostEntity]
});

dataSource
    .initialize()
    .then( function() {
        console.log("Connected to database")
    })
    .catch( function(error) {
        console.log("Problem in connecting to database", error)
    })

module.exports = { dataSource }