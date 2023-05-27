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





class MarketContainer extends Component {
    render() {
        return (
            <div className='innerbox'>
                <AuctionDisplay />
            </div>
        )
    }
}
export default MarketContainer;