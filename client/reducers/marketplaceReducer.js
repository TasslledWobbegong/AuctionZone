/**
 * ************************************
 *
 * @module  marketsReducer
 * @author Johanna Cameron
 * @date 5/29/22
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

// MODEL OF NEW ITEM OBJECT
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
    case types.MAKE_BID_SUCCESS: {
      const { itemID, itemCurrentPrice } = action.payload;
      const newItemList = state.itemList;
      const index = newItemList.findIndex(item => item.itemID === itemID);
      newItemList[index].itemCurrentPrice = itemCurrentPrice;
      return {
        ...state,
        itemList: newItemList,
      };
    }
    // change the property value of isBought in itemList element with corresponding itemID
    // later will be removed from itemList to only be displayed in user purchase history
    case types.BUYOUT_ITEM_SUCCESS: {
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
    case types.DELETE_ITEM_SUCCESS: {
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

    case types.POST_ITEM_SUCCESS: {
      // will create a new item in itemList saving user inputs as properties
      const { newItem } = action.payload;
      const newLastItemID = state.lastItemID + 1;
      const newItemList = state.itemList;
      newItemList.push(newItem);
      return {
        ...state,
        itemList: newItemList,
        lastItemID: newLastItemID,
      }
    }

    // will change value of itemList to received array from database, change totalItems ans lastItemID
    case types.GET_ITEMS_SUCCESS: {
      console.log('action console',action)
      const { itemList } = action.payload;
      console.log('retrieved itemList', itemList)
      return {
        ...state,
        itemList: itemList,
        totalItems: itemList.length,
        lastItemID: itemList[itemList.length-1].itemID,
      }
    }
    // Currently all error cases have the same functionality, but consider specific functionality per error
    case types.MAKE_BID_ERROR:  {
      console.log('MAKE_BID_ERROR');
      return state;
    }
    case types.BUYOUT_ITEM_ERROR: {
      console.log('BUYOUT_ITEM_ERROR');
      return state;
    }
    case types.DELETE_ITEM_ERROR: {
      console.log('DELETE_ITEM_ERROR');
      return state;
    }
    case types.POST_ITEM_ERROR: {
      console.log('POST_ITEM_ERROR');
      return state;
    }
    case types.GET_ITEMS_ERROR: {
      console.log('GET_ITEMS_ERROR');
      return state;
    }

    default: {
      return state;
    }
  }
};

export default marketplaceReducer;