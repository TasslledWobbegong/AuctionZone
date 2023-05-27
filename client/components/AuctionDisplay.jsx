

import React from 'react';
import AuctionItem from './AuctionItem.jsx';

const AuctionDisplay = props => {
return (
    <div className='displayBox'>
        <h4>Auction Items</h4>
        <AuctionItem/>
    </div>
)

}

export default AuctionDisplay;