const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../app');
const helper = require('../helpers/user.helper')

require('dotenv').config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI)
    .then(
      () => { console.log("Connection to MOngoDB established")},
      err => { console.log("Failed to connect to MongoDB", err)}
    )
});

afterEach(async ()=>{
  await mongoose.connection.close();
})

describe("Request GET /api/users", () => {
  it("Returns all users", async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0)
  }, 10000)
})

describe('Request GET /api/users/:username', () =>{
  it('Returns a user', async ()=>{
    
    const result = await helper.findLastInsertedUser();
    // console.log(result);
    
    const res = await request(app).get('/api/users/' + result.username);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.username).toBe(result.username);
    expect(res.body.data.email).toBe(result.email);
  }, 10000)
})

describe('Request POST /api/users', () => {
  it('Creates a user', async () => {
    const res = await request(app)
    .post('/api/users')
    .send({
      username: "test",
      password: "123456",
      name:"Kostas",
      surname: "Kostakis",
      email: "test@aueb.gr"
    })
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeTruthy();
  }, 10000);

  it('Create a user testing password length', async () => {
    const res = await request(app)
    .post('/api/users')
    .send({
      username: "test1",
      password: "123",
      name:"Kostas",
      surname: "Kostakis",
      email: "test1@aueb.gr"
    })
    expect(res.statusCode).toBe(400);
    expect(res.body.data).toBeTruthy();
  }, 10000);

  it('Creates a user testing username and email', async () => {
    const res = await request(app)
    .post('/api/users')
    .send({
      username: "test",
      password: "123456",
      name:"Kostas",
      surname: "Kostakis",
      email: "test@aueb.gr"
    })
    expect(res.statusCode).toBe(400);
    expect(res.body.data).toBeTruthy();
  }, 10000)
})

describe("DELETE /api/users/:username", () => {
  it("Delete last inserted user", async () =>{
    const result = await helper.findLastInsertedUser();
    const res = await request(app)
      .delete('/api/users/' + result.username);
    
    expect(res.statusCode).toBe(200)
  },10000)
})