const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const Login_Router=require('./Router/Login_Router')
const Registration_Schema=require('./Router/Registration_Router')

app.use(cors())
app.use(express.json())

app.use("/Login",Login_Router)
app.use("/Register",Registration_Schema)

var db="mongodb://localhost:27017/Demo_DB";

mongoose.connect(db);
mongoose.connection.on("error",(error)=>{
    console.log("Database connect gives error");
}).once("open",()=>{
    console.log("Database connect Successfully")
});


app.listen(3030,function(err){
    if(err)
    {
        console.log("Application Connection Error")
    }
    else
    {
        console.log("Application Connect SuccessFully")
    }
});