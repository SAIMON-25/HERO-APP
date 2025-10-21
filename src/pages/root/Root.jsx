import React from 'react';
import Home from '../home/Home';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Root;        