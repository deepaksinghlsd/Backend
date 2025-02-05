const User = require("../module/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async(req , res)=>{
    try {
        const { username , email , password } = req.body;
        let user = await User.findOne({ where : {email}  });
        if(user){
            return res.status(400).json({
                message : "User already exist" ,
                status : false
            })
        }
        user = await User.findOne({where : {username}});
        if(user){
            return res.status(400).json({
                message : "Username already exist" ,
                status : false
                })
        }
        const hashedPassword = await bcrypt.hash(password , 10);
         user = await User.create({ username , email , password : hashedPassword });
         
         return res.status(201).json({
            message : "User created successfully" ,
            status : true ,
            user : user
         })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error" ,
            status : false,
            error : error.message
        })
        
    }
}

// Login Controller

exports.login = async(req , res) => {
    try {
        const { email , password } = req.body;
        const user = await User.findOne({ where : { email } });
        if(!user){
            return res.status(400).json({
                message : "Invalid email " ,
                status : false})
        }
        const isValidPassword = await bcrypt.compare(password , user.password);
        if(!isValidPassword){
            return res.status(400).json({
                message : "Invalid password" ,
                status : false
                })
                }
                const token = jwt.sign({ id : user.id , email : user.email } , process.env.JWT_SECRETE , {expiresIn: "1h"} )
                return res.status(200).token({
                    message : "Login successful" ,
                    status : true ,
                    token : token
                })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error" ,
            status : false ,
            error : error.message
            })
            
    }
}
