import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reviews = [
  {
    text: 'Thank you again and again! I have experienced the fastest support ever. My order arrived on my doorstep the following day. Your team is always friendly and very helpful. You managed to exceed my expectations!',
    author: 'Sam Kromstain',
    stars: 5,
  },
  {
    text: 'Amazing service and quality products. I would definitely recommend it to everyone.',
    author: 'Anna Smith',
    stars: 5,
  },
  {
    text: 'I love the products and the delivery was super fast!',
    author: 'Michael Johnson',
    stars: 5,
  },
  {
    text: 'I love the products and the delivery was super fast!',
    author: 'Michael Johnson',
    stars: 5,
  },
  {
    text: 'I love the products and the delivery was super fast!',
    author: 'Michael Johnson',
    stars: 5,
  },
  {
    text: 'I love the products and the delivery was super fast!',
    author: 'Michael Johnson',
    stars: 5,
  },

];

const ReviewCard = ({ text, author, stars }) => {
  return (
    <motion.div
      className="bg-black p-6 md:p-10 rounded-2xl text-white mx-auto max-w-md md:max-w-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-xl mb-4 text-center">{'★ '.repeat(stars)}</div>
      <p className="mb-6 text-center text-sm md:text-base">{text}</p>
      <p className="font-bold text-center">{author}</p>
    </motion.div>
  );
};

const TrustpilotReviewCarousel = () => {
  return (
    <div className="text-center py-10 px-4">
      <h3 className="text-lg mb-2">Reviews from:</h3>
      <motion.h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Trustpilot
      </motion.h2>
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showIndicators={true} // Dots will dynamically adjust
      >
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Carousel>
      <style>{`
        .carousel .control-dots {
          margin-top: 1rem;
        }
        .carousel .control-dots .dot {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default TrustpilotReviewCarousel;
