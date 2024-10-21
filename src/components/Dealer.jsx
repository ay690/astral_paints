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
      className="flex items-center justify-center h-[350px] bg-center bg-cover mb-10 mt-5"
      style={{
        backgroundImage: `url(${homeJoinBackgroundImage.node.sourceUrl})`,
      }}
    >
      <div className="px-6 text-center text-white">
        <h2 className="mb-4 text-lg md:text-xl">{homeJoinSubtitle}</h2>

        <p className="mb-4 text-2xl font-semibold md:text-4xl">
          {homeJoinTitle}
        </p>
        <p className="mb-4 text-xl font-[300] md:text-2xl max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem
          sunt alias doloribus fuga explicabo!
        </p>
        <button className="px-4 py-2 font-[400] text-black bg-white rounded-full">
          {homeJoinButton.title}
        </button>
      </div>
    </section>
  );
};

export default Dealer;
