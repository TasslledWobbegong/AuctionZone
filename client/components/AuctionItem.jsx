import React from 'react'

const AuctionItem = props => (
    <div className='auctionItem'>

        <div>
            <label className='title'>{props.itemTitle}</label>
        </div>
        <div>
            <img src={props.itemImage}></img>
        </div>
        <div className="price-deadline">
            <span className='price'>Price: {props.currPrice}</span>
            <span className='deadline'>Deadline: {props.itemDeadline}</span>
        </div>
        <div>
            <p className='buynow'>Buy It Now: {props.itemBuyout}</p>
        </div>
        <div>
            <p>description: {props.itemDes}</p>
        </div>
        <div className='allButtons'>
            <button onClick={() => props.increaseBid(props.itemID)}>Add Bid</button>
            <button onClick={() => props.increaseBid(props.itemID)}>Buyout</button>
            <button onClick={() => props.delete(props.itemID)}>Delete Item</button>
        </div>
    </div>

);
export default AuctionItem;

/*
itemTitle={item.itemTitle}
        initialPrice={item.itemInitialPrice}
        currPrice={item.itemCurrentPrice}
        itemDes={item.itemDescription}
        itemDeadline={item.itemDeadline}
        itemBuyout={item.itemBuyoutPrice}
        image={item.itemImage}
*/