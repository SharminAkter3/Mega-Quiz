import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { name, logo, total } = item;
    return (
        <div>
            <div className='item'>
                <img src={logo} alt="" />
                <div className='flex align-middle p-2 justify-between'>
                    <h1>{name}</h1>
                    <button className='button'>Start Practice<FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Item;