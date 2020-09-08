const express        = require('express');
const pairController = require('../controllers/pairController');

const router = express.Router();

router.get('/:id', pairController.getPairs);

module.exports = router;