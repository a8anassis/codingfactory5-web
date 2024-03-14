// Διαγράψτε όλα τα documents από τις συλλογή users
db.getCollection('users').deleteMany({});

// Διαγράψτε όλα τα documents από τις συλλογή product
db.getCollection('products').deleteMany({});

// Εισάγεται τα documents του αρχείου users.json στη συλλογή users
db.getCollection('users').insertMany([
  { 
    "username": "admin", 
    "password": "12345", 
    "name": "Bob", 
    "surname": "Dylan", 
    "email": "admin1@aueb.gr", 
    "address": {
      "area": "area1", 
      "road": "road1"
    }, 
    "phone": [
      { "type": "home",
        "number": "2101111111"
      },
      {
        "type":"mobile",
        "number": "6931111111"    
      }
    ],
    "products":[
      {
        "product": "product 1",
        "quantity": 2,
        "cost":10,
        "date" : ISODate("2022-12-01T00:00:00.000Z"),
      },
      {
        "product": "product 1",
        "quantity": 3,
        "cost":10,
        "date":"5/12/2022"
      }
    ] 
  },
  { 
    "username": "user1", 
    "password": "12345", 
    "name": "Elvis", 
    "surname": "Presley", 
    "email": "user1@aueb.gr", 
    "address": { 
      "area": "area2", 
      "road": "road2"
    }, 
    "phone":[
      { "type": "home",
        "number": "2102222222"
      },
      {
        "type":"mobile",
        "number": "6932222222"    
      }
    ],
    "products":[
      {
        "product": "product 1",
        "quantity": 2,
        "cost":10,
        "date":"1/12/2022"
      },
      {
        "product": "product 2",
        "quantity": 3,
        "cost":20,
        "date":"5/12/2022"
      },
      {
        "product": "product 4",
        "quantity": 10,
        "cost":40,
        "date":"10/12/2022"
      }
    ] 
  },
  { 
    "username": "user2", 
    "password": "12345", 
    "name": "Johnny", 
    "surname": "Rivers", 
    "email": "user2@aueb.gr", 
    "address":{ 
      "area": "area1", "road": "road3"
    }, 
    "phone":[
      { "type": "home",
      "number": "2103333333"
      },
      {
        "type":"mobile",
        "number": "6933333333"    
      }
    ],
    "products":[
      {
        "product": "product 2",
        "quantity": 10,
        "cost":20,
        "date":"10/12/2022"
      },
      {
        "product": "product 2",
        "quantity": 3,
        "cost":20,
        "date":"15/12/2022"
      },
      {
        "product": "product 5",
        "quantity": 20,
        "cost":50,
        "date":"10/12/2022"
      }
    ]  
  },
  { 
    "username": "user3", 
    "password": "12345", 
    "name": "Frank", 
    "surname": "Zappa", 
    "email":"user3@aueb.gr", 
    "address": { 
      "area": "area3", 
      "road":"road4"
    }, 
    "phone":[
      { "type": "home",
      "number": "2104444444"
      },
      {
        "type":"mobile",
        "number": "6934444444"    
      }
    ],
    "products":[
      {
        "product": "product 1",
        "quantity": 10,
        "cost":10,
        "date":"12/12/2022"
      },
      {
        "product": "product 3",
        "quantity": 3,
        "cost":30,
        "date":"12/12/2022"
      },
      {
        "product": "product 4",
        "quantity": 4,
        "cost":40,
        "date":"12/12/2022"
      }
    ]  
  },
  { 
    "username": "user4", 
    "password": "12345", 
    "name": "David", 
    "surname": "Bowie", 
    "email":"user4@aueb.gr", 
    "address":{ 
      "area":"area2", 
      "road":"road1"
    }, 
    "phone":[
      { "type": "home",
      "number": "2105555555"
      },
      {
        "type":"mobile",
        "number": "6935555555"    
      }
    ],
    "products":[
      {
        "product": "product 3",
        "quantity": 10,
        "cost":30,
        "date":"20/12/2022"
      },
      {
        "product": "product 4",
        "quantity": 3,
        "cost":40,
        "date":"21/12/2022"
      }
    ]   
  },
  { 
    "username": "user5", 
    "password": "12345", 
    "name": "Paul", 
    "surname": "McCartney", 
    "email":"user5@aueb.gr", 
    "address": { 
      "area": "area1", "road": "road1"
    }, 
    "phone":[
      { "type": "home",
      "number": "2106666666"
      },
      {
        "type":"mobile",
        "number": "6936666666"    
      }
    ],
    "products":[
      {
        "product": "product 3",
        "quantity": 10,
        "cost":30,
        "date":"20/12/2022"
      },
      {
        "product": "product 4",
        "quantity": 3,
        "cost":40,
        "date":"21/12/2022"
      }
    ]  
  }
]);

