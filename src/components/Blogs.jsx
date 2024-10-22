"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    imageUrl:
      "https://d3f1ozwy5sre8y.cloudfront.net/s3fs-public/2024-03/Red-walls-in-office.png?VersionId=SP1KCkK22wiUSXtueEw_HtGbM51TBpPZ&format=webp&width=1200&quality=75",
    isFeatured: false,
  },
  {
    id: 2,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    imageUrl:
      "https://berger-dev-s3-bucket.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Green-walls-in-office%20%281%29.png?VersionId=PYvKLpTMQ2baZKZvPde1_qs7ve4qWTgo",
    isFeatured: false,
  },
  {
    id: 3,
    title: "10 stylish cream colour combination for your home",
    date: "20 Jan 2024",
    imageUrl:
      "https://media.benjaminmoore.com/WebServices/prod/cdp/1920x2400/red-paint-005-heritage-red-HC-181-rgb.jpg",
    isFeatured: true,
  },
  {
    id: 4,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    imageUrl:
      "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/06/blog1.webp",
    isFeatured: false,
  },
  {
    id: 5,
    title: "How to choose the perfect wallcolour for your office",
    date: "10 Jan 2024",
    imageUrl:
      "https://berger-dev-s3-bucket.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Blue-walls-in-office.png?VersionId=VdKekoGtWkuVOXcGjEVGFMDvACTjThq5",
    isFeatured: false,
  },
];

const Blogs = () => {
  return (
    <section className="relative pt-2 mb-2 mx-2auto" id="blogs-section">
      <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-green-600 to-blue-600"></div>
      <div className="mx-auto my-3 max-w-7xl">
        <div className="container px-4 mx-auto">
          {/* Blog Heading */}
          <h2 className="mb-6 text-2xl font-bold">Our Blog</h2>
          <h3 className="flex items-center mb-10 text-2xl font-bold">
            Latest <span className="ml-2 w-14 h-[2px] bg-sky-500"></span>
          </h3>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* First two blogs on the left */}
            <div className="grid grid-rows-2 gap-6">
              {blogs.slice(0, 2).map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={400}
                    height={500}
                    className="object-cover w-full transition-transform duration-300 ease-in-out rounded-lg h-60 md:h-80 group-hover:scale-110"
                  />
                  {/* Title and Date */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
                    <span className="block text-sm">{blog.date}</span>
                    <h4 className="mt-1 text-lg font-semibold">{blog.title}</h4>
                    <button className="px-4 py-2 mt-3 text-sm text-green-500 rounded-full font-[500] bg-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center featured blog */}
            <div className="row-span-2">
              {blogs
                .filter((blog) => blog.isFeatured)
                .map((blog) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: 0.3 }} 
                    className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[670px] group"
                  >
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      width={400}
                      height={500}
                      className="object-cover w-full h-full transition-transform duration-300 ease-in-out rounded-lg group-hover:scale-110"
                    />
                    {/* Title and Date */}
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
                      <span className="block text-sm">{blog.date}</span>
                      <h4 className="mt-1 text-lg font-semibold">{blog.title}</h4>
                      <button className="px-4 py-2 mt-3 text-sm text-green-500 rounded-full font-[500] bg-white/75">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Last two blogs on the right */}
            <div className="grid grid-rows-2 gap-6">
              {blogs.slice(3, 5).map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    width={400}
                    height={500}
                    className="object-cover w-full transition-transform duration-300 ease-in-out rounded-lg h-60 md:h-80 group-hover:scale-110"
                  />
                  {/* Title and Date */}
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
                    <span className="block text-sm">{blog.date}</span>
                    <h4 className="mt-1 text-lg font-semibold">{blog.title}</h4>
                    <button className="px-4 py-2 mt-3 text-sm text-green-500 rounded-full font-[500] bg-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;


