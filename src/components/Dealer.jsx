import React from "react";

const Dealer = ({ dealer }) => {
  const {
    homeJoinTitle,
    homeJoinSubtitle,
    homeJoinButton,
    homeJoinBackgroundImage,
  } = dealer;

  return (
    <section
      className="flex items-center justify-center h-[350px] bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
      }}
      id="dealer-section"
    >
      {/* Left vertical gradient bar */}
      <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-green-600 to-green-600"></div>

      {/* Content container */}
      <div className="px-4 text-center text-white sm:px-6">
        <h2 className="mb-2 text-lg md:text-xl lg:text-xl">
          {homeJoinSubtitle}
        </h2>

        <p className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl">
          {homeJoinTitle}
        </p>

        <p className="mb-4 text-sm font-light md:text-xl lg:text-xl max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
          sunt alias doloribus fuga explicabo!
        </p>

        <button className="px-4 py-2 font-medium text-black bg-white rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-green-500">
          {homeJoinButton.title}
        </button>
      </div>
    </section>
  );
};

export default Dealer;
