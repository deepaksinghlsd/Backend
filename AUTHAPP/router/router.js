const express = require("express");
const router = express.Router();

const {SignUP, login} = require("../controllers/auth");
const {auth,isStudent,isAdmin}=require("../middlewares/authmiddlewares");

router.post("/signup", SignUP);
router.post("/login",login);
// testing route for middlewares

router.get("/auth", auth,(req,res)=>{
    res.status(201).json({
        success:true,
        message:"Auth Successfull",
    })
})

//protected route for sefic roles
router.get("/student" , auth ,isStudent, (req,res,next)=>{
    res.status(201).json({
        success:true,
        message:"Welcome to proted route for student Student"
    });
})

router.get("/admin",auth ,isAdmin ,(req,res)=>{
    res.status(201).json({
        success:true,
        message:"welcome to proted route for admin"
})
})

module.exports=router;