// Εισάγεται τα documents του αρχείου products.json στη συλλογή products
db.getCollection('products').insertMany([
  {
    "product": "product 1",
    "cost": 10,
    "description": "Description for product 1" ,
    "quantity": 40
  },
  {
    "product": "product 2",
    "cost": 20,
    "description": "Description for product 2" ,
    "quantity": 10
  },
  {
    "product": "product 3",
    "cost": 30,
    "description": "Description for product 3",
    "quantity": 20
  },
  {
    "product": "product 4",
    "cost": 40,
    "description": "Description for product 4",
    "quantity": 30
  },
  {
    "product": "product 5",
    "cost": 15,
    "description": "Description for product 5",
    "quantity": 20
  }
]);

// Αναζητήστε τα document που έχουν "area": "area1" και ταξινομήστε τα βάση του πεδίου
db.getCollection('users').find({'address.area':'area1'}).sort({surname:1});

// Αναζητήστε τα document στα οποία το πεδίο quantity του products είναι >=10,
// ταξινομήστε τα βάση του πεδίου surname και επιστρέψτε μόνο το πεδίο username
db.getCollection('users').find({'products.quantity': { $gte: 10 } }, {username:1}).sort({surname:1})


// Τροποποιήστε όλους τους χρήστες που έχουν "area": "area1" και αλλάξτε το area1 σε
// Patision
db.getCollection('users').updateMany(
  {'address.area':'area1'},
  {
    $set: {
      'address.area':'Patision'
    }
  }
)

// Τροποποιήστε όλους τους χρήστες που το πεδίο quantity του products είναι >=10 που
// και προσθέστε ένα νέο πεδίο special με τιμή true
db.getCollection('users').updateMany(
  {'products.quantity':{ $gte: 10 }},
  {
    $set: {
      'special':true
    }
  }
)

// Τροποποιήστε όλους τους χρήστες και εισάγεται στο subdocuments του πεδίου phone
// το πεδίο country με τιμή greece.
db.getCollection('users').updateMany(
  {},
  {
    $set: {
      "phone.$[].coutry":'Greece'
    }
  }
)

// Διαγράψτε από όλους τους χρήστες που το πεδίο quantity του products είναι >=10
db.getCollection('users').deleteMany(
  {'products.quantity': { $gte: 10 } }
)

// Βρείτε το συνολικό ποσό αγορών που έχουν γίνει καθώς και το σύνολο των προϊόντων
// που έχουν αγοραστεί
db.getCollection('users').aggregate([
  {
    $unwind: "$products"
  },
  {
    $project: {
      id: 1,
      username:1,
      products:1
    }
  },
  {
    $group: {
    _id: {  },
        totalAmount: {
          $sum: {
            $multiply: [ "$products.cost", "$products.quantity" ]
          }
        },
        count: { $sum: 1 }
      }
  }
])

// Βρείτε ανά προϊόν το συνολικό ποσό αγορών που έχουν γίνει καθώς και το σύνολο των
// προϊόντων που έχουν αγοραστεί
db.getCollection('users').aggregate([
  {
      $unwind: "$products"
  },
  {
    $project: {
      id: 1,
      username:1,
      products:1
    }
  },
  {
    $group: {
      _id: {product: "$products.product"},
      totalAmount: {
        $sum: {
          $multiply: [ "$products.cost", "$products.quantity" ]
        }
      },
      count: { $sum: 1 },
    }
  }
])