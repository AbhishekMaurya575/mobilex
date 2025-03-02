import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Heart } from 'lucide-react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Product1 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product2 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product3 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product4 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product5 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';

const bestSellers = [
  { id: 11, img: Product1, name: 'Boost Up Special Edition Wireless', price: 'Rs 1260.00' },
  { id: 12, img: Product2, name: 'Noise Cancelling Headphones', price: 'Rs 1900.00 - Rs1360.00' },
  { id: 13, img: Product3, name: 'Wireless Bluetooth Speaker', price: 'Rs1990.00' },
  { id: 14, img: Product4, name: 'Boost Up Wireless Charging', price: 'Rs1200.00' },
  { id: 15, img: Product5, name: 'Apple iPad Air 2', price: 'Rs187.00 - Rs1142.00' }
];

const BestSellersSection = () => {
  const [wishlist, setWishlist] = useState(Array(bestSellers.length).fill(false));
  const navigate = useNavigate();

  const toggleWishlist = (index) => {
    const newWishlist = [...wishlist];
    newWishlist[index] = !newWishlist[index];
    setWishlist(newWishlist);
    alert(`${bestSellers[index].name} ${newWishlist[index] ? 'added to' : 'removed from'} wishlist`);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white overflow-hidden sm:overflow-auto">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-10">Shop Best Sellers</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {bestSellers.map((item, index) => (
            <div key={index} className="text-center px-4 relative cursor-pointer" onClick={() => handleProductClick(item)}>
              <button
                className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-all ${wishlist[index] ? 'text-red-500' : 'text-gray-500'}`}
                onClick={(e) => { e.stopPropagation(); toggleWishlist(index); }}
              >
                <Heart size={20} className={wishlist[index] ? 'text-red-500' : 'text-gray-500'} />
              </button>
              <img 
                src={item.img} 
                alt={item.name} 
                className="mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain hover:scale-110 transition-transform duration-300" 
              />
              <h3 className="mt-4 text-gray-700 text-lg md:text-xl">{item.name}</h3>
              <p className="text-blue-600 text-xl font-semibold md:text-2xl">{item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellersSection;
