import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
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