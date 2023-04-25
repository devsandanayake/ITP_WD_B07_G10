const express = require('express');

const Postdelivery = require('../models/postDelivery')
 

const router = express.Router();

//save posts

router.post('/post/save',(req,res)=>{
    let newPost = new Postdelivery(req.body);

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

router.get('/posts',(req,res)=>{
    Postdelivery.find().exec((err,postsDelivery)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsDelivery
            });
        
    });
});

//update Posts

router.put('/post/update/:id',(req,res)=>{
    Postdelivery.findByIdAndUpdate(
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
router.delete('/post/delete/:id',(req,res)=>{
    Postdelivery.findByIdAndRemove(req.params.id).exec((err,deletedDelivery)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedDelivery
                
            });
        

    });
});


//get a specific delivery
router.get('/deliveryP/:id', async (req, res) => {
   
    try {
      const id = req.params.id;
      const data = await Postdelivery.findById(id);
      if(!data){
        res.status(404).json({ message: "Post not found" });
      }
      return res.status(200).json({
        success:true,
        data
      })
      
    } catch (err) {
      return res.status(400).json({ message: false , error:err.massage});
    }
  });


module.exports = router;