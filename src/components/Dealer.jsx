import React from "react";
import { motion } from "framer-motion";

const Dealer = ({ dealer }) => {
  const {
    homeJoinTitle,
    homeJoinSubtitle,
    homeJoinButton,
    homeJoinBackgroundImage,
  } = dealer;

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className="flex items-center justify-center h-[350px] bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
      }}
      id="dealer-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Left vertical gradient bar */}
      <motion.div
        className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-green-600 to-green-600"
        variants={fadeIn}
      ></motion.div>

      {/* Content container */}
      <motion.div
        className="px-4 text-center text-white sm:px-6"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="mb-2 text-lg md:text-xl lg:text-xl"
          variants={fadeInUp}
        >
          {homeJoinSubtitle}
        </motion.h2>

        <motion.p
          className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl"
          variants={fadeInUp}
        >
          {homeJoinTitle}
        </motion.p>

        <motion.p
          className="mb-4 text-sm font-light md:text-xl lg:text-xl max-w-[700px] mx-auto"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
          sunt alias doloribus fuga explicabo!
        </motion.p>

        <motion.button
          className="px-4 py-2 font-medium text-black bg-white rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-green-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {homeJoinButton.title}
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Dealer;

