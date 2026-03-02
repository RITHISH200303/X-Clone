const express = require('express');

const authController = require('../controllers/auth.controller')

const router = express.Router();

router.get('/api/user',authController.getHome)

module.exports = router
