import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      {/* Top Section: Group Companies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-8 pb-12 border-b border-gray-400">
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc4.png&w=828&q=75"
            alt="Astral Pipes"
            width={100}
            height={60}
            className="h-12"
          />
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc1.png&w=3840&q=75"
            alt="Astral Adhesives"
            width={100}
            height={60}
            className="h-12"
          />
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc2.png&w=828&q=75"
            alt="Bond It"
            width={100}
            height={60}
            className="h-12"
          />
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc3.webp&w=3840&q=75"
            alt="Astral Bathware"
            width={100}
            height={60}
            className="h-12"
          />
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Fcompany%2Fc5.png&w=3840&q=75"
            alt="Gem Paints"
            width={100}
            height={60}
            className="h-12"
          />
        </div>
      </div>

      {/* Bottom Section: Links and Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex gap-11 p-12 items-end justify-between">
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
            width={150}
            height={40}
            alt="Astral logo"
          />
          <div className="flex gap-5">
            <div className="flex-col">
              <h4 className="font-semibold text-lg mb-4">
                Sign Up To Our Newsletter
              </h4>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex ">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-transparent text-white px-2 py-2 w-full rounded-l-md outline-none border-gray-600"
              />
              <button className="bg-blue-500 px-2 py-2 rounded-r-md">
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 text-sm">
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Reach Us</h4>
            <p>
              #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
              <br />
              Bangalore - 560 058
            </p>
            <p className="mt-4">+91 - 80 - 42552555</p>
            <p className="mt-2">info@gem-paints.com</p>
          </div>

          {/* Categories and Services Section */}
          <div className="ml-28 grid grid-cols-4 gap-36">
            {/* Links Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Astrals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Paint Journey
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Group Companies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Category</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Interior Paints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Exterior Paints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Undercoats
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Painting Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Water Proofing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Wall Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Water Solution
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Painting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Colour Shades
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Downloads</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline font-semibold ">
                    Become A Dealer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline font-semibold ">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline font-semibold ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 border-t border-gray-400 pt-8 flex justify-between items-center">
          <p>© 2024 ALL RIGHTS RESERVED</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
          <div className="flex space-x-4">
            {/* <a href="#">
              <Image
                src="path-to-facebook-icon.png"
                alt="Facebook"
                width={10}
                height={10}
                className="h-6"
              />
            </a>
            <a href="#">
              <Image
                src="path-to-instagram-icon.png"
                alt="Instagram"
                width={10}
                height={10}
                className="h-6"
              />
            </a>
            <a href="#">
              <Image
                src="path-to-youtube-icon.png"
                alt="YouTube"
                width={10}
                height={10}
                className="h-6"
              />
            </a>
            <a href="#">
              <Image
                src="path-to-whatsapp-icon.png"
                alt="WhatsApp"
                width={10}
                height={10}
                className="h-6"
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
