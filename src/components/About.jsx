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
    <div className="flex items-center min-h-screen justify-evenly">
      <div className="w-full max-w-xl p-8 rounded-lg">
        <h2 className="mb-4 text-xl font-semibold">{homeAboutSubtitle}</h2>

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{homeAboutTitle}</h1>
          <div className="ml-4">
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
      <div className="w-full max-w-xl p-8 mt-8 bg-yellow-400 rounded-lg shadow-md">
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
