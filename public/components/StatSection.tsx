import React from "react";
import StatCard from "./StatCard";

const stats = [
  { stat: "5", title: "Years of Experience", subtitle: "Building excellence since 2021" },
  { stat: "4", title: "Projects Completed", subtitle: "Successful construction projects" },
  { stat: "100%", title: "Trusted by Government", subtitle: "Reliable partnerships with agencies" },
];

const StatSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((item, i) => (
          <StatCard key={i} stat={item.stat} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </section>
  );
};

export default StatSection;