import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { id, name, logo, total } = item;
    const navigate = useNavigate();
    const questionDetails = () => {
        navigate(`/quiz/${id}`);
    }
    return (
        <div>
            <div className='item'>
                <img src={logo} alt="" />
                <div className='flex align-middle p-2 justify-between'>
                    <h1>{name}</h1>
                    <button onClick={questionDetails} className='button'>Start Practice<FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>

    );
};

export default Item;