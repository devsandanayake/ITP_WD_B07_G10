const express = require('express');
const multer = require('multer');
 

const Postproduct = require('../models/postProduct')
 

const router = express.Router();

//save posts

router.post('/product/save',(req,res)=>{
    let newPost = new Postproduct(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post save successfully"
        });
    });
});


//get posts

router.get('/products',(req,res)=>{
    Postproduct.find().exec((err,postsProduct)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsProduct
            });
        
    });
});

//update Posts

router.put('/product/update/:id',(req,res)=>{
    Postproduct.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
                return res.status(200).json({
                    success:"Updated Succesfully"
                    
                });
            }
        
    );
});


//delete post
router.delete('/product/delete/:id',(req,res)=>{
    Postproduct.findByIdAndRemove(req.params.id).exec((err,deletedProduct)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedProduct
                
            });
        

    });
});

 //storage
 const Storage = multer.diskStorage({
    destination:'upload',
    filename:(req, file ,cb)=>{
        cb(null,file.originalname);
    },
 });

 const upload = multer({
    storage:Storage
 }).single('testImage')


 router.post('/rex',(req,res)=>{
   upload(req,res,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        const newproduct = new Postproduct({
            Categories:req.body.Categories,
            Brand:req.body.Brand,
            Price:req.body.Price,
            Model:req.body.Model,
            Status:req.body.Status,


            image:{
                data:req.file.filename,
                contentType:'image/png'
            }
        })
        newproduct.save().then(()=>res.send("successfull uploaded"))
        .catch((err)=>console.log(err));
    }
   }) 
 })



module.exports = router;