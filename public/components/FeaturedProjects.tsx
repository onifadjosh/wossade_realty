import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "4-Bedroom Private Duplex",
    location: "Bodija, Ibadan",
    image: "/wossade_four.jpeg",
    description: "A premium detached duplex constructed in the heart of Bodija, featuring all rooms ensuite, modern interior finishes, and high-grade building materials."
  },
  {
    title: "3-Bedroom Short-Let Apartment",
    location: "Bodija, Ibadan",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    description: "A contemporary duplex designed specifically for short-stay clients seeking comfort, exclusivity, and a serene environment."
  },
  {
    title: "10-Unit Student Hostel",
    location: "Ojoo, Ibadan",
    image: "/wossade_hostel.jpg",
    description: "Located a few meters from the University of Ibadan, providing comfortable, secure, and self-contained units for students."
  },
   {
    title: "Twin Duplex Development",
    location: "Lekron Layout, Bodija GRA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    description: "Ongoing luxury twin duplex project designed for premium living with modern architecture and high-end finishing materials."
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
          Completed and Ongoing Projects
        </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            WOSSADE REALTY has executed and is currently developing a range of residential and multi-unit projects across Ibadan, reflecting the company’s commitment to quality workmanship and customer-centered delivery.
          </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-64 md:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm md:text-base font-medium line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 flex items-center gap-2 text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-emerald-600 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {project.location}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
