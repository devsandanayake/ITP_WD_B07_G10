const express = require('express');
const multer = require('multer');


const postWarrenty = require('../models/postWarrenty')


const router = express.Router();

//save posts

router.post('/Warrenty/save', (req, res) => {
    let newWarrenty = new postWarrenty(req.body);

    newWarrenty.save((err) => {
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

router.get('/Warrenty', (req, res) => {
    postWarrenty.find().exec((err, postWarrenty) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: postWarrenty
        });

    });
});

//update Posts

router.put('/Warrenty/update/:id', (req, res) => {
    postWarrenty.findByIdAndUpdate(
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
router.delete('/Warrenty/delete/:id', (req, res) => {
    postWarrenty.findByIdAndRemove(req.params.id).exec((err, deletedWarrenty) => {
        if (err)
            return res.status(400).json({
                massage: "Delete unsuccesful",
                err
            });
        return res.json({
            massege: "Delete Succesfully",
            deletedWarrenty

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
}).single('warrenty')


router.post('/add/War', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newWarrenty = new postWarrenty({
                ItemCode: req.body.ItemCode,
                ItemName: req.body.ItemName,
                customerID: req.body.customerID,
                customerName: req.body.customerName,
                cusEmail:req.body.cusEmail,
                Reason: req.body.Reason,
               warrenty:req.file.filename
                    
                
            })
            newWarrenty.save().then(() => res.send("successfull uploaded"))
                .catch((err) => console.log(err));
        }
    })
})



module.exports = router;