import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 text-white text-secondary'>Latest</p>
            <Marquee className='flex gap-5 font-semibold' pauseOnHover={true}>
                <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur  distinctio impedit atque dicta? A?</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium delectus ab sunt consequuntur reiciendis nihil vitae laudantium voluptate quisquam.</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;