const express = require('express');
const multer = require('multer');


const postRentReq = require('../models/postRentReq')


const router = express.Router();

//save posts

router.post('/RentReq/save', (req, res) => {
    let newRentReq = new postRentReq(req.body);

    newRentReq.save((err) => {
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

router.get('/RentReq', (req, res) => {
    postRentReq.find().exec((err, postRentReq) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: postRentReq
        });

    });
});

//update Posts

router.put('/RentReq/update/:id', (req, res) => {
    postRentReq.findByIdAndUpdate(
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
router.delete('/RentReq/delete/:id', (req, res) => {
    postRentReq.findByIdAndRemove(req.params.id).exec((err, deletedRentReq) => {
        if (err)
            return res.status(400).json({
                massage: "Delete unsuccesful",
                err
            });
        return res.json({
            massege: "Delete Succesfully",
            deletedRentReq

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
}).single('NIC')


router.post('/add/rent', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        } else {
            const newRentReq = new postRentReq({
                ItemCode: req.body.ItemCode,
                ItemName: req.body.ItemName,
                customerID: req.body.customerID,
                customerName: req.body.customerName,
                CustomerNIC:req.body.customerNIC,
                cusEmail:req.body.cusEmail,
                Phone:req.body.Phone,
                StartDate:req.body.StartDate,
                EndDate:req.body.EndDate,
                NIC:req.file.filename
                    
                
            })
            newRentReq.save().then(() => res.send("successfull uploaded"))
                .catch((err) => console.log(err));
        }
    })
})



module.exports = router;