import React from 'react';
import tabletImage from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';

const Trending = () => {
    return (
        <section className="w-full min-h-full bg-gradient-to-br from-[#0e0e24] to-[#1a1a33] flex flex-col md:flex-row items-center justify-center px-10 py-16 gap-10 text-white">
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <img 
              src={tabletImage} 
              alt="Top Rated Tablets" 
              className="max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-right flex flex-col justify-center items-end order-1 md:order-2">
            <p className="text-sm tracking-widest text-blue-400 mb-2">ALL NEW TREND TABLETS</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Top rated tablets!</h2>
            <p className="text-base sm:text-lg mb-6">Doing it all, in all new ways.</p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-110">
              SHOP NOW
            </button>
          </div>
        </section>
    );
}

export default Trending;
