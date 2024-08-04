const express = require("express");
const router = express.Router();

//import the controlers 

const {createcomment}=require("../controlers/commentcontrole");

const {Likes}= require("../controlers/likecontroler");

const {Posts}=require("../controlers/postcontroler");






router.post("/comment",createcomment);
router.post("/likes",Likes);
router.post("/posts",Posts);

module.exports=router;