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
import * as types from '../constants/actionTypes';

// make action creators

// change the property value of itemCurrentPrice in itemList element with corresponding itemID
export const makeBidActionCreator = (itemID, newBid) => (
  {
    type: types.MAKE_BID,
    payload: {
        newBid,
        itemID,
      },
  }
);

// change the property value of isBought in itemList element with corresponding itemID
// later will be removed from itemList to only be displayed in user purchase history
export const buyoutItemActionCreator = (itemID, isBought) => (
    {
      type: types.BUYOUT_ITEM,
      payload: {
        itemID,
        isBought,
      },
    }
);

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
)