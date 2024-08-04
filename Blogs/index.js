const express = require("express");
const app = express();

require ("dotenv").config();

const PORT = process.env.PORT||7000;

app.use(express.json());

const connectDB = require("./config/database");
connectDB();

const router = require("./rought/blogs");

// app.use("/app/v1/",router);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});

app.get ("/",(req,res)=>{
    res.send(`<h1>This is your home page</h1>`)
});