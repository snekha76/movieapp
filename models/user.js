const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name:{
type : String,
required: true
  } ,
  last_name:{
  type : String,
  required: true
  } ,
  username: {
  type : String,
  required: true
  }, // You can use first_name + last_name as the username
  uuid: {
    type : String,
    required: true
  }, // Unique identifier for the user
  access_token: {
    type : String,
    required: true
  }, // Access token for authentication
  isLoggedIn: {
    type : Boolean,
    default : false
  }, // Indicates if the user is logged in
});

module.exports = mongoose.model('User', userSchema);
