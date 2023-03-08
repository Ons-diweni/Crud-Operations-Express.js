const express = require ('express')
const User = require ('../models/User.js')


//*****************************Create ****************/
function add (req , res , next ) {
    console.log(req.body)
   
    const newUser  = new User ({...req.body})
    newUser.save()
    .then(()=>res.status(201).json({message:"User added with sucess !"}))
    .catch(err => res.status(400).json({err}));

  }

//***************************** Read ******************/
function getAll (req , res , next ) {

    User.find()
    .then(users =>res.status(201).json(users))
    .catch(err => res.status(400).json({err}));

  }

//*************************getById ********************/

function getById ( req , res , next ) {
User.findOne({_id : req.params.id}) 
.then((user) => res.status(200).json(user))
.catch((err) => res.status(404).json({err}))
} 

//****************************getAll**************** */







  module.exports = {add , getAll , getById}