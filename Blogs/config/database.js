const mongoose = require ("mongoose");

require("dotenv").config();

const databseConnectin = ()=>{
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((err)=>{
        console.error(err);
        process.exit(1)})
}

module.exports= databseConnectin;