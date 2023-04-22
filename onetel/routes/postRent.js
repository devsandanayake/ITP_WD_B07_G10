const express = require('express');
const multer = require('multer');
 


const PostRent = require('../models/postRent');
 

const router = express.Router();

//save posts

router.post('/rentItem/save',(req,res)=>{
    let newPost = new PostRent(req.body);

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

router.get('/rentItems',(req,res)=>{
    PostRent.find().exec((err,postsRent)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsRent
            });
        
    });
});

//update Posts

router.put('/rentItem/update/:id',(req,res)=>{
    PostRent.findByIdAndUpdate(
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
router.delete('/rentItem/delete/:id',(req,res)=>{
    PostRent.findByIdAndRemove(req.params.id).exec((err,deletedrentItem)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedrentItem
                
            });
        

    });
});

//  //storage
const storage = multer.diskStorage({
    destination: function(req,file,cb){
         cb(null,'./upload')
     },
    filename:function(req,file,cb){
         cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
     }
 });

 var upload = multer({
     storage:storage,

 }).single('imageRent');
    
 //Inster an user into database router
router.post('/Rent/add',upload,(req,res)=>{
     const rentItem = new PostRent({
         ProductName:req.body.ProductName,
         SKU:req.body.SKU,
         Model:req.body.Model,
         UPC:req.body.UPC,
         Price:req.body.Price,
         Features:req.body.Features,
         imageRent:req.file.filename,
     });
     rentItem.save((err)=>{
         if(err){
             res.json({massage:err.massage,type:'danger'}); 
         }else{
             console.log("success");
         }
     })
 })
  


//  router.post('/rex',(req,res)=>{
//    upload(req,res,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         const newproduct = new Postproduct({
//             Categories:req.body.Categories,
//             Brand:req.body.Brand,
//             Price:req.body.Price,
//             Model:req.body.Model,
//             Status:req.body.Status,


//             image:{
//                 data:req.file.filename,
//                 contentType:'image/'
//             }
//         })
//         newproduct.save().then(()=>res.send("successfull uploaded"))
//         .catch((err)=>console.log(err));
//     }
//    }) 
//  })

//get a specific product
// router.get('/product/:id',(res,req)=>{
//     let PId = req.params.id;

//     Postproduct.find(({id:PId}),(err,product)=>{
//         if(err){
//             return res.status(400).json({success:false,err});
//         }
//         return res.status(200).json({
//             success:true,
//             product
//         })
//     })
// })
router.get('/rentItem/view/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const data = await PostRent.findById(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;