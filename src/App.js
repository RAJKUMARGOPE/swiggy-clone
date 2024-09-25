import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

const App = () => (
    <>

        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </>
);

export default App;
