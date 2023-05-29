/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author - Vander & Dean
 * @date - May 27, 2023
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

//-----import required modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

//import child component
import AuctionDisplay from '../components/AuctionDisplay.jsx'

//-----mapStateToProps-----Connecting Redux state to component props.
const mapStateToProps = (state) => ({
    itemList: state.marketplace.itemList,
})

const mapDispatchToProps = dispatch => ({
    increaseBid: (itemID) => dispatch(actions.makeBidActionCreator(itemID)),
    buyout: (itemID) => dispatch(actions.buyoutItemActionCreator(itemID)),
    delete: (itemID) => dispatch(actions.deleteItemActionCreator(itemID))
})

//-----rendering a Auction container.
const AuctionContainer = (props) => (
    <div className='innerbox'>
                <AuctionDisplay 
                itemList={props.itemList}
                increaseBid={props.increaseBid}
                buyout={props.buyout}
                delete={props.delete}
                />
    </div>

)


export default connect(mapStateToProps, mapDispatchToProps) (AuctionContainer);