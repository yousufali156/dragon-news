import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='mt-10 flex justify-center flex-col items-center gap-4'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date (), "EEEE-MM-MMMM-yyyy   hh:mm  aaa")}</p>           

        </div>
    );
};

export default Header;