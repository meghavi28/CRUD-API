var mongoose=require('mongoose')
var schema=mongoose.Schema

var Login_Schema=new schema({
 Email:
 {
     type:String,
     required:true
 },
 Password:
 {
     type:String,
     required:true
 }   
},{collection:'Login_Schema',timestamps:true})

module.exports=mongoose.model("Login_Schema",Login_Schema);