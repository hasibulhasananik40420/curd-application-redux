import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* 9 mit */}
        </div>
    );
};

export default main;