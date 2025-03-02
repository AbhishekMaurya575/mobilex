import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Trash2 } from 'lucide-react';
import axios from 'axios';

const WishlistCard = ({ title, price, img }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <img src={img} alt={title} className="w-40 h-40 object-contain mb-4" />
      <h3 className="text-xl font-bold text-center text-black mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-4">{price}</p>
      <div className="flex gap-4">
        <button className="bg-red-500 text-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-red-600 transition-all">
          <Heart className="w-5 h-5" /> Add to Cart
        </button>
        <button className="bg-gray-300 text-black rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-400 transition-all">
          <Trash2 className="w-5 h-5" /> Remove
        </button>
      </div>
    </motion.div>
  );
};

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/wishlist'); // Replace with your backend API URL
        setWishlistItems(response.data);
      } catch (error) {
        console.error('Error fetching wishlist items:', error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Wishlist</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5">
        {wishlistItems.map((item, index) => (
          <WishlistCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
