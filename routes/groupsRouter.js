const express          = require('express');
const groupsController = require('../controllers/groupsController');

const router = express.Router();

router.get('/', groupsController.getMembers);
router.get('/:id', groupsController.getOneMember);
// router.get('/:group/:id', groupsController.getOneMember);
router.get('/:group', groupsController.getGroupMember);

module.exports = router;