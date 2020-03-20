var jwt=require('jsonwebtoken');

module.exports={
    sign:(data,secretkey)=>{
        return jwt.sign(data,secretkey)
    },
    verify:(token,secretkey)=>{
        return jwt.verify(token,secretkey)
    }
}