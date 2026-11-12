import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "4-Bedroom Private Duplex",
    location: "Bodija, Ibadan",
    image: "/wossade_four.jpeg",
    description:
      "A premium detached duplex in Bodija, with every room ensuite, modern interior finishes, and high-grade building materials.",
  },
  {
    title: "3-Bedroom Short-Let Apartment",
    location: "Bodija, Ibadan",
    image: "/wossade_bodija.jpeg",
    description:
      "A contemporary duplex for short stays: comfort, privacy, and a quiet setting.",
  },
  {
    title: "10-Unit Student Hostel",
    location: "Ojoo, Ibadan",
    image: "/wossade_hostel.jpg",
    description:
      "Self-contained units a few metres from the University of Ibadan.",
  },
  {
    title: "Twin Duplex Development",
    location: "Lekron Layout, Bodija GRA",
    image: "/wossade_lekron.jpeg",
    description:
      "An ongoing luxury twin duplex with modern architecture and high-end finishes.",
  },
];

const FeaturedProjects = () => {
  const [lead, ...rest] = projects;

  return (
    <section id="projects" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Selected work
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c]">
              Homes underway and already lived in.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950"
          >
            Full portfolio
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </div>

        <article className="grid lg:grid-cols-12 overflow-hidden rounded-[1.75rem] bg-[#f4f0e8]">
          <div className="relative lg:col-span-7 min-h-[280px] sm:min-h-[380px]">
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center p-7 sm:p-10">
            <p className="text-sm font-medium text-emerald-800">{lead.location}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight text-[#10241c]">
              {lead.title}
            </h3>
            <p className="mt-4 text-[#10241c]/70 leading-relaxed">
              {lead.description}
            </p>
          </div>
        </article>

        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {rest.map((project) => (
            <article key={project.title} className="group">
              <div className="relative h-56 overflow-hidden rounded-2xl bg-[#f4f0e8]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-emerald-800">
                {project.location}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#10241c]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[#10241c]/65 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
