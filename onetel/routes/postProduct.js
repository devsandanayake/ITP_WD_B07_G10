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

 }).single('image');
    
 //Inster an user into database router
router.post('/add/pro',upload,(req,res)=>{
    if (!req.body.Categories || !req.body.Brand || !req.body.Price || !req.body.Model || !req.body.Status || !req.file) {
        window.alert('Please fill in all required fields');
        return;
      }
     const product = new Postproduct({
         Categories:req.body.Categories,
         Brand:req.body.Brand,
         Price:req.body.Price,
         Model:req.body.Model,
         Status:req.body.Status,
         image:req.file.filename,
     });
     product.save().then(() => res.send("successfull uploaded"))
     .catch((err) => console.log(err));
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
//get a specific post
router.get('/product/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Postproduct.findById(postId);
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


router.get('/product/view/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const data = await Postproduct.findById(id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  // img update

//   router.put('/:id', upload.single('image'), async (req, res) => {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     try {
//       const image = await Image.findById(id);
//       if (!image) {
//         return res.status(404).json({ message: 'Image not found' });
//       }
//       if (req.file) {
//         const imagePath = path.join(__dirname, '..', image.path);
//         fs.unlinkSync(imagePath);
//         const imageBuffer = await sharp(req.file.buffer).resize({ width: 500 }).toBuffer();
//         fs.writeFileSync(path.join('uploads', req.file.originalname), imageBuffer);
//         image.path = `uploads/${req.file.originalname}`;
//         image.filename = req.file.originalname;
//       }
//       image.title = title;
//       image.description = description;
//       await image.save();
//       res.json(image);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  
 

module.exports = router;