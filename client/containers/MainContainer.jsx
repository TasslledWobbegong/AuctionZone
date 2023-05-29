/**
 * ************************************
 *
 * @module  MainContainer
 * @author - Vander & Dean
 * @date - May 27, 2023
 * @description stateful component that renders MarketContainer
 *
 * ************************************
 */

//-----import required modules
import React from 'react';
import { connect } from 'react-redux';
import AuctionContainer from './AuctionContainer';
import * as actions from '../actions/actions';
import AuctionTotalDisplay from "../components/AuctionTotalDisplay"


//-----mapStateToProps-----Connecting Redux state to component props.
const mapStateToProps = state => ({
//     markets: {totalItems, totalUsers, itemList, lastItemId}
// }) => ({
//     totalItems,
//     totalUsers,
//     itemsList
  totalItems: state.marketplace.totalItems,
  totalUser: state.marketplace.totalUsers,
  itemsList: state.marketplace.itemList,  
})

//-----mapDispatchToProps-----Connecting Redux actions to component props.


//-----rendering a marketplace container.
const MainContainer = props => (
    <div className='container'>
        <div className='outerbox'>
            <h1 id='mainheader'>AuctionZone</h1>
            <AuctionTotalDisplay 
                totalItems={props.totalItems}
                totalUsers={props.totalUsers}
                itemsList={props.itemsList} 
                />
            <AuctionContainer/>
        </div>
    </div>
)

export default connect(mapStateToProps)(MainContainer);