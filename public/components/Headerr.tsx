import Link from "next/link";
import React from "react";

const Headerr = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center flex flex-col text-center items-center justify-center h-[70vh] md:h-screen text-white"
        style={{
          // Changed 0.5 to 0.7 for a darker overlay
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/wossade-team-header.jpeg)`,
        }}
      >
        <h1 className="head-text text-6xl md:text-9xl font-bold text-center">
          Wossade Realty
        </h1>

        <p className="text-xl md:text-2xl mt-4">Building a home to remember</p>

        <Link href="/contact">
          <button className="px-4 py-2 bg-emerald-900 font-bold text-lg rounded-lg mt-6 hover:bg-emerald-800 transition-colors">
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Headerr;
