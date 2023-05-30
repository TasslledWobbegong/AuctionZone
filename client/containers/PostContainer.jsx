import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { useState, useEffect } from 'react';

/*
itemTitle
itemInitialPrice
itemBuyoutPrice
itemDescription
itemImage
*/

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
*/

const mapStateToProps = (state) => ({
  lastItemID: state.marketplace.lastItemID,
})

// Bring in dispatch from store
const mapDispatchToProps = dispatch => ({
  postItem : (item) => dispatch(actions.postItemActionCreator(item)),
})

const PostContainer = () => {
  const navigate = useNavigate();

  const [itemTitle, setItemTitle] = useState('');
  const [itemInitialPrice, setItemInitialPrice] = useState('');
  const [itemBuyoutPrice, setItemBuyoutPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemDeadline, setItemDeadline] = useState('');
  const [itemImage, setItemImage] = useState('');
  
// Item submission handler:
const handleSubmit = async (e) => {
  e.preventDefault();
  const newItem = {
    itemId: props.lastItemID,
    itemTitle,
    itemInitialPrice,
    itemCurrentPrice: itemInitialPrice,
    itemDeadline,
    itemBuyoutPrice,
    isBought: false,
    itemDescription,
    itemImage,
  }
  try {
    await props.postItem(newItem);
    navigate('/');
  } catch (err) {
    // handle error
  }
};

return (
  <div className='post'>
    <h1>Post an item!</h1>
    <div className='post-item'>
      
        <form className="postForm" onSubmit={handleSubmit}>
            <label className="postLabel">Item Title:</label>
            <input className="postInput" type='text' placeholder='Title...' onChange={
              (e) => setItemTitle(e.target.value)
            }></input>
            
            <label className="postLabel">Item URL:</label>
            <input className="postInput" type='text' placeholder='paste image url here...' onChange={
              (e) => setItemImage(e.target.value)
            }></input>
            
            <label className="postLabel">Item Description:</label>
            <input className="postInput" type='text' placeholder='Describe your item...' onChange={
              (e) => setItemDescription(e.target.value)
            }></input>
            
            <label className="postLabel">Starting Bid:</label>
            <input className="postInput" type='text'placeholder='Starting bid...' onChange={
              (e) => setItemInitialPrice(e.target.value)
            }></input>
            
            <label className="postLabel">Buyout Price (optional):</label>
            <input className="postInput" type='text' placeholder='Buyout Price...' onChange={
              (e) => setItemBuyoutPrice(e.target.value)
            }></input>

            <label className="postLabel">Auction Deadline:</label>
            <input className="postInput" type='date'onChange={
              (e) => setItemDeadline(e.target.value)
            }></input>
            <input className="submit" type="submit" value='Post Item'/>
        </form>
        
    </div>
    <Link to="/" className="links" id="homeLink">Cancel</Link>
  </div>
)
}

export default connect(mapStateToProps, mapDispatchToProps) (PostContainer);