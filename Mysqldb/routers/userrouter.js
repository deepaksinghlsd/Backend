const express = require('express')
const router = express.Router()

const {signup , login} = require("../controller/usercontroller");
const {createTask , Alltasks, update,TaskDelete} = require("../controller/taskcontroller")

router.post("/signup" , signup)
router.post("/login" , login)

//Task routers 
router.post("/createTask" , createTask)
router.get("/alltasks" , Alltasks)
router.put("/update/:id" , update)
router.delete("/delete/:id" , TaskDelete)

module.exports = router;