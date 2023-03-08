const express = require ('express')
const router = express.Router()
const User = require ('../models/User.js')
const UserController = require ('../controllers/UserController')


router.post("/add" , UserController.add)
router.get("/getAll" , UserController.getAll)
router.get("/getById/:id" , UserController.getById)




module.exports=router