const express           = require('express');
const membersController = require('../controllers/membersController');

const router = express.Router();

router.get("/", membersController.getAllMembers);
router.get("/getBatchmembers", membersController.getBatchMembers);
router.post("/postMember", membersController.postMember);
router.patch("/patchMember", membersController.patchMember);
router.delete("/deleteMember", membersController.deleteMember);

module.exports = router;