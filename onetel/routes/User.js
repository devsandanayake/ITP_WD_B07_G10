const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const  cors = require('cors');
const User = require('../models/postUsers');
router.use(cors());

process.env.SECRET_KEY = 'secret';

router.post('/register',(req,res)=>{
    const today = new Date()

    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        created:today
    }
    User.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password = hash
                User.create(userData)
                    .then(user =>{
                        res.json({status:user.email+"registered"})
                    })
                    .catch(err=>{
                        res.send("error"+err);
                    })
            })
        }else{
            res.json({error:"User already registered"})
        }
    })
    .catch(err=>{
        res.send("error" +err); 
    })
})

router.post('/login',(req,res)=>{
    User.findOne({
         email:req.body.email
    })
       .then(user=>{
          if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
              const payload ={
                _id:user._id,
                first_name:user.first_name,
                last_name:user.last_name,
                email:user.email
              }
              let token =jwt.sign(payload,process.env.SECRET_KEY,{
                expiresIn:1440
              })
              res.send(token)
            }else{
                res.json({error:"User not exist"})
            }

          }else{
            res.json({error:"User not exist"})
          }
       })
       .catch(err=>{
        res.send("error" +err);
       })
})

router.get('/profile',(req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    User.findOne({
        _id:decoded._id
    })
      .then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send("User Doesnot exist");
        }
      })
      .catch(err=>{
        res.send("ERRor"+err);
      })


})

module.exports = router;