import React from "react";

const Headerr = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat  flex flex-col text-center  items-center justify-center h-[70vh] md:h-screen text-white"
        style={{
          backgroundImage: `url(/header.jpg)`,
        }}
      >
        <h1 className="head-text text-8xl md:text-9xl font-bold text-center">
          Wossade Realty
        </h1>

        <button className="px-4 py-2 bg-emerald-900 font-bold text-lg rounded-lg mt-6">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Headerr;
