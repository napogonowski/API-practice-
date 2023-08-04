const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes')
/* GET home page. */
router.get('/', quotesController.index)


module.exports = router;
