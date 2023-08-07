import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,

  lastName: String,

  email: String,

  password: String,

  seller:{
    type: Boolean,
    default: false  
  },

  address:{
    address1: String,
    address2: String,
    city: String,
    zip: Number,
    country: String
  },

  createdAt:{
    type: Date,
    default: Date.now(),
  }
})