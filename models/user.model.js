const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  contact: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
  },
  isLoggedIn: Boolean,
  uuid: String,
  accesstoken: String,
  coupens: [
    {
      id: Number,
      discountValue: Number,
    },
  ],
  bookingRequests: [
    {
      reference_number: Number,
      coupon_code: Number,
      show_id: Number,
      tickets: [Number],
    },
  ],
});

module.exports = mongoose.model('user', userSchema);
