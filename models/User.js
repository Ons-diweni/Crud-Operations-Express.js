const mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({
  
 Name : {type:String , required : true},
 Email : {type:String , required : true},
 CIN : {type:Number , required : true},
 Adresse : {type:String , required : true},

})


module.exports = mongoose.model('User' , UserSchema)