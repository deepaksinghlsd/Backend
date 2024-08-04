const Post = require("../module/postmodule");

const Likes = require("../module/likemodule")

exports.Likes=async (req , res)=>{
    try{
        const{ post , user , body} = req.body;

        const Like = new Like(
            {
                post , user , body
            }
        )

        const saveLike = await Like.save();
        const UpdatePost = await Post.findByIdAndUpdate(post,{$push:{Likes: saveLike._id}},{new:true});

        res.json({
            post: UpdatePost,
        })
    }

    catch{ 
        res.status(500).send({message:"Error Occured"})
    }
}