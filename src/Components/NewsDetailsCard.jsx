import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div>
            <img className='w-[90%] mt-8 height: auto mx-auto' src={news.image_url} alt="" />
            <h2 className='text-2xl mt-8 mb-8 font-semibold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn btn-secondary mt-4' to={`/category/${news.category_id}`}>Back to News Category</Link> 
        </div>
    );
};

export default NewsDetailsCard;