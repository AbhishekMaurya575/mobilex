import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import ClearanceImg1 from '../../assets/150376-v7-motorola-edge-50-pro-5g-mobile-phone-large-1.png';
import ClearanceImg2 from '../../assets/istockphoto-1373017594-612x612.jpg';
import ClearanceImg3 from '../../assets/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.webp';
import BuyNow from '../BuyNow/BuyNow';

const clearanceItems = [
  { id: 1, title: 'Smartphone - 30% Off', img: ClearanceImg1, price: 'Rs 14,000' },
  { id: 2, title: 'Headphones - 40% Off', img: ClearanceImg2, price: 'Rs 2,500' },
  { id: 3, title: 'Gaming Mouse - 20% Off', img: ClearanceImg3, price: 'Rs 1,800' },
  { id: 4, title: 'Wireless Earbuds - 35% Off', img: ClearanceImg2, price: 'Rs 3,200' },
  { id: 5, title: 'Laptop Bag - 50% Off', img: ClearanceImg1, price: 'Rs 1,200' },
  { id: 6, title: 'Camera Tripod - 25% Off', img: ClearanceImg3, price: 'Rs 3,000' },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product || clearanceItems.find((item) => item.id === parseInt(productId));
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setWishlist(!wishlist);
    if (!wishlist) {
      alert(`${product.title} added to wishlist`);
    } else {
      alert(`${product.title} removed from wishlist`);
    }
  };

  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
    alert(`${product.title} added to cart`);
  };

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found</div>;
  }

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-5">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-96 object-contain rounded-lg shadow-lg"
            />
            <button
              className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-all ${wishlist ? 'text-red-500' : 'text-gray-500'}`}
              onClick={toggleWishlist}
            >
              <Heart size={24} className={wishlist ? 'text-red-500' : 'text-gray-500'} />
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-black mb-4">{product.title}</h1>
            <p className="text-red-500 text-xl font-semibold mb-4">{product.price}</p>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
            <div className="flex gap-4">
              <button 
                className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all" 
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <button 
  className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-all" 
  onClick={() => navigate('/buy-now', { state: { product } })}
>
  Buy Now
</button>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
