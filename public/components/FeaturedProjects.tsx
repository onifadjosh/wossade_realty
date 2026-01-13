import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "4-Bedroom Private Duplex",
    location: "Bodija, Ibadan",
    image: "/wossade-four-bed.jpeg",
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
    <div className="py-20 px-4 md:px-20 bg-gray-50">
      <div className="mb-12 text-center">
         <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-4">Completed and Ongoing Projects</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            WOSSADE REALTY has executed and is currently developing a range of residential and multi-unit projects across Ibadan, reflecting the company’s commitment to quality workmanship and customer-centered delivery.
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                 <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={200}
                    className={`${index==2?"object-cover object-center /object-[top-30%_center]":"object-cover object-center"} w-full h-full group-hover:scale-110 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <p className="text-white font-medium">{project.description}</p>
                  </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">{project.title}</h3>
              <p className="text-gray-500 flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-emerald-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-emerald-900 text-white font-semibold rounded hover:bg-emerald-800 transition-colors">
                View All Projects
            </button>
       </div>
    </div>
  );
};

export default FeaturedProjects;
