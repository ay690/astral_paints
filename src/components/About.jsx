import React from "react";
import Image from "next/image";

const About = ({ about }) => {
  const {
    homeAboutTitle,
    homeAboutSubtitle,
    homeAboutButton,
    homeAboutVideoImage,
  } = about;

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen p-3 max-w-7xl md:flex-row">
      {/* Gradient border on the left side */}
      <div className="absolute inset-y-0 left-0 w-2 mt-10 bg-gradient-to-b from-red-500 to-red-500 "></div>

      <div className="w-full max-w-xl p-8 rounded-lg md:p-16">
        <h2 className="mb-4 text-xl font-semibold text-center md:text-left">
          {homeAboutSubtitle}
        </h2>

        <div className="flex flex-col items-center mb-4 md:flex-row md:justify-between">
          <h1 className="text-2xl font-bold text-center md:text-left">
            {homeAboutTitle}
          </h1>
          <div className="mt-4 md:mt-0 md:ml-4">
            <Image
              src="https://astral-paints-landing.vercel.app/Images/redline.svg"
              width={100}
              height={20}
              alt="red svg"
            />
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <p className="mb-4 text-justify text-gray-600">
          Astral, a leader in the Building Materials industry, is expanding the
          portfolio of offerings right from pipes, water tanks, bathware,
          adhesives, construction chemicals to the new horizons, marking its
          entry into the paints category. This strategic move enhances
          Astral&apos;s brand equity and allows it to tap into the high consumer
          involvement sector of paints.
        </p>
        <p className="mb-4 text-justify text-gray-600">
          Astral Paints offer a diversified portfolio in decorative paints for
          all the paint needs. Designed to inspire and empower, our collection
          boasts a spectrum of hues and finishes to ignite your imagination.
          With every stroke tells a story, every shade evokes emotion, and every
          project becomes a masterpiece.
        </p>

        {homeAboutButton && (
          <a
            href={homeAboutButton.url}
            target={homeAboutButton.target}
            className="inline-block px-4 py-2 text-red-500 border border-red-500 rounded-full outline-none bg-white/30 hover:bg-red-500 hover:text-white hover:border-transparent focus:ring-red-600"
          >
            {homeAboutButton.title}
          </a>
        )}
      </div>

      <div className="w-full max-w-xl p-8 mt-8 bg-yellow-400 rounded-lg shadow-md md:mt-0">
        {/* Display the video image */}
        {homeAboutVideoImage && (
          <Image
            src={homeAboutVideoImage.node.sourceUrl}
            alt="About Video"
            className="w-full rounded-lg"
            width={800}
            height={500}
          />
        )}
      </div>
    </div>
  );
};

export default About;
