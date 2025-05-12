import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-4 space-x-4'>
                <button className='btn btn-outline w-full'> <FcGoogle size={24} /> Login  With Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={24} /> Login  With Github</button>
                <button className='btn btn-outline w-full'><FaFacebook size={24} /> Login  With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;