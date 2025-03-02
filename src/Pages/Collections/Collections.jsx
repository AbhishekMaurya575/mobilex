import React from 'react';
import { motion } from 'framer-motion';
import AccessoriesImg from '../../assets/150376-v7-motorola-edge-50-pro-5g-mobile-phone-large-1.png';
import BestsellerImg from '../../assets/ABUIABACGAAgo_y5rwYoiLqZ8wUwoAY4oAY-removebg-preview.png';
import CameraImg from '../../assets/istockphoto-1373017594-612x612.jpg';

const collections = [
  { title: 'ACCESSORIES', img: AccessoriesImg },
  { title: "BESTSELLER'S", img: BestsellerImg },
  { title: 'CAMERAS & PHOTOGRAPHY', img: CameraImg },
  { title: 'SMARTPHONES', img: BestsellerImg },
  { title: 'LAPTOPS', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
  { title: 'GAMING', img: BestsellerImg },
];

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
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl font-bold mb-10 text-black">Collections</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5">
        {collections.map((collection, index) => (
          <CollectionCard key={index} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
