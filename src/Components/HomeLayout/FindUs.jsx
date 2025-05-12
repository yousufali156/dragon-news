import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { FaFacebook,  FaX } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';


const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical space-y-4 w-full">
                <button className="btn bg-base-100 justify-start join-item"> <FaLinkedin size={24} /> Linkdin</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaFacebook size={24} /> Facebook</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaX size={24} /> X</button>
                <button className="btn bg-base-100 justify-start join-item"> <ImInstagram size={24} />Instagram</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaGithub size={24} /> GitHub</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaYoutube size={24}  /> Youtube</button>
            </div>
        </div>
    );
};

export default FindUs;