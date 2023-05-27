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
router.post('/items', async (req, res, next) => {
// .save method:
  // Deconstruct variables from req.body
  

  // Make new item object

  // Use model create method to create document in db

// .create method:

  try { 
  console.log('in post Items router');
  const allPosts = await Item.find({});
  console.log(allPosts)
  // res.locals.items = 2;
  res.status(200).json(allPosts);
  } catch(error) {
    next(new Error("ERROR IN GETALLITEMS", { cause: error }))
  } 
});

// Patch request to update bid amount
// Patch request to update bought status
// Delete an item

// User:
// Get user data 
// Post user data

module.exports = router;