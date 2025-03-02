import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const CatalogCard = ({ title, img, price }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg border"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
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

  useEffect(() => {
    axios.get('https://your-backend-api.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
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
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {filteredProducts.map((product, index) => (
          <CatalogCard key={index} title={product.title} img={product.img} price={product.price} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
