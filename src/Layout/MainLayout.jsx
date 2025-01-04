import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;