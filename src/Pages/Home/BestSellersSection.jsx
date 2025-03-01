import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import Product1 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product2 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product3 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product4 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';
import Product5 from '../../assets/Samsung-Galaxy-Book3-Pro-360-1.png';

const bestSellers = [
  { img: Product1, name: 'Boost Up Special Edition Wireless', price: '$260.00' },
  { img: Product2, name: 'Noise Cancelling Headphones', price: '$90.00 - $360.00' },
  { img: Product3, name: 'Wireless Bluetooth Speaker', price: '$90.00' },
  { img: Product4, name: 'Boost Up Wireless Charging', price: '$200.00' },
  { img: Product5, name: 'Apple iPad Air 2', price: '$87.00 - $142.00' }
];

const BestSellersSection = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-10">Shop Best Sellers</h2>
      <div className="container mx-auto px-5">
        <Slider {...settings}>
          {bestSellers.map((item, index) => (
            <div key={index} className="text-center px-4">
              <img src={item.img} alt={item.name} className="mx-auto w-40 h-40 object-contain hover:scale-110 transition-transform duration-300" />
              <h3 className="mt-4 text-gray-700 text-lg">{item.name}</h3>
              <p className="text-blue-600 text-xl font-semibold">{item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellersSection;
