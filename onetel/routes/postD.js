const express = require('express');

const Postdelivery = require('../models/postDelivery')
 

const router = express.Router();
 
//save posts

router.post('/post/save',(req,res)=>{
    let newPost = new Postdelivery(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error: "Failed to save post"
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
// router.get('/deliveryP/:id', async (req, res) => {
   
//     try {
//       const id = req.params.id;
//       const data = await Postdelivery.findById(id);
//       if(!data){
//         res.status(404).json({ message: "Post not found" });
//       }
//       return res.status(200).json({
//         success:true,
//         data
//       })
      
//     } catch (err) {
//       return res.status(400).json({ message: false , error:err.massage});
//     }
//   });

//get a specific post
router.get('/deliveryP/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Postdelivery.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, error: err.message});
}
});



// //new

// router.post('/post/savess', verifyToken, (req, res) => {
//   const userId = req.user.id; // Extract the user ID from the authenticated user's request

//   // Create a new post and associate it with the user ID
//   const newPost = new Postdelivery({
//     ...req.body,
//     user: userId
//   });

//   newPost.save((err) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Failed to save post"
//       });
//     }

//     return res.status(200).json({
//       success: "Post saved successfully"
//     });
//   });
// });

// // Token verification middleware
// function verifyToken(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({
//       error: 'Unauthorized'
//     });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({
//         error: 'Unauthorized'
//       });
//     }

//     req.user = decoded; // Set the user object in the request for further use
//     next();
//   });
// }

 
  
//   router.get('/posts', verifyToken, (req, res) => {
//     Postdelivery.find({ user: req.user.id }).exec((err, postsDelivery) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         existingPosts: postsDelivery,
//       });
//     });
//   });
  
 


module.exports = router;