require('dotenv').config();

//import express module
const express = require('express')
//import mongoose module 
const mongoose = require ('mongoose')
const UserRoute = require ('./routes/User')

//database connection 
mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connexion à MongoDB réussie !'))
.catch((erreur)=>console.log('Connexion à MongoDB échouée !' + erreur))

// create a new instance of the Express application 
const App = express ()

//express.json() is a middleware function that extracts the JSON data from the request body and parses it into a JavaScript object, 
//which can then be accessed in your application code. 
//This middleware function is typically used for APIs that receive JSON data in the request body like this one
App.use(express.json())
App.use(express.urlencoded({ extended: false }));



//routes configuration 
App.use("/user" , UserRoute)


//export the App instance to use it in other modules in this project
module.exports = App