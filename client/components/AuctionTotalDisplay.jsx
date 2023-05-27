import React from 'react'


const AuctionTotalDisplay = (props) => (
    <div classname="displayBox">
        <h4>Auction Items for Sale:{props.totalItems}</h4>
        <h4>Buyers online:{props.totalUsers}</h4>
    </div>
);


export default AuctionTotalDisplay;

