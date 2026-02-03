import Link from "next/link";
import React from "react";

const Headerr = () => {
  return (
    <header className="relative min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/wossade-team-header.jpeg)`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        aria-hidden
      />
      <div className="relative z-10 px-4 max-w-4xl mx-auto pt-20">
        <p className="text-emerald-300 font-medium tracking-widest uppercase text-sm md:text-base mb-4">
          Construction & Real Estate Development
        </p>
        <h1 className="head-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Wossade Realty
        </h1>
        <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white/95 mt-6 max-w-xl mx-auto">
          Building a home to remember
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-600 font-semibold text-lg hover:bg-emerald-500 active:scale-[0.98] transition-all shadow-lg shadow-emerald-900/30"
          >
            Get in touch
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/80 font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            View our work
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Headerr;
