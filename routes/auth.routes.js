const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const {refreshToken} = require('../controllers/refersh_token.controller');
router.get('/',authController.auth);
router.get('/callback',authController.callback);
router.get('/refresh_token', refreshToken);
module.exports = router;