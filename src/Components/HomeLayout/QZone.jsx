import React from 'react';
import Swimming from "../../assets/swimming.png"
import Class from "../../assets/class.png"
import PlayGround from "../../assets/playground.png"
const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5 '>Quiz Zone</h2>
            <div className="image space-y-5 ">
                <img src={Swimming} alt="" />
                <img src={Class} alt="" />
                <img src={PlayGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;