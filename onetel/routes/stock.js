const router = require("express").Router();
const Items = require("../models/stock");

router.route("/items/create").post(async (req, res) => {
  const { itemName, itemDescrip, itemCategory, status } =
    req.body;

  const itemPrice = Number(req.body.itemPrice);

  const qty = Number(req.body.qty);

  const newItems = new Items({
    itemName,
    itemDescrip,
    itemCategory,
    status,
    itemPrice,
    qty,
  }); // create a new object using database schema

  const isAvailable = await Items.findOne({
    //check the availability of saving data
    itemName: { $regex: new RegExp(itemName, "i") },
  });

  if (isAvailable) {
    return res
      .status(401)
      .json({ error: "Item already added, Plz add a new product 🧐" });
  }

  await newItems
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error })); //else save to the db
});

router.route("/items").get(async (req, res) => {
  //route for fetching all the data
  await Items.find()
    .then((items) => res.json(items))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/get/:id").get(async (req, res) => {
  //route for getting a relavant document using id
  const { id } = req.params;

  await Items.findById(id) //find by the document by id
    .then((items) => res.json(items))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/delete/:id").delete(async (req, res) => {
  //route for deleting a relavant document using id
  const { id } = req.params;

  await Items.findByIdAndDelete(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

router.route("/update/:id").put(async (req, res) => {
  //route for updating a relavant document using id
  //backend route for updating relavant data and passing back
  const { id } = req.params;
  const {
    itemName,
    itemDescrip,
    itemCategory,
    status,
    itemPrice,
    qty,
  } = req.body;

  await Items.findByIdAndUpdate(id, {
    itemName,
    itemDescrip,
    itemCategory,
    status,
    itemPrice,
    qty,
  })
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, error: error }));
});

module.exports = router;