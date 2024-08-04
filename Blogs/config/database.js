const mongoose = require ("mongoose");

require("dotenv").config();

const databseConnectin = ()=>{
   mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.error(err);
        process.exit(1)})
}

module.exports= databseConnectin;