//auth isStuden isAdmin
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth=(req,res,next)=>{
    try{
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Please provide a token"
            })
        };
        try{
JWT_SECRET=deepak
const decoded = jwt.verify(token,process.env.JWT_SECRET);
console.log(decoded);

req.user= decoded;
        }catch(error){
console.log("error in verifing the token");
return res.status(401).json({
    success:false,
    message:"Invalid token",
})
next();
        }
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"somthig workig to verfing",
        })

    }
}

exports.isStudent=(req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
            return res.status(401).json({
                success:false,
                message:"You are not a student"
            })
        }
        next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"This is proted router for the student"
        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"You are not a Admin"
            })
        }
        next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"This is proted router for the Admin"
        })
    }
}