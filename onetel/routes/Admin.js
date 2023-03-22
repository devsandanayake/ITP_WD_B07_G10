const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const  cors = require('cors');
const Admin = require('../models/postAdmin');
router.use(cors());

process.env.SECRET_KEY = 'admin';

router.post('/admin/register',(req,res)=>{
    const today = new Date()

    const adminData = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        created:today
    }
    Admin.findOne({
        email:req.body.email
    })
    .then(admin=>{
        if(!admin){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                adminData.password = hash
                Admin.create(adminData)
                    .then(admin =>{
                        res.json({status:admin.email+"registered"})
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

router.post('/admin/login',(req,res)=>{
    Admin.findOne({
         email:req.body.email
    })
       .then(admin=>{
          if(admin){
            if(bcrypt.compareSync(req.body.password,user.password)){
              const payload ={
                _id:admin._id,
                name:admin.name,
                email:admin.email
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

router.get('/admin/profile',(req,res)=>{
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

    Admin.findOne({
        _id:decoded._id
    })
      .then(admin =>{
        if(admin){
            res.json(admin)
        }else{
            res.send("User Doesnot exist");
        }
      })
      .catch(err=>{
        res.send("ERRor"+err);
      })


})

//get posts

router.get('/getData',(req,res)=>{
  User.find().exec((err,user)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
          return res.status(200).json({
              success:true,
              existingPosts:user
          });
      
  });
});


//delete post
router.delete('/user/delete/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id).exec((err,user)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",user
                
            });
        

    });
});


 


module.exports = router;