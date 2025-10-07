import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='mx-auto flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;