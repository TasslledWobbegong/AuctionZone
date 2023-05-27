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
import { connect } from react-redux;
import MarketContainer from './MarketContainer';
import * as actions from './actions/actions';


//-----mapStateToProps-----Connecting Redux state to component props.
const mapStateToProps = ({
    markets: {totalItems, totalUsers, itemList, lastItemId}
}) => ({
    totalItems,
    totalUsers,
    itemsList
})

//-----mapDispatchToProps-----Connecting Redux actions to component props.


//-----rendering a marketplace container.
const MainContainer = props => (
    <div className='container'>
        <div className='outerbox'>
            <h1 id='mainheader'>AuctionZone</h1>
            <MarketContainer/>
        </div>
    </div>
)

export default connect(mapStateToProps)(MainContainer);