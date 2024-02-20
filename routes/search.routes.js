const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');
router.get('/',searchController.search);
router.post('/',searchController.searchRequest);
router.get('/all/:query', searchController.searchAll);
router.get('/predict_mood', searchController.predictMood);
module.exports = router;