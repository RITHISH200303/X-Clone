const express = require('express');

const authController = require('../controllers/auth.controller')

const router = express.Router();

router.get('/api/home',authController.getHome)

module.exports = router
