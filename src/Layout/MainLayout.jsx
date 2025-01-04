import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';


const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-svh'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;