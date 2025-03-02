import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import HeadphoneImage from '../../assets/istockphoto-1373017594-612x612.jpg';
import WatchImage from '../../assets/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.png';

const products = [
  { id: 16, img: HeadphoneImage, name: 'Great Headphones', description: 'Find your sound!' },
  { id: 17, img: WatchImage, name: 'Smartwatch', description: 'Smartwatch for you!' }
];

const Bestoneforyou = () => {
  const [wishlist, setWishlist] = useState(Array(products.length).fill(false));
  const navigate = useNavigate();

  const toggleWishlist = (index, e) => {
    e.stopPropagation();
    const newWishlist = [...wishlist];
    newWishlist[index] = !newWishlist[index];
    setWishlist(newWishlist);
    alert(`${products[index].name} Rs{newWishlist[index] ? 'added to' : 'removed from'} wishlist`);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      {products.map((product, index) => (
        <div key={product.id} className="relative rounded-none overflow-hidden cursor-pointer" onClick={() => handleProductClick(product)}>
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start p-6 sm:p-10">
            <div className="absolute top-4 left-4 w-[80%] md:w-[40%]">
              <h3 className="uppercase text-blue-700 font-bold text-lg sm:text-xl">{product.name}</h3>
              <h2 className="text-cyan-900 font-bold mb-4 sm:mb-6 text-4xl sm:text-6xl">{product.description}</h2>
              <button className="bg-blue-600 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-blue-700 transition">Shop Now</button>
            </div>
            <button
              className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-all ${wishlist[index] ? 'text-red-500' : 'text-gray-500'}`}
              onClick={(e) => toggleWishlist(index, e)}
            >
              <Heart size={20} className={wishlist[index] ? 'text-red-500' : 'text-gray-500'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bestoneforyou;
