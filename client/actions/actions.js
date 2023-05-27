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
import { error } from 'console';

// make action creators

// change the property value of itemCurrentPrice in itemList element with corresponding itemID
export const makeBidActionCreator = (itemID, itemCurrentPrice) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch('/items', { itemID, itemCurrentPrice });
      const updatedItem = response.data;
      dispatch({ 
        type: types.MAKE_BID_SUCCESS, 
        payload: { 
          itemID, 
          updatedItem 
        } 
    });
    } catch (err) {
      dispatch({ type: types.MAKE_BID_ERROR, payload: error.message })
    }
  }
}

// change the property value of isBought in itemList element with corresponding itemID
// later will be removed from itemList to only be displayed in user purchase history
export const buyoutItemActionCreator = (itemID) => {
    return async (dispatch) => {
        try {
          const response = await axios.patch('/items', { itemID, isBought });
          const updatedItem = response.data;
          dispatch({ type: types.MAKE_BID_SUCCESS, payload: updatedItem });
        } catch (err) {
          dispatch({ type: types.MAKE_BID_ERROR, payload: error.message })
        }
    }
};

// will remove the element in itemList with corresponding itemID
export const deleteItemActionCreator = itemID => (
    {
        type: types.DELETE_ITEM,
        payload: itemID,
    }
);

// will create a new item in itemList saving user inputs as properties
export const postItemActionCreator = newItem => (
    {
        type: types.POST_ITEM,
        payload: newItem,
    }
);