const express = require('express');
const multer = require('multer');


const postEmp = require('../models/emp')


const router = express.Router();

//save posts
     
router.post('/Emp/save',(req,res)=>{
    let newPost = new postEmp(req.body);

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

router.get('/Emp', (req, res) => {
    postEmp.find().exec((err, postEmp) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: postEmp
        });

    });
});

//update Posts

router.put('/Emp/update/:id', (req, res) => {
    postEmp.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, postEmp) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Succesfully",
                

            });
        }

    );
});


//delete post
router.delete('/Emp/delete/:id', (req, res) => {
    postEmp.findByIdAndRemove(req.params.id).exec((err, deletedEmp) => {
        if (err)
            return res.status(400).json({
                massage: "Delete unsuccesful",
                err
            });
        return res.json({
            massege: "Delete Succesfully",
            existingPosts:deletedEmp

        });


    });
});

//storage
const Storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage
}).single('CusImg')

//get a specific post
router.get('/Emp/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postEmp.findById(postId);
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

router.post('/add/emp', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newEmp = new postEmp({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                Address: req.body.Address,
                NIC:req.body.NIC,
                Phone:req.body.Phone,
                CusImg:req.file.filename
                    
                
            })
            newEmp.save().then(() => res.send("successfull uploaded"))
                .catch((err) => console.log(err));
        }
    })
})



module.exports = router;