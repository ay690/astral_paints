import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-blue-900 -my-96">
      {/* Top Section: Group Companies */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center pb-12 space-x-8 border-b border-gray-400">
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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex items-end justify-between p-12 gap-11">
          <Image
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2Flogo.png&w=256&q=75"
            width={150}
            height={40}
            alt="Astral logo"
          />
          <div className="flex gap-5">
            <div className="flex-col">
              <h4 className="mb-4 text-lg font-semibold">
                Sign Up To Our Newsletter
              </h4>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="flex ">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-2 py-2 text-white bg-transparent border-gray-600 outline-none rounded-l-md"
              />
              <button className="px-2 py-2 bg-blue-500 rounded-r-md">
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-12 text-sm md:grid-cols-4">
          {/* Contact Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Reach Us</h4>
            <p>
              #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
              <br />
              Bangalore - 560 058
            </p>
            <p className="mt-4">+91 - 80 - 42552555</p>
            <p className="mt-2">info@gem-paints.com</p>
          </div>

          {/* Categories and Services Section */}
          <div className="grid grid-cols-4 ml-28 gap-36">
            {/* Links Section */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">About</h4>
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
              <h4 className="mb-4 text-lg font-semibold">Category</h4>
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
              <h4 className="mb-4 text-lg font-semibold">Services</h4>
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
              <h4 className="mb-4 text-lg font-semibold">Downloads</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-semibold hover:underline ">
                    Become A Dealer
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold hover:underline ">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="font-semibold hover:underline ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-400">
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
