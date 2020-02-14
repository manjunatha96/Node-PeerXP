const express=require('express')
const router=express.Router()
const User  = require('../Shared/Database/Registration')

router.post('/post1',async(req,res)=>{

let result=await User.create({
    first_name :req.body.first_name,
    last_name :req.body.last_name,
    email :req.body.email,
    mobile :req.body.mobile,
    message :req.body.message,
    Organization :req.body.Organization
})
 res.send(result)
})

module.exports=router