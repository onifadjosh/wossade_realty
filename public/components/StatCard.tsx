import React from "react";

const StatCard = ({
  stat,
  title,
  subtitle,
}: {
  stat: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-10 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/30">
      <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{stat}</p>
      <p className="mt-2 text-lg md:text-xl font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm md:text-base text-emerald-200/90">{subtitle}</p>
    </div>
  );
};

export default StatCard;