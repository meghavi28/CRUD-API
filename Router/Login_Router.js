const express=require('express')
const app=express.Router()
const Login_schema=require('../schema/Login_schema')

app.post("/Login_Insert",function(req,res){
    const x=req.body
    const SchemaObj=new Login_schema(x)

    SchemaObj.save(function(error,data){
        if(error)
        {
            res.send(error)
        }
        else
        {
            res.send(data)
        }
    })
})

module.exports=app;