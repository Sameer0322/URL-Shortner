const express = require('express');
const { handleGenShortURL, ReGenURL } = require('../controllers/urlController');
const router = express.Router();

router.post('/', handleGenShortURL);
router.get('/:id', ReGenURL);

module.exports = router;