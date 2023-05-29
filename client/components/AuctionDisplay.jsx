

import React from 'react';
import AuctionItem from './AuctionItem.jsx';
import { useEffect, useState } from 'react';

const AuctionDisplay = (props) => {
    // const [items, setItems] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await props.getItems();
                // setItems(data);
            } catch (error) {
                // Handle error if needed
            }
        };

        fetchData();
    }, []);

    const buyoutHandler = async (itemID) => {
        try {
            await props.buyout(itemID);
        } catch (error) {
            // Handle error
        }
    }

    const deleteHandler = async () => {
        try {
            await props.delete(itemID);
        } catch (error) {
            // Handle error
        }
    }

    const itemMaker = (item, index, props) => (
        <AuctionItem
            {...item}
            increaseBid={() => props.increaseBid(item.itemID)}
            buyout={() => buyoutHandler(item.itemID)}
            delete={() => deleteHandler(item.itemID)}
            key={index}
            itemTitle={item.itemTitle}
            initialPrice={item.itemInitialPrice}
            currPrice={item.itemCurrentPrice}
            itemDes={item.itemDescription}
            itemDeadline={item.itemDeadline}
            itemBuyout={item.itemBuyoutPrice}
            itemImage={item.itemImage}
        />
    );

    // console.log('items: ', items)
    return (
        <div className='displayBox'>
            <h4>Auction Items</h4>
            <div className='allAuctionItems'>
                {props.itemList.map((item, index) => itemMaker(item, index, props))}
            </div>
        </div>
    );

};

export default AuctionDisplay;