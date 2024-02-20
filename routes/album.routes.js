const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album.controller');
router.get('/:albumId',albumController.getAlbum);
module.exports = router;