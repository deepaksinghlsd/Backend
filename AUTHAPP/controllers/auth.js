const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.SignUP = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if all required fields are present
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }

        // Secure password
        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            console.error("Error in hashing password:", err);
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        const newUser = await User.create({ name, email, password:hashPassword, role });
        res.status(201).json({
            message: "User created successfully",
            success: true,
        });
       
        
    } catch (error) {
        console.error("Error in user signup:", error);
        return res.status(500).json({
            success: false,
            message: "User cannot be signup, please try again"
        });
    }
};


//-------login-----

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email"
            });
        }
       

        const isPasswordMatch = await bcrypt.compare(password, user.password);
       
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        const payload = {
            email: user.email,
            role: user.role,
            id: user._id,
        };
       
        

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
      
        
        const userResponse = user.toObject();
        delete userResponse.password;
        userResponse.token=token;

      
        

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        return res.cookie("Token", token, options).status(200).json({
            success: true,
            user: userResponse,
            token,
            message: "User login success"
        });
    }
    catch (error) {
        console.error("Error in user login:", error);
        return res.status(500).json({
            success: false,
            message: "Login failed. Please try again."
        });
    }
};