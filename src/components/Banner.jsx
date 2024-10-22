"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 md:h-[500px] overflow-hidden">
          {banners?.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
            >
              <Image
                src={banner.bannerImage.node.sourceUrl}
                layout="fill"
                objectFit="cover"
                alt={banner.bannersTitle}
              />

              {/* Overlay content */}
              <div className="absolute ml-5 space-y-3 text-white transform -translate-y-1/2 left-5 top-1/2 md:left-10 md:top-1/2">
                <h2 className="text-2xl font-bold md:text-4xl">
                  {banner.bannersTitle}
                </h2>
                <p className="text-sm md:text-md font-[700]">
                  {banner.bannerDescription}
                </p>
                <a
                  href={banner.bannerButton.url}
                  target={banner.bannerButton.target}
                  className="inline-block px-4 py-2 rounded-full text-white-300 bg-white/40 hover:bg-white-700"
                >
                  {banner.bannerButton.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical bar indicators */}
        <div className="absolute z-30 flex flex-col space-y-3 -translate-y-1/2 top-1/2 right-5">
          {banners?.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-1 h-8 rounded-full transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <Image
        src={"https://astral-paints-landing.vercel.app/Images/rainbow-new.svg"}
        alt="rainbow"
        width={10}
        height={70}
        className="absolute w-full -mt-16 sm:-mt-48 lg:-mt-64 opacity-95"
      />
    </>
  );
}
