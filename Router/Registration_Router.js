const express=require('express')
const app=express.Router()
const Registration_Schema=require('../schema/Registration_Schema')
const helper=require('../Helper/Helper')

app.post("/Register_Insert",function(req,res){
    const x=req.body
    const SchemaObj=new Registration_Schema(x)

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

app.get("/DisplayData",function(req,res){
    Registration_Schema.find({},function(error,data){
        if(error)
        {
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    })
})

app.post("/authenticateUser", (req, res) => {
    Registration_Schema.findOne(req.body,function(err,data){
        debugger
        if(err)
        {
            res.send(err);
        }
        else
        {
            if(data)
            {
                var token=helper.sign(req.body,"megh");
                res.send({
                    token
                });
            }
            else
            {
                // "you are not register yet"
                res.send({
                    token: null
                });
            }
        }
    })
});

app.put("/update/:id",function(req,res){
    Registration_Schema.findByIdAndUpdate({_id:req.params.id},req.body,function(err,data){
        if(err)
        {
            res.send("error in update");
        }
        else
        {
            res.send("data updated");
        }
    })
})
module.exports=app;