import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import React from "react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "4-Bedroom Private Duplex",
    category: "Residential",
    image: "/wossade-four-bed.jpeg",
    description: "A premium detached duplex constructed in the heart of Bodija, featuring all rooms ensuite, modern interior finishes, and high-grade building materials."
  },
  {
    title: "3-Bedroom Short-Let Apartment",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    description: "A contemporary duplex designed specifically for short-stay clients seeking comfort, exclusivity, and a serene environment."
  },
  {
    title: "10-Unit Student Hostel",
    category: "Residential",
    image: "/wossade_hostell.jpeg",
    description: "Located a few meters from the University of Ibadan, providing comfortable, secure, and self-contained units for students."
  },
   {
    title: "Twin Duplex Development",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    description: "Ongoing luxury twin duplex project designed for premium living with modern architecture and high-end finishing materials."
  }
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-white">
          <div className="bg-emerald-900 text-white py-20 px-4 md:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
             A range of residential and multi-unit projects across Ibadan, reflecting our commitment to quality workmanship.
          </p>
        </div>

        <div className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                        <div className="relative h-96 w-full bg-gray-100">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <span className="text-emerald-400 font-medium text-sm tracking-wider uppercase mb-2 bg-emerald-900/50 w-fit px-2 py-1 rounded">{item.category}</span>
                            <h3 className="text-3xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-200 text-lg leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
      </div>
      <Footer />
    </>
  );
}
