import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';
import './Topics.css'

const Topics = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div className='item-container'>
            {
                items.data.map(item => <Item
                    key={item.id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Topics;