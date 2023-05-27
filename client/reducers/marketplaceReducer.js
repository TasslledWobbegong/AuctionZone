/**
 * ************************************
 *
 * @module  marketsReducer
 * @author Johanna Cameron
 * @date 5/27/22
 * @description reducer for marketplaceData
 *
 * ************************************
 */

// import action types
import * as types from '../constants/actionTypes';

// initialize state

const initialState = {
    totalItems:0,
    totalUsers:0,
    itemList:[],
    lastItemID:1000,
}

// newItem = {
//     itemID: 1000,
//     itemTitle: 'title',
//     itemInitialPrice: number,
//     itemCurrentPrice: number,
//     itemDescription: 'description',
//     itemDeadline: date/time,
//     itemBuyoutPrice: number,
//     isBought: boolean,
//     itemImage: stringURL,
//   }

// create marketplaceReducer

const marketplaceReducer = (state = initialState, action) => {

  switch (action.type) {
    // change the property value of itemCurrentPrice in itemList element with corresponding itemID
    case types.MAKE_BID: {
      const { itemID, newBid } = action.payload;
      const newItemList = state.itemList;
      const index = newItemList.findIndex(item => item.itemID === itemID);
      newItemList[index].itemCurrentPrice = newBid;
      return {
        ...state,
        itemList: newItemList,
      };
    }
    // change the property value of isBought in itemList element with corresponding itemID
    case types.BUYOUT_ITEM: {
      const { itemID } = action.payload;
      const newItemList = state.itemList;
      const index = newItemList.findIndex(item => item.itemID === itemID);
      newItemList[index].isBought = true;
      return {
        ...state,
        itemList: newItemList,
      };
    }
    // will remove the element in itemList with corresponding itemID
    case types.DELETE_ITEM: {
      const { itemID } = action.payload;
      const newItemList = state.itemList;
      const index = newItemList.findIndex(item => item.itemID === itemID);
      newItemList.splice(index, 1);
      newTotalItems = state.totalItems - 1;
      return {
       ...state,
       itemList: newItemList,
       totalItems: newTotalItems,
      };
    }

    case types.POST_ITEM: {
      // will create a new item in itemList saving user inputs as properties
      const { newItem } = action.payload;
      newItem.itemID = state.lastItemID;
      const newLastItemID = state.lastItemID + 1;
      const newItemList = state.itemList;
      newItemList.push(newItem);

      return {
        ...state,
        itemList: newItemList,
        lastItemID: newLastItemID,
      }
    }

    default: {
      return state;
    }
  }
};

export default marketplaceReducer;