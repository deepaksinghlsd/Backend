const Like = require("../module/likemodule")
const Comment = require("../module/commentmodule");
const Post = require("../module/postmodule");

exports.Posts=async(req, res)=>{
    try{ 

        const{ title , body } = req.json;
        const post = new post({
            title, body
        });

        const Savepost = await post.save();

        res.json({
            post:Savepost,
        });
    
    }

    catch(error){
        return res.status(400).json({
            message: "Error in fetching posts",
        })
    }
}