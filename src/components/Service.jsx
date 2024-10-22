import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Wall Painting",
    description: "Lorem ipsum dolor sit amet consectetur.",
    bgColour: "linear-gradient(315deg, #feca57 0%, #d3d3d3 74%)",
    imageUrl:
      "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/05/become-a-dealer.jpg",
  },
  {
    id: 2,
    title: "Water Solution",
    description: "Lorem ipsum dolor sit amet consectetur.",
    bgColour: "linear-gradient(315deg, #56ccf2 0%, #2f80ed 74%)",
    imageUrl:
      "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FEnamel%20%26%20Distemper%20-Smaller%20Imgs%20.png&w=3840&q=75",
  },
  {
    id: 3,
    title: "Painting",
    description: "Lorem ipsum dolor sit amet consectetur.",
    bgColour: "linear-gradient(315deg, #ff9a9e 0%, #fecfef 74%)",
    imageUrl:
      "https://astral-paints-landing.vercel.app/_next/image?url=%2FImages%2FPainting%20Tools%20-%20Smaller%20Imgs.png&w=3840&q=75",
  },
];

const Service = () => {
  return (
    <div className="relative p-4 mx-auto" id="services-section">
      {/* Left gradient bar */}
      <div className="absolute inset-y-0 left-0 w-2 h-screen bg-gradient-to-b from-yellow-500 to-green-300"></div>

      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-xl font-semibold">Services</h2>

        {/* Title and line */}
        <div className="flex flex-col items-start gap-2 mb-7 sm:flex-row sm:items-center sm:gap-5">
          <h2 className="text-2xl font-bold capitalize md:text-3xl">
            Make your life comfortable
          </h2>
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <Image
              src="https://astral-paints-landing.vercel.app/Images/yellowline.svg"
              width={100}
              height={20}
              alt="yellow svg"
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col justify-end w-full h-64 p-6 overflow-hidden bg-white rounded-lg shadow-md sm:h-72 lg:h-80"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={400}
                height={300}
                className="absolute inset-0 object-cover w-full h-full rounded-lg"
              />

              <div
                className="absolute bottom-0 left-0 z-10 w-full p-4 text-white"
                style={{
                  background: service.bgColour,
                }}
              >
                <h2 className="mb-2 text-lg font-bold sm:text-xl md:text-2xl">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-100 sm:text-base md:text-lg">
                  {service.description}
                </p>
                <button className="px-4 py-2 mt-2 font-bold text-gray-800 rounded-full cursor-pointer bg-white/70">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;


