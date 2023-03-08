const express = require ('express')
const User = require ('../models/User.js')


//*****************************Create ****************/

 exports.add = (req , res , next ) => {
    console.log(req.body)
    if(Object.keys(req.body).length === 0){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    const newUser  = new User ({...req.body})
    newUser.save()
    .then((user)=>res.status(201).json({message:"User added with sucess !" , user }))
    .catch(err => res.status(400).json({message : err.message || "Some error occurred while creating a user"}));
    
  }

//***************************** Read ******************/
exports.getAll = (req , res , next ) => {

    User.find()
    .then(users =>res.status(201).json(users))
    .catch(err => res.status(400).json({err}));

  }

//*************************getById ********************/

exports.getById = ( req , res , next ) => {
User.findOne({_id : req.params.id}) 
.then((user) => {(user)?res.status(200).json(user):res.status(404).send({message :"Not found user with id "+ req.params.id })})
.catch((err) => res.status(500).send({ message: "Error retrieving user with id " + req.params.id +err}))
} 

//****************************getAll**************** */

 exports.udpate = (req, res, next)  => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };


/********************************************** */

exports.find = (req , res , next ) => {
 
    const id = req.params.id ;
    (id)? User.findOne({_id :req.params.id })
    .then((data) => {(data)? res.send(data):res.status(404).send({message :"Not found user with id "+ req.params.id })})
    .catch((err) =>res.status(500).send({ message: "Error retrieving user with id " + req.params.id})): User.find()
    .then((users) => res.send(users))
    .catch((err)=> res.send({message : "Error retrieving users"}))
} 



