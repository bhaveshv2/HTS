const express = require('express');
const usersController = require('../controllers/UserController');

const router = express.Router();

router.post('/signup', usersController.signup);
router.post('/signin', usersController.signin);

module.exports = router;