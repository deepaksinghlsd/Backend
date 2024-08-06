const express = require("express");
const router = express.Router();

const {SignUP, login} = require("../controllers/auth");

router.post("/signup", SignUP);
router.post("/login",login);

module.exports=router;