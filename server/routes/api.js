const express = require("express");
const router = express.Router();
const Item = require('../models/itemModel.js')


// PRIORITY REQUESTS TO MAKE:
// Items:

// localhost:3000/api/items/
// localhost:3000/api/users/

// Get all items 
router.get('/items', async (req, res, next) => {
  
  try { 
  console.log('in get Items router');
  const allPosts = await Item.find({});
  console.log(allPosts)
  // res.locals.items = 2;
  res.status(200).json(allPosts);
  } catch(error) {
    next(new Error("ERROR IN GETALLITEMS", { cause: error }))
  } 
});

// Get one item
// Post an item

/*
  itemID: Number,
  itemTitle: String,
  itemInitialPrice: Number,
  itemCurrentPrice: Number,
  itemDescription: String,
  itemDeadline: Number, // <-- **** Needs to be changed to timestamp / date time somehow
  itemBuyoutPrice: Number,
  isBought: Boolean,
  itemImage: String,
  user_id: { // <-- property values may need editing
    // type of ObjectId makes this behave like a foreign key referencing the 'user' collection
    type: Schema.Types.ObjectId,
    ref: "user",
  },
*/

router.post('/items', async (req, res, next) => {
// .save method:
  // Deconstruct variables from req.body
  const {_id, itemID, itemTitle, itemInitialPrice, itemCurrentPrice, itemDescription, itemDeadline, itemBuyoutPrice, isBought,itemImage } = req.body;


  // Use model create method to create document in db

// .create method:

  try { 
  console.log('in post Items router');
  const newPost = await Item.create({_id, itemID, itemTitle, itemInitialPrice, itemCurrentPrice, itemDescription, itemDeadline, itemBuyoutPrice, isBought,itemImage});
  console.log(newPost)
  // res.locals.items = 2;
  res.status(200).json(newPost);
  } catch(error) {
    next(new Error("ERROR IN POST ITEM", { cause: error }))
  } 
});

// Patch request to update bid amount

// Patch request to update bought status

// Delete an item
router.delete('/items', async (req, res, next) => {
  // .save method:
    // Deconstruct variables from req.body
    const {itemID} = req.body;
  
  
    // Use model create method to create document in db
  
  // .create method:
  
    try { 
    console.log('in post Items router');
    const deleted = await Item.deleteOne({itemID});
    console.log(deleted)
    // res.locals.items = 2;
    res.status(200).json(deleted);
    } catch(error) {
      next(new Error("ERROR IN POST ITEM", { cause: error }))
    } 
  });

// User:
// Get user data 
// Post user data

module.exports = router;