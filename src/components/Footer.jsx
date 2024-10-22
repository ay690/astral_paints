"use client";
import React from "react";
import Image from "next/image";
import fb from "@/assets/facebook.png";
import insta from "@/assets/instagram.png";
import you from "@/assets/youtube.png";
import tweet from "@/assets/twitter.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="py-16 -my-3 text-white bg-[url('https://astral-paints-landing.vercel.app/Images/footer/footer.png')] bg-cover bg-center"
      id="footer"
    >
      {/* Top Section: Group Companies */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-11 font-bolder text-center text-white text-[40px]">
          Group Company
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pb-12 space-y-5 border-b border-gray-400 md:space-x-20 lg:space-y-0">
          {[
            "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=828&q=75",
            "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc1.png&w=3840&q=75",
            "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc2.png&w=828&q=75",
            "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc3.webp&w=3840&q=75",
            "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc5.png&w=3840&q=75",
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Company Logo ${index + 1}`}
                width={150}
                height={80}
                className="h-12"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Links and Contact */}
      <div className="px-4 mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="flex flex-col items-start justify-between p-8 rounded-lg lg:flex-row lg:items-end gap-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
            width={150}
            height={40}
            alt="Astral logo"
          />
          <div className="flex flex-col gap-5 lg:flex-row">
            <div>
              <h4 className="mb-1 text-lg font-semibold">
                Sign Up To Our Newsletter
              </h4>
              <p className="mb-4">
                Stay updated with our latest news and offers.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-3/4 px-4 py-1 text-white bg-transparent border border-gray-600 outline-none h-11 rounded-l-md"
              />
              <button className="px-2 py-1 text-sm text-white bg-blue-500 h-11 rounded-r-md">
                Enquire Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Links and Contact Section */}
        <div className="grid grid-cols-1 gap-8 pt-12 mx-auto text-sm md:grid-cols-3 max-w-7xl">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="mb-4 text-lg font-semibold">Reach Us</h4>
            <p className="text-gray-300">
              #417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore
              - 560 058
            </p>
            <p className="mt-4 text-gray-300">+91 - 80 - 42552555</p>
            <p className="mt-2 text-gray-300">info@gem-paints.com</p>
          </motion.div>

          {/* Links Section */}
          <div className="grid max-w-full grid-cols-2 gap-10 lg:gap-48 md:grid-cols-4">
            {[
              {
                title: "About",
                items: ["About Astrals", "Paint Journey", "Group Companies"],
              },
              {
                title: "Category",
                items: [
                  "Interior Paints",
                  "Exterior Paints",
                  "Undercoats",
                  "Water Proofing",
                ],
              },
              {
                title: "Service",
                items: ["Wall Proofing", "Water Solution", "Colour Shades"],
              },
              {
                title: "Downloads",
                items: ["Become A Dealer", "Blogs", "Contact"],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ul className="space-y-2">
                  <li className="font-bold whitespace-nowrap hover:underline">
                    {section.title}
                  </li>
                  {section.items.map((item, idx) => (
                    <li key={idx} className="whitespace-nowrap hover:underline">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ul className="space-y-2">
                <li className="flex space-x-2">
                  {/* Social Media Icons */}
                  <a href="#">
                    <Image src={fb} alt="Facebook" width={25} height={25} />
                  </a>
                  <a href="#">
                    <Image src={insta} alt="Instagram" width={25} height={25} />
                  </a>
                  <a href="#">
                    <Image src={you} alt="YouTube" width={25} height={25} />
                  </a>
                  <a href="#">
                    <Image src={tweet} alt="Twitter" width={25} height={25} />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <motion.div
        className="flex items-center justify-between pt-8 mx-auto mt-12 border-t border-gray-400 max-w-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-sm lg:text-md">© 2024 ALL RIGHTS RESERVED</p>
        <p className="text-sm hover:underline lg:text-md">Privacy Policy</p>
        <p className="text-sm hover:underline lg:text-md">Terms & Conditions</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
