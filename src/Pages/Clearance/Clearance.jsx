import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ClearanceImg1 from '../../assets/150376-v7-motorola-edge-50-pro-5g-mobile-phone-large-1.png';
import ClearanceImg2 from '../../assets/istockphoto-1373017594-612x612.jpg';
import ClearanceImg3 from '../../assets/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.webp';

const clearanceItems = [
  { id: 1, title: 'Smartphone - 30% Off', img: ClearanceImg1, price: 'Rs 14,000' },
  { id: 2, title: 'Headphones - 40% Off', img: ClearanceImg2, price: 'Rs 2,500' },
  { id: 3, title: 'Gaming Mouse - 20% Off', img: ClearanceImg3, price: 'Rs 1,800' },
  { id: 4, title: 'Wireless Earbuds - 35% Off', img: ClearanceImg2, price: 'Rs 3,200' },
  { id: 5, title: 'Laptop Bag - 50% Off', img: ClearanceImg1, price: 'Rs 1,200' },
  { id: 6, title: 'Camera Tripod - 25% Off', img: ClearanceImg3, price: 'Rs 3,000' },
];

const ClearanceCard = ({ id, title, img, price }) => {
  const [wishlist, setWishlist] = useState(false);
  const navigate = useNavigate();

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setWishlist(!wishlist);
    if (!wishlist) {
      alert(`${title} added to wishlist`);
    } else {
      alert(`${title} removed from wishlist`);
    }
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    alert(`${title} added to cart`);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    alert(`Proceed to buy ${title}`);
    navigate(`/checkout/${id}`);
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group shadow-lg border cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      onClick={handleProductClick}
    >
      <button
        className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-all ${wishlist ? 'text-red-500' : 'text-gray-500'} pointer-events-auto`}
        onClick={toggleWishlist}
      >
        <Heart size={20} className={wishlist ? 'text-red-500' : 'text-gray-500'} />
      </button>
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-contain group-hover:opacity-75 transition-opacity duration-300"
      />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-red-500 font-semibold">{price}</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all" onClick={handleAddToCart}>Add to Cart</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
};

const Clearance = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Clearance Sale 🔥</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {clearanceItems.map((item) => (
          <ClearanceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Clearance;
