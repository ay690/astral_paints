import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div className="mb-10 text-start">
        <h2 className="mb-4 text-xl font-semibold"> Category</h2>
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
        <div className="relative mb-6 mr-0 md:mr-8 md:mb-0 group">
          <Image
            className="w-1/2 mx-auto md:w-full"
            src="https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FInterior%20Emulsions%20-%20Big%20img%20650%20x%20545.png&w=3840&q=75"
            alt="Interior paints"
            width={400}
            height={200}
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 transition-all duration-300 ease-in-out group-hover:bg-yellow-700">
            <h3 className="text-xl font-bold text-white text-start">
              {" "}
         
              Interior Paints
            </h3>
            <div className="flex justify-end">
              <button className="hidden px-2 py-1 font-semibold text-white transition-all duration-300 ease-in-out bg-transparent border border-white rounded-full cursor-pointer text-md group-hover:flex">
                {" "}
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-wrap flex-1 -mx-2 -mb-4 sm:flex-row">
        
          {[
            {
              src: "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FExterior%20Emulsions%20-%20Smaller%20Imgs.png&w=3840&q=75",
              alt: "Exterior Paints",
              title: "Exterior Paints",
            },
            {
              src: "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FEnamel%20%26%20Distemper%20-Smaller%20Imgs%20.png&w=3840&q=75",
              alt: "Distemper & Enamel",
              title: "Distemper & Enamel",
            },
            {
              src: "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FUndercoats%20-Smaller%20Imgs%20550%20x%20517_2.png&w=3840&q=75",
              alt: "Undercoats",
              title: "Undercoats",
            },
            {
              src: "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FPainting%20Tools%20-%20Smaller%20Imgs.png&w=3840&q=75",
              alt: "Painting Tools",
              title: "Painting Tools",
            },
          ].map((item, index) => (
            <div key={index} className="w-full px-2 mb-4 sm:w-1/2">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 text-white transition-all duration-300 ease-in-out group-hover:bg-yellow-700">
                  <h3 className="text-lg font-bold">{item.title}</h3>{" "}
                  {/* Reduced font size */}
                  <div className="hidden cursor-pointer group-hover:flex">
                    <button className="px-2 py-1 font-semibold transition-all duration-300 ease-in-out bg-transparent border border-white rounded-full cursor-pointer text-md hover:bg-white hover:text-gold-500">
                      {" "}
                      {/* Reduced padding and font size */}
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
  );
};

export default Category;
