const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 7000;
app.use(express.json())
const DBconnection = require("./config/database");
DBconnection();

const router = require("./router/router");const { default: mongoose } = require("mongoose");
app.use("/api/v1",router);
app.listen(PORT, () => {
    console.log(`app is lisnig at port at ${PORT}`);
});

app.get("/", (req,res)=>{
    res.send("hello world");
} )
   

