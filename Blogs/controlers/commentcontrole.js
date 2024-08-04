const Post = require("../module/postmodule");
const Comment = require("../module/commentmodule")

// exports.createcomment= async(req ,res)=>{
//  try{
//  const {post, user, body} = req.body;

//  const comment = new commnent ({
//     post , user, body
//  });
//  const SaveComment = await comment.save();

//  const updatedComment = await Post.findByIdAndUpdate(Post,{$Push:{
//     comments: SaveComment._id
//  }},{new:update})
//  .populate("Comments")
//  .exex();
//  res.json(
//     {
//         post:updatedComment,
//     }
//  )

//  }
//  catch(err){
//     return res.sattus(500).json({
//         err:"Error while creating comment",
//     })
//  }

// }

exports.createcomment= async(req,res)=>{
  res.send (`<h1>This is your comment post</h1>`)
}