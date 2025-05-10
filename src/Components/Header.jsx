import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='mt-10 flex justify-center flex-col items-center gap-4'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>

            <p>{format(new Date(), "EEEE-MM-MMMM-yyyy   hh:mm  aaa")}</p>

            <div className='flex mx-auto w-11/12 items-center gap-5 bs-base-200 p-3'>
                <p className='text-base-100 bg-secondary px-3 py-2 text-white text-secondary'>Latest</p>
                <Marquee className='flex gap-5 font-semibold' pauseOnHover={true}>
                    <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur  distinctio impedit atque dicta? A?</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium delectus ab sunt consequuntur reiciendis nihil vitae laudantium voluptate quisquam.</p>
                </Marquee>

            </div>
        </div>
    );
};

export default Header;