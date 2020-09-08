const express           = require('express');
const membersController = require('../controllers/membersController');

const router = express.Router();

router.get("/", membersController.getAllMembers);
router.get("/getBatchmembers", membersController.getBatchMembers);
router.post("/", membersController.postMember);
router.patch("/:id", membersController.patchMember);
router.delete("/:id", membersController.deleteMember);

module.exports = router;