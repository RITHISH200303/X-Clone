const express = require('express');

const authController = require('../controllers/auth.controller')

const router = express.Router();

router.get('/api/signup',authController.getSignup)

module.exports = router
