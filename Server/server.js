const express = require("express");
const app = express();

app.use (express.json());
app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
app.get("/", (req, resp)=>{
    resp.send("hello world");
});
app.post("/car/name", (req , res)=>{
    const {name , brand}= req.body;
    console.log(name);
    console.log(brand);
    res.send("car dettel submit sucessfully");
});

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDataBase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database connecected");
})
.catch((err)=>{console.log("Erro")});
