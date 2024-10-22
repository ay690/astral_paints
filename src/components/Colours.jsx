"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const coloursData = [
  { name: "Peach", code: "#f3d9b1", color: "#f3d9b1", special: true },
  { name: "Salmon", code: "#f8cdc7", color: "#f8cdc7", special: true },
  { name: "Sky Blue", code: "#00c8e4", color: "#00c8e4", special: true },
  { name: "Royal Blue", code: "#0065b3", color: "#0065b3", special: true },
  { name: "Crimson", code: "#9e0707", color: "#9e0707", special: true },
  { name: "Golden Rod", code: "#e2a001", color: "#e2a001", special: true },
];

const Colours = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative p-6 mx-auto" id="colours-section">
      <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-green-300 to-green-600"></div>
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-xl font-semibold">Colours</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-start gap-3">
            <h2 className="text-2xl font-bold">Popular Colours</h2>
            <div className="w-20 border-b-2 border-green-500"></div>
          </div>

          <button className="px-4 py-2 bg-transparent border-2 border-green-500 rounded-full text-light-green-500 hover:ring-2 hover:ring-green-500 focus:ring-green-500">
            Explore More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {coloursData.map((colour, index) => (
            <motion.div
              key={index}
              className={`relative group p-4 rounded-md ${
                colour.special ? "bg-white shadow-lg" : ""
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <div
                className="relative w-full h-40 rounded-md mt-7"
                style={{ backgroundColor: colour.color }}
              >
                <div
                  className="absolute hidden w-10 h-10 border-2 border-white rounded-md lg:block"
                  style={{
                    top: "43%",
                    left: "44%",
                    width: "90%",
                    height: "90%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                ></div>
              </div>

              {colour.special && hovered === index && (
                <div className="mt-2 text-center">
                  <p className="text-lg font-medium">{colour.name}</p>
                  <p className="text-gray-500">{colour.code}</p>
                </div>
              )}

              {colour.special && hovered === index && (
                <div className="absolute top-0 left-0 flex items-start justify-center w-full h-full p-4">
                  <p className="text-lg font-bold">Astral Paints</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colours;


