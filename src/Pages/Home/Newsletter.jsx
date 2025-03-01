import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-blue-100 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-2">Get our latest news and special sales</h2>
        <p className="text-gray-600 text-sm">
          You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
        </p>
      </div>

      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full md:w-72 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg ml-3 hover:bg-blue-700 transition">
          Get
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
