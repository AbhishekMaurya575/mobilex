import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BuyNow from '../BuyNow/BuyNow';

const CartItem = ({ item, onRemove }) => {
  return (
    <motion.div 
      className="flex items-center justify-between p-4 border-b border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center gap-4">
        <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" />
        <div>
          <h4 className="font-bold text-lg">{item.title}</h4>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Remove</button>
    </motion.div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cart') // Replace with backend API URL
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalItems = cartItems.length;

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Your Cart</h2>
      <div className="container mx-auto max-w-3xl bg-gray-100 p-6 rounded-2xl shadow-lg">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
            <div className="text-right mt-6">
              <p className="text-lg font-bold">Total Items: {totalItems}</p>
              <p className="text-lg font-bold">Total Price: ₹{totalPrice}</p>
              <button onClick={<BuyNow/>} className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 mt-4">Buy Now</button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty</p>
        )}
      </div>
    </section>
  );
};

export default Cart;
