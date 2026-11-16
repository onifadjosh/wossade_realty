import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import PageHeader from "@/public/components/PageHeader";
import VideoShowcase from "@/public/components/VideoShowcase";
import Image from "next/image";
import React from "react";

const portfolioItems = [
  {
    title: "4-Bedroom Private Duplex",
    category: "Residential",
    image: "/wossade-bodija-duplex.jpg",
    description:
      "A premium detached duplex constructed in the heart of Bodija, featuring all rooms ensuite, modern interior finishes, and high-grade building materials.",
  },
  {
    title: "3-Bedroom Short-Let Apartment",
    category: "Hospitality",
    image: "/wossade_bodija.jpeg",
    description:
      "A contemporary duplex designed specifically for short-stay clients seeking comfort, exclusivity, and a serene environment.",
  },
  {
    title: "10-Unit Student Hostel",
    category: "Residential",
    image: "/wossade_hostell.jpeg",
    description:
      "Located a few meters from the University of Ibadan, providing comfortable, secure, and self-contained units for students.",
  },
  {
    title: "Twin Duplex Development",
    category: "Residential",
    image: "/wossade_lekron.jpeg",
    description:
      "Ongoing luxury twin duplex project designed for premium living with modern architecture and high-end finishing materials.",
  },
];

export default function Portfolio() {
  const [lead, ...rest] = portfolioItems;

  return (
    <main className="bg-[#f4f0e8]">
      <Navbar />
      <PageHeader eyebrow="Selected work" title="Homes across Ibadan.">
        Residential and multi-unit projects, from private duplexes to a hostel
        a few metres from the University of Ibadan.
      </PageHeader>

      <section className="px-5 sm:px-8 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto">
          <article className="grid lg:grid-cols-12 overflow-hidden rounded-[1.75rem] bg-white">
            <div className="relative lg:col-span-7 min-h-[280px] sm:min-h-[420px]">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                {lead.category}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#10241c]">
                {lead.title}
              </h2>
              <p className="mt-4 text-[#10241c]/70 leading-relaxed">
                {lead.description}
              </p>
            </div>
          </article>

          <div className="mt-5 grid md:grid-cols-3 gap-5">
            {rest.map((item) => (
              <article key={item.title}>
                <div className="relative h-64 overflow-hidden rounded-2xl bg-[#e7e1d6]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                  {item.category}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#10241c]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-[#10241c]/65 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase />
      <Footer />
    </main>
  );
}
