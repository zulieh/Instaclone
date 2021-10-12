const express = require('express');
const router = express.Router();

const { signUp } = require('../controllers/userController/signUp');

router.post('/signup', [signUp])

module.exports = router;