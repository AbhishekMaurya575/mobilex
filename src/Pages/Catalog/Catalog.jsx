import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import axios from 'axios';

const CatalogCard = ({ id, title, img, price }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Get the saved wishlist from localStorage (if available)
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return savedWishlist.includes(id);
  });

  const toggleWishlist = () => {
    setWishlist(!wishlist);
    // Fetch the current wishlist from localStorage
    let savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist) {
      savedWishlist.push(id);
      alert(`${title} added to wishlist`);
    } else {
      savedWishlist = savedWishlist.filter((itemId) => itemId !== id);
      alert(`${title} removed from wishlist`);
    }
    localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg border pointer-events-none"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
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
        <p className="text-gray-600">Rs {price}</p>
      </div>
    </motion.div>
  );
};

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://your-backend-api.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products');
        setLoading(false);
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Product Catalog</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['All', 'Accessories', 'Bestseller', 'Cameras', 'Smartphones', 'Laptops', 'Gaming'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${selectedCategory === category ? 'bg-black' : 'bg-gray-600 hover:bg-black'}`}
          >
            {category}
          </button>
        ))}
      </div>
      {loading && <div className="text-center text-xl">Loading products...</div>}
      {error && <div className="text-center text-xl text-red-500">{error}</div>}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {filteredProducts.map(product => (
          <CatalogCard
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
