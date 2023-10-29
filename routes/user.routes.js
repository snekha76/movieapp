const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Route to sign up a new user
router.post('/signup', userController.signUp);

// Route to log in a user
router.post('/login', userController.login);

// Route to log out a user by providing their unique ID
router.post('/logout/:userId', userController.logout);

// route to get a coupon code for the user
router.get('/getCouponCode', userController.getCouponCode);

//  route to book a show for the user
router.post('/bookShow/:userId/:showId', userController.bookShow);



module.exports = router;
