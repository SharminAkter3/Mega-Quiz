import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    // const [open, setOpen] = useState(false);
    return (
        <nav className='md:flex header'>
            <div>
                <h1>MEGA QUIZ</h1>
            </div>
            <div>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;