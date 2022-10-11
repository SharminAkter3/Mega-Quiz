import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';
import './Topics.css'

const Topics = () => {
    const items = useLoaderData();
    // console.log(items);
    return (
        <div>
            <div className='text-center p-5 m-5'>
                <h1 className='text-4xl font-bold'>Welcome To My <small className='text-indigo-500 font-bold text-4xl'>Mega Quiz</small> Website</h1>
                <p className='text-xl mt-2'>You can test your web development skills with Mega Quiz. The test contains 40 questions and there is no time limit.<br />  The test is not official, it's just a nice way to see how much you know, or don't know, about web development.
                </p>
            </div>
            <div className='item-container'>
                {
                    items.data.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Topics;