/**
 * ************************************
 *
 * @module  actions.js
 * @author Johanna Cameron
 * @date 5/27/2023
 * @description Action Creators
 *
 * ************************************
 */

// import action type constants
import axios from 'axios';
import * as types from '../constants/actionTypes';
// import { error } from 'console';

// make action creators

// change the property value of itemCurrentPrice in itemList element with corresponding itemID
export const makeBidActionCreator = (itemID, itemCurrentPrice) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch('/items', { itemID, itemCurrentPrice });
      console.log(response);
      dispatch({ 
        type: types.MAKE_BID_SUCCESS, 
        payload: { 
          itemID, 
          itemCurrentPrice 
        } 
    });
    } catch (error) {
      dispatch({ type: types.MAKE_BID_ERROR, payload: error.message });
    }
  }
};

// change the property value of isBought in itemList element with corresponding itemID
// later will be removed from itemList to only be displayed in user purchase history
export const buyoutItemActionCreator = (itemID, isBought) => {
    return async (dispatch) => {
      try {
        const response = await axios.patch('/items', { itemID, isBought });
        console.log(response);
        dispatch({ type: types.BUYOUT_ITEM_SUCCESS, payload: itemID });
      } catch (error) {
        dispatch({ type: types.BUYOUT_ITEM_ERROR, payload: error.message })
      }
    }
};

// will remove the element in itemList with corresponding itemID
export const deleteItemActionCreator = itemID => {
  return async (dispatch) => {
    try {
      const response = await axios.delete('/items', { itemID });
      console.log(response);
      dispatch({ type: types.DELETE_ITEM_SUCCESS, payload: itemID })
    } catch (error) {
      dispatch({ type: types.DELETE_ITEM_ERROR, payload: error.message })
    }
  }
};



// will create a new item in itemList saving user inputs as properties
export const postItemActionCreator = newItem => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/items', { newItem });
      console.log(response);
      dispatch({ type: types.POST_ITEM_SUCCESS, payload: newItem });
    } catch (error) {
      dispatch({ type: types.POST_ITEM_ERROR, payload: err.message })
    }
  } 
};