import React from 'react';
import Header from '../Components/Header';
import { Outlet, useNavigation } from 'react-router';

import Navbar from '../Components/Navbar';
import LatestNews from '../Components/LatestNews';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';


const HomeLayouts = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                   {state == "loading"? <Loading/> :  <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;