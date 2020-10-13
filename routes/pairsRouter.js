const express        = require('express');
const pairController = require('../controllers/pairController');

const router = express.Router();

router.get('/', pairController.getPair);
router.post('/', pairController.createPair);

module.exports = router;