import React from "react";
import Image from "next/image";

const Category = ({ categories }) => {
  return (
    <div className="relative min-h-screen px-4 py-8 mx-auto lg:py-16 lg:px-6">
      {/* Golden gradient line placed absolutely inside the component */}
      <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-red-500 to-yellow-500"></div>
      <div className="mx-auto max-w-7xl">
        
      <div className="mb-10 text-start">
        <h2 className="mb-4 text-xl font-semibold">Category</h2>
        <div className="flex items-center gap-5">
          <h2 className="text-2xl font-bold">Wide range of Colours</h2>
          <div className="ml-4">
            <Image
              src="https://astral-paints-landing.vercel.app/Images/yellowline.svg"
              width={100}
              height={20}
              alt="yellow svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* First Category - Interior Paints */}
        {categories && categories.length > 0 && (
          <div className="relative mb-6 mr-0 md:mr-8 md:mb-0 group">
            <Image
              className="w-full h-full mx-auto rounded-md md:w-full"
              src={categories[0].image.node.sourceUrl}
              alt={categories[0].title}
              width={400}
              height={200}
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 transition-all duration-300 ease-in-out group-hover:bg-yellow-700">
              <h3 className="text-xl font-bold text-white text-start">
                {categories[0].title}
              </h3>
              <div className="flex justify-end">
                <button className="hidden px-2 py-1 font-[300] text-white transition-all duration-300 ease-in-out bg-transparent border border-white rounded-full cursor-pointer text-md group-hover:flex">
                  Read More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Categories */}
        <div className="flex flex-col flex-wrap flex-1 -mx-2 -mb-4 sm:flex-row">
          {categories.slice(1).map((category, index) => (
            <div key={index} className="w-full px-2 mb-4 sm:w-1/2">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={category.image.node.sourceUrl}
                  alt={category.title}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 text-white transition-all duration-300 ease-in-out group-hover:bg-yellow-700">
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  <div className="hidden cursor-pointer group-hover:flex">
                    <button className="px-2 py-1 font-[300] transition-all duration-300 ease-in-out bg-transparent border border-white rounded-full cursor-pointer text-md hover:bg-white hover:text-gold-500">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out bg-transparent opacity-0 cursor-pointer group-hover:bg-gold-500 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Category;
