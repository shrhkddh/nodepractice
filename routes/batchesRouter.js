const express           = require('express');
const batchesController = require('../controllers/batchesController');

const router = express.Router();

router.get('/', batchesController.getMembers);
router.get('/:id', batchesController.getOneMember);
// router.get('/:group/:id', batchsController.getOneMember);
// router.get('/:batch', batchesController.getBatchMembers);

module.exports = router;