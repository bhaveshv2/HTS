const express = require('express');
const router = express.Router();

router.use('/user',require('./UserRoute'));

module.exports = router;