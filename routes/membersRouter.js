const express           = require('express');
const membersController = require('../controllers/membersController');

const router = express.Router();

router.get("/", membersController.getMembers);
router.post("/signUp", membersController.signUp);
router.post("/signIn", membersController.signIn);
router.post("/signOut", membersController.signOut);
router.patch("/:id", membersController.patchMember);
router.delete("/:id", membersController.deleteMember);

module.exports = router;