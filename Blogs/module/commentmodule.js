const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }

})

module.exports = mongoose.model("Comment", CommentSchema); 