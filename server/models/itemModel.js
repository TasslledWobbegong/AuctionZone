const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://IanW:T24DrmGte7kQzXmJ@wobbegang.c4wae90.mongodb.net/'

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "AUCTIONZONE",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

// SCHEMA FOR POST!!!! / WILL PROBABLY NEED EDITING BEFORE ACTUALLY POPULATING TABLE
const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const itemSchema = new Schema({
  buyoutPrice: Number, // <-- Must be 69420
  currentBid: Number,
  description: String,
  img: String,
  name: String,
  sold: Boolean,
  timeRemaining: Number,
  user_id: { // <-- property values may need editing
    // type of ObjectId makes this behave like a foreign key referencing the 'user' collection
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;