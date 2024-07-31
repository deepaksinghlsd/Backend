const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
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