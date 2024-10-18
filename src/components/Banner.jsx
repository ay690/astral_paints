"use client";
import Image from "next/image";

export default function Banner({ banners }) {
  return (
    <section>
      {banners.map((banner, index) => (
        <div key={index}>
          <Image
            src={banner.bannerImage.node.sourceUrl}
            alt={banner.bannersTitle}
            width={1336} 
            height={650}
          />
          <h2>{banner.bannersTitle}</h2>
          <p>{banner.bannerDescription}</p>
          <a href={banner.bannerButton.url} target={banner.bannerButton.target}>
            {banner.bannerButton.title}
          </a>
        </div>
      ))}
    </section>
  );
}
