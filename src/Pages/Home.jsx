import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Informed, Stay Ahead</h2>
          <p className="text-lg mb-6">Get the latest updates from around the world at your fingertips.</p>
          <Link
            to="/LatestNews"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full hover:bg-indigo-100 transition"
          >
            Read Latest News
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News Cards */}
        <section className="lg:col-span-3 space-y-6">
  {[...Array(10)].map((_, id) => (
    <article
      key={id}
      className="bg-white shadow rounded-xl overflow-hidden flex flex-col md:flex-row"
    >
      <img
        src={`https://source.unsplash.com/random/400x250?sig=${id}&news`}
        alt={`News ${id + 1}`}
        className="w-full md:w-1/3 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2">Sample News Headline {id + 1}</h3>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae.
        </p>
        <Link
          to={`/news/${id + 1}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  ))}
</section>


       
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DragonNews. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
