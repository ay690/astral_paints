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
    <div className="max-w-screen-xl p-4 mx-auto">
      <h2 className="mb-4 text-xl font-semibold">Services</h2>
      <div className="flex items-center gap-5 mb-7">
        <h2 className="text-2xl font-bold capitalize">
          Make your life comfortable
        </h2>
        <div className="ml-4">
          <Image
            src="https://astral-paints-landing.vercel.app/Images/yellowline.svg"
            width={100}
            height={20}
            alt="yellow svg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-15 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col justify-between w-full p-6 overflow-hidden bg-white rounded-lg shadow-md h-80 md:w-96"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={400}
              height={300}
              className="absolute inset-0 object-cover w-full h-full rounded-lg "
            />

            <div
              className="absolute bottom-0 left-0 z-10 w-full p-4 text-white"
              style={{
                background: service.bgColour,
              }}
            >
              <h2 className="mb-2 text-xl font-bold">{service.title}</h2>
              <p className="text-gray-100">{service.description}</p>
              <button className="px-4 py-2 mt-2 font-bold text-gray-800 rounded-full cursor-pointer bg-white/70">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
