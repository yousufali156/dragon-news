import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';




const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
       <nav>
        <Navbar></Navbar>
       </nav>
            <main>
                <button className='btn btn-primary'>Click me</button>

                <section className="leftNav">

                </section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="rightNav">
                    
                </section>
            </main>
        </div>
    );
};

export default HomeLayouts;