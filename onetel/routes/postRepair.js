const express = require('express');

const Postrepair = require('../models/postRepair')
 

const router = express.Router();

//save posts

router.post('/repair/save',(req,res)=>{
    let newPost = new Postrepair(req.body);

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

router.get('/repair',(req,res)=>{
    Postrepair.find().exec((err,postsRepair)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                existingPosts:postsRepair
            });
        
    });
});

//update Posts

router.put('/repair/update/:id',(req,res)=>{
    Postrepair.findByIdAndUpdate(
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
router.delete('/repair/delete/:id',(req,res)=>{
    Postrepair.findByIdAndRemove(req.params.id).exec((err,deletedRepair)=>{
        if(err)
            return res.status(400).json({
                massage:"Delete unsuccesful",err
            });
            return res.json({
                massege:"Delete Succesfully",deletedRepair
                
            });
        

    });
});

//get a specific post
router.get('/repair/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Postrepair.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message });
    }
});


module.exports = router;