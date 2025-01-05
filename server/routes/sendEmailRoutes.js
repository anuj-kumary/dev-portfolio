const express = require("express");
const { sendEmailInvite } = require("../controllers/sendEmailInviteController");

const router = express.Router();

router.post("/", sendEmailInvite);

module.exports = router;