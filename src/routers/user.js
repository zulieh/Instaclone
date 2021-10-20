const express = require('express');
const router = express.Router();

const { signUp } = require('../controllers/userController/signUp');
const { login } = require('../controllers/userController/login');

router.post('/', [signUp])
router.post('/login', [login])

module.exports = router;