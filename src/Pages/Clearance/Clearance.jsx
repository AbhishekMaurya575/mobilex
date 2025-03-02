import React from 'react';
import { motion } from 'framer-motion';
import ClearanceImg1 from '../../assets/150376-v7-motorola-edge-50-pro-5g-mobile-phone-large-1.png';
import ClearanceImg2 from '../../assets/istockphoto-1373017594-612x612.jpg';
import ClearanceImg3 from '../../assets/S12-Ultra-Smart-Watch-4G-Sim-Card-With-Rotating-Camera.webp';

const clearanceItems = [
  { title: 'Smartphone - 30% Off', img: ClearanceImg1, price: 'Rs 14,000' },
  { title: 'Headphones - 40% Off', img: ClearanceImg2, price: 'Rs 2,500' },
  { title: 'Gaming Mouse - 20% Off', img: ClearanceImg3, price: 'Rs 1,800' },
  { title: 'Wireless Earbuds - 35% Off', img: ClearanceImg2, price: 'Rs 3,200' },
  { title: 'Laptop Bag - 50% Off', img: ClearanceImg1, price: 'Rs 1,200' },
  { title: 'Camera Tripod - 25% Off', img: ClearanceImg3, price: 'Rs 3,000' },
];

const ClearanceCard = ({ title, img, price }) => {
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
        <p className="text-red-500 font-semibold">{price}</p>
      </div>
    </motion.div>
  );
};

const Clearance = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Clearance Sale 🔥</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-5">
        {clearanceItems.map((item, index) => (
          <ClearanceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Clearance;
