import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBigRightIcon } from 'lucide-react'; // Assuming you're using this for the button
import macDesktop from '../../assets/41+3qs+lemL._SY300_SX300_.jpg'; // Add correct image path
import smartphone from '../../assets/150376-v7-motorola-edge-50-pro-5g-mobile-phone-large-1.png'; // Add correct image path
import computers from '../../assets/ABUIABACGAAgo_y5rwYoiLqZ8wUwoAY4oAY-removebg-preview.png'; // Add correct image path

const ProductBannerSection = () => {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate('/result', { state: { category } });
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-10 px-5 lg:px-0 py-16 lg:py-0 bg-[#f5f5f7]">
      {/* Mac Desktops */}
      <div className="flex flex-col items-start bg-white rounded-2xl lg:rounded-none p-10 shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => navigateToCategory('Mac Desktops')}>
        <h2 className="text-5xl font-bold text-gray-800 mb-3">Mac Desktops</h2>
        <p className="text-gray-500 mb-5 text-2xl">Quality products!</p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-500 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
          <ArrowBigRightIcon size={24} />
        </button>
        <div className="flex justify-center w-full">
          <img src={macDesktop} alt="Mac Desktops" className="mt-5 w-full object-contain" loading="lazy" />
        </div>
      </div>

      {/* Big Sale */}
      <div className="flex flex-col justify-center items-center text-center lg:rounded-none bg-blue-600 text-white rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => navigateToCategory('Big Sale')}>
        <p className="uppercase text-sm tracking-wider">Up to 30%</p>
        <h2 className="text-5xl font-extrabold mb-3">BIG SALE</h2>
        <p className="mb-3 text-lg">Get new smartphone!</p>
        <div className="bg-red-500 text-white px-5 py-2 rounded-full mb-5 text-sm font-semibold tracking-wider">FREE SHIPPING</div>
        <div className="flex justify-center w-full">
          <img src={smartphone} alt="Smartphone" className="mt-5 w-3/4 object-contain" loading="lazy" />
        </div>
      </div>

      {/* Computers */}
      <div className="flex flex-col items-start bg-white rounded-2xl lg:rounded-none p-10 shadow-xl hover:shadow-2xl transition-all duration-300" onClick={() => navigateToCategory('Computers')}>
        <h2 className="text-5xl font-bold text-gray-800 mb-3">Computers</h2>
        <p className="text-gray-500 mb-5 text-2xl">Limited time offer!</p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-500 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
          <ArrowBigRightIcon size={24} />
        </button>
        <div className="flex justify-center w-full">
          <img src={computers} alt="Computers" className="mt-5 w-full object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default ProductBannerSection;
