// const express = require("express")
// const app = express()

// const cors = require("cors")
// app.use(cors());

// app.listen(8080 , () => {
//     console.log("Listing");
    
// })

const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routers/auth");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Sync Database
sequelize.sync().then(() => {
  console.log("Database synced...");
});

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
