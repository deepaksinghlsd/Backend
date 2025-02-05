const express = require("express")
const app = express();
const sequelize = require("./config/db")
require("dotenv").config();
const router = require("./routers/userrouter")

const PORT = process.env.PORT

app.use(express.json())
app.use("/api/v1" , router)

sequelize.sync().then(()=>{
    console.log("Databased synced ..");
    
})

app.listen( PORT , ()=>{
    console.log(`app is listing on port 3500`);
    
})