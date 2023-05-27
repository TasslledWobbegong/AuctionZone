

import React from 'react';
import AuctionItem from './AuctionItem.jsx';




const itemMaker = (item, index, props) => (
    <AuctionItem
        {...item}
        increaseBid={() => props.increaseBid(item.itemID)}
        buyout={() => props.buyout(item.itemID)}
        delete={() => props.delete(item.itemID)}
        key={index}
        itemTitle={item.itemTitle}
        initialPrice={item.itemInitialPrice}
        currPrice={item.itemCurrentPrice}
        itemDes={item.itemDescription}
        itemDeadline={item.itemDeadline}
        itemBuyout={item.itemBuyoutPrice}
        image={item.itemImage}
    />
)


const AuctionDisplay = props => {
    return (
        <div className='displayBox'>
            <h4>Auction Items</h4>
            <div className='allAuctionItems'>
                {props.itemList.map((item, index) => itemMaker(item, index, props))}
            </div>
        </div>
    )

}

export default AuctionDisplay;