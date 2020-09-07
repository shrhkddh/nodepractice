const express           = require('express');
const batchesController = require('../controllers/batchesController');

const router = express.Router();

router.get('/', batchesController.getBatches);
router.get('/:id', batchesController.getOneBatch);

module.exports = router;