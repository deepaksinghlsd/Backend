const express = require ("express");
const path = require("path");
const app = express();

app.listen(7000 , ()=>{
    console.log("server is running on port 7000");
});
app.get("/",(req ,res)=>{
    res.send("hello world");
} );

app.get("/About",(req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});