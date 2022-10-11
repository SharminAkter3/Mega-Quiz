import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';

export const ItemContext = createContext([]);
const Main = () => {
    const items = useLoaderData();

    return (
        <ItemContext.Provider value={items}>
            <Header></Header>
            <Outlet></Outlet>
        </ItemContext.Provider>
    );
};

export default Main;