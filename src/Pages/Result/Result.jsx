import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import axios from 'axios';

const Result = () => {
  const location = useLocation();
  const { category, search } = location.state || {};
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return savedWishlist;
  });
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

  useEffect(() => {
    let filtered = products;
    if (category && category !== 'All') {
      filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(filtered);
  }, [category, search, products]);

  const toggleWishlist = (id, title) => {
    let savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (savedWishlist.includes(id)) {
      savedWishlist = savedWishlist.filter(itemId => itemId !== id);
      alert(`${title} removed from wishlist`);
    } else {
      savedWishlist.push(id);
      alert(`${title} added to wishlist`);
    }
    localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
    setWishlist(savedWishlist);
  };

  if (loading) return <div className="text-center text-xl">Loading products...</div>;
  if (error) return <div className="text-center text-xl text-red-500">{error}</div>;

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Results for {category || search}</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md ${wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-500'}`}
              onClick={() => toggleWishlist(product.id, product.title)}
            >
              <Heart size={20} />
            </button>
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-64 object-contain group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold text-black">{product.title}</h3>
              <p className="text-gray-600">Rs {product.price}</p>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-black text-white rounded-lg" onClick={() => alert(`${product.title} added to cart`)}>Add to Cart</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => alert(`Buying ${product.title}`)}>Buy Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Result;
