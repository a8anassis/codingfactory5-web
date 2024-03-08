const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

let addressSchema = new Schema({
  area: { type: String},
  road: {type: String}
}, {_id: false})

let phoneSchema = new Schema({
  type: { type: String },
  number: { type: String }
}, {_id: false})

let productSchema = new Schema({
  product: { type: String},
  cost: {type: Number},
  quantity: {type: Number},
  date: { type: Date, default: Date.now }
})

let userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required field'],
    maxLength: 20,
    unique: true,
    trim: true,
    lowercase: true 
  },
  password: {
    type: String, 
    required: [true, 'Password is required field'],
    maxLength:20,
    minLength:6
  },
  name: { type: String },
  surname: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required field'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email address is not valid']
  },
  address: addressSchema,
  phone: { type: [phoneSchema], null: true },
  products: { type: [productSchema], null: true}
}, {
  collection: 'users',
  timestamps: true
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema)