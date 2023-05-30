const express = require("express");
const router = express.Router();
const Item = require('../models/itemModel.js')




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

/*
  SCHEMA:

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
  const {_id, itemID, itemTitle, itemInitialPrice, itemCurrentPrice, itemDescription, itemDeadline, itemBuyoutPrice, isBought,itemImage } = req.body;
  console.log(req.body)
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
router.patch('/items', async (req, res, next) => { 

    const {_id, itemID, itemCurrentPrice, isBought} = req.body; // *** Consider pulling out buyout price to handle currentPrice > buyouyPrice logic?
  
    try { 
    console.log('in post Items router');
    const updated = await Item.updateOne({ itemID}, {itemCurrentPrice, isBought});
    console.log(updated)
    // res.locals.items = 2;
    res.status(200).json(updated);
    } catch(error) {
      next(new Error("ERROR IN PATCH ITEM", { cause: error }))
    } 
  });

// Delete an item
router.delete('/items', async (req, res, next) => {

    const {itemID} = req.body;
  
    try { 
    console.log('in post Items router');
    const deleted = await Item.deleteOne({itemID});
    res.status(200).json(deleted);
    } catch(error) {
      next(new Error("ERROR IN POST ITEM", { cause: error }))
    } 
  });

// User:
// Get user data 
// Post user data

module.exports = router;