import { FaEye, FaRegShareSquare, FaStar } from 'react-icons/fa';
import { CiBookmarkCheck } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        author,
        total_view,
        rating,
        published_date,
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4 bg-base-300  space-x-5 p-4">

                <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={author.img} alt={author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold space-x-5">{author.name}</h2>
                        <p className="text-xs text-gray-500 space-x-5">{new Date(author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="text-gray-500 space-x-5 ">
                    <button className="btn btn-sm btn-circle btn-ghost">
                        <CiBookmarkCheck size={24} />

                    </button>
                    <button className="btn btn-sm btn-circle btn-ghost">

                        <FaRegShareSquare size={24} />
                    </button>
                </div>
            </div>

            <h2 className="card-title text-lg mb-3">{title}</h2>

            <figure>
                <img src={image_url} alt={title} className="rounded-md w-full h-auto" />
            </figure>

            <p className="text-sm text-gray-700 mt-3">
                {details.length > 200 ? details.slice(0, 200) + '...' : details}
                <span className="text-blue-500 font-medium ml-1 cursor-pointer">Read More</span>
            </p>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-500">
                    {[...Array(Math.round(rating.number))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-1 text-gray-800 font-medium">{rating.number}</span>
                </div>

                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
