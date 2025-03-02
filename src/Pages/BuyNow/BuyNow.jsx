import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: '',
    cardNumber: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`Order placed successfully for ${product.title}`);
      navigate('/');
      setLoading(false);
    }, 2000);
  };

  if (!product) {
    return <div className="text-center text-xl py-20">No product selected</div>;
  }

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">Buy Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={product.img} alt={product.title} className="w-full h-96 object-contain rounded-lg shadow-lg" />
            <h3 className="text-2xl font-bold mt-4">{product.title}</h3>
            <p className="text-red-500 text-xl font-semibold">{product.price}</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Name</label>
              <input type="text" name="name" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Email</label>
              <input type="email" name="email" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Address</label>
              <textarea name="address" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Phone</label>
              <input type="text" name="phone" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Payment Method</label>
              <select name="paymentMethod" className="w-full p-3 border rounded-lg" onChange={handleChange} required>
                <option value="">Select Payment Method</option>
                <option value="Pay Now">Pay Now</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            {userDetails.paymentMethod === 'Pay Now' && (
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Card Number</label>
                <input type="text" name="cardNumber" className="w-full p-3 border rounded-lg" onChange={handleChange} required />
              </div>
            )}
            <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all w-full" disabled={loading}>
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
