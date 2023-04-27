const express = require('express');
const multer = require('multer');


const postReturn = require('../models/postReturn');



const router = express.Router();

//save posts

router.post('/Return/save', (req, res) => {
    let newReturn = new postReturn(req.body);

    newReturn.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Post save successfully"
        });
    });
});


//get posts

router.get('/Return', (req, res) => {
    postReturn.find().exec((err, postReturn) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: postReturn
        });

    });
});

//update Posts

router.put('/Return/update/:id', (req, res) => {
    postReturn.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Updated Succesfully"


            });
        }

    );
});


//delete post
router.delete('/Return/delete/:id', (req, res) => {
    postReturn.findByIdAndRemove(req.params.id).exec((err, deletedReturn) => {
        if (err)
            return res.status(400).json({
                massage: "Delete unsuccesful",
                err
            });
        return res.json({
            massege: "Delete Succesfully",
            deletedReturn

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
}).single('return')


router.post('/add/Ret', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newReturn = new postReturn({
                ItemCode: req.body.ItemCode,
                ItemName: req.body.ItemName,
                customerID: req.body.customerID,
                customerName: req.body.customerName,
                cusEmail: req.body.cusEmail,
                Address: req.body.Address,
                Reason: req.body.Reason



            })
            newReturn.save().then(() => res.send("successfull uploaded"))
                .catch((err) => console.log(err));
        }
    })
})


router.get('/returnItem/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postReturn.findById(postId);
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