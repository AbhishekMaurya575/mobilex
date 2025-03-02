import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const CollectionCard = ({ title, img }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-contain group-hover:opacity-75 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold text-center tracking-wider">{title}</h3>
      </div>
    </motion.div>
  );
};

const Collections = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products from backend
    axios.get('https://your-backend-api.com/products')
      .then(response => {
        setProducts(response.data);
        // Extract unique categories from the fetched products
        const uniqueCategories = ['All', ...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products');
        setLoading(false);
        console.error('Error fetching products:', error);
      });
  }, []);

  if (loading) return <div className="text-center text-xl">Loading products...</div>;
  if (error) return <div className="text-center text-xl text-red-500">{error}</div>;

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Collections</h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${selectedCategory === category ? 'bg-black' : 'bg-gray-600 hover:bg-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {filteredProducts.map((product) => (
          <CollectionCard key={product.id} title={product.title} img={product.img} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
