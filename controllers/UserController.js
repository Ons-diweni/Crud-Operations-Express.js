const express = require ('express')
const User = require ('../models/User.js')


//***************************** Endpoint to Create a user ****************/

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

//***************************** Enpoint to  (get All users - get user By Id )  ******************/

exports.find = (req , res , next ) => {
 
    const id = req.params.id ;
    (id)? User.findOne({_id :req.params.id })
    .then((user) => {(user)? res.send(user):res.status(404).send({message :"Not found user with id "+ req.params.id })})
    .catch((err) =>res.status(500).send({ message: "Error retrieving user with id " + req.params.id}))
    :User.find()
    .then((users) => res.send(users))
    .catch((err)=> res.send({message : "Error retrieving users"}))
} 

//**************************** Endpoint to delete a User **************** */

exports.delete = (req, res)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then(user => { (!user)?  res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
    :res.send({ message : "User was deleted successfully!"}) })
    .catch(err =>{res.status(500).send({message: "Could not delete User with id=" + id  , error : err}); });
}


//**************************** Endpoint to delete a User **************** */
exports.update = (req, res)=>{

    if(Object.keys(req.body).length === 0){ return res.status(400).send({ message : "User with new informations must be provided"})}

    const id = req.params.id;

    //The { useFindAndModify: false} option is used to avoid using the deprecated findAndModify() method
    //The { new: true } option tells Mongoose to return the updated document instead of the original one.
    User.findByIdAndUpdate(id,req.body, { useFindAndModify: false , new: true})
    .then(user => {(!user) ? res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`}) :res.send(user)})
    .catch(err => res.status(500).send({ message : "Error Update user information" , error : err}))
}


