import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const About = ({ about }) => {
  const {
    homeAboutTitle,
    homeAboutSubtitle,
    homeAboutButton,
    homeAboutVideoImage,
  } = about;

  return (
    <motion.div
      className="relative flex flex-col items-center justify-between min-h-screen p-3 max-w-7xl md:flex-row"
      id="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
    
      <div className="absolute inset-y-0 left-0 w-2 mt-10 bg-gradient-to-b from-red-500 to-red-500 "></div>

      <motion.div
        className="flex flex-col items-center justify-between min-h-screen p-3 mx-auto max-7xl max-w-7xl md:flex-row"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        
        <motion.div
          className="w-full max-w-xl p-8 rounded-lg md:p-16"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-4 text-xl font-semibold text-center md:text-left"
            variants={fadeInUp}
          >
            {homeAboutSubtitle}
          </motion.h2>

          <motion.div
            className="flex flex-col items-center mb-4 md:flex-row md:justify-evenly"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-2xl font-bold text-center md:text-left"
              variants={fadeInUp}
            >
              {homeAboutTitle}
            </motion.h1>

            <motion.div
              className="mt-4 md:mt-0 md:ml-4"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Image
                src="https://astral-paints-landing.vercel.app/Images/redline.svg"
                width={100}
                height={20}
                alt="red svg"
              />
            </motion.div>
          </motion.div>

          <motion.hr className="my-4 border-gray-300" variants={fadeIn} />

          <motion.p
            className="mb-4 text-justify text-gray-600"
            variants={fadeInUp}
          >
            Astral, a leader in the Building Materials industry, is expanding
            the portfolio of offerings right from pipes, water tanks, bathware,
            adhesives, construction chemicals to the new horizons, marking its
            entry into the paints category. This strategic move enhances
            Astral&apos;s brand equity and allows it to tap into the high
            consumer involvement sector of paints.
          </motion.p>

          <motion.p
            className="mb-4 text-justify text-gray-600"
            variants={fadeInUp}
          >
            Astral Paints offer a diversified portfolio in decorative paints for
            all the paint needs. Designed to inspire and empower, our collection
            boasts a spectrum of hues and finishes to ignite your imagination.
            With every stroke tells a story, every shade evokes emotion, and
            every project becomes a masterpiece.
          </motion.p>

          {homeAboutButton && (
            <motion.a
              href={homeAboutButton.url}
              target={homeAboutButton.target}
              className="inline-block px-4 py-2 text-red-500 border border-red-500 rounded-full outline-none bg-white/30 hover:bg-red-500 hover:text-white hover:border-transparent focus:ring-red-600"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {homeAboutButton.title}
            </motion.a>
          )}
        </motion.div>

       
        <motion.div
          className="w-full max-w-xl p-8 mt-8 bg-yellow-400 rounded-lg shadow-md md:mt-0"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {homeAboutVideoImage && (
            <Image
              src={homeAboutVideoImage.node.sourceUrl}
              alt="About Video"
              className="w-full rounded-lg"
              width={800}
              height={500}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
