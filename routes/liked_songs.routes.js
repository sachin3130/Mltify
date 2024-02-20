const express = require('express');
const router = express.Router();
const liked_songsController = require('../controllers/liked_songs.controller');
router.get('/',liked_songsController.liked_songs);
module.exports = router;