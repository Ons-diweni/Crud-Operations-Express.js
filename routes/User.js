const express = require ('express')
const router = express.Router()
const User = require ('../models/User.js')
const UserController = require ('../controllers/UserController')


// Route pour ajouter un utilisateur dans la base de donnèe
router.post("/add" , UserController.add)

// Route pour récupérer tous les utilisateurs de la base de donnèe
router.get('/users', UserController.find);

// Route pour récupérer un utilisateur par son ID
router.get('/user/:id', UserController.find);

// Route pour supprimer un utilisateur par son ID
router.delete('/delete/:id', UserController.delete);



module.exports=router