import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center p-5 m-5'>
                <h1 className='text-6xl'>Welcome To My <p className='text-indigo-500 text-6xl'>Mega Quiz</p>Website</h1>
                <p className='text-3xl'>You can test your HTML skills with Mega Quiz.The test contains 40 questions and there is no time limit.<br />  The test is not official, it's just a nice way to see how much you know, or don't know, about HTML.
                </p>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Main;