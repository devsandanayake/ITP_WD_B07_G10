const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 8070;
//import routes
const postDelivery = require('./routes/postD');
const postProduct = require('./routes/postProduct');
const postRepair = require('./routes/postRepair');
const User = require('./routes/User');
const Admin = require('./routes/Admin');
const postWarrenty = require('./routes/postWarrenty');
const postOrder = require('./routes/Order');
const postEmp = require('./routes/emp');
const postRent = require('./routes/postRent');
const postRebtReq = require('./routes/postRentReq');
const postReturn = require('./routes/postReturn');



//app middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('upload'));
app.use(express.static('rentUpload'));
app.use(cors());



//routes middelware
app.use(postDelivery);
app.use(postProduct);
app.use(postRepair);
app.use(User);
app.use(Admin);
app.use(postWarrenty);
app.use(postOrder);
app.use(postEmp);
app.use(postRent);
app.use(postRebtReq);
app.use(postReturn);



app.get("/", (req, res) => {
    res.send("upload file")
})


const DB_URL = 'mongodb+srv://SLIIT:sliit123@sliit.9pcigl8.mongodb.net/onetel?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => console.log('DB connection error', err));


app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})