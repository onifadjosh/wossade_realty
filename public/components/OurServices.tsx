import React from "react";

const services = [
  {
    title: "Building Construction",
    description: "Residential and commercial structures, built to last.",
    items: [
      "Road construction",
      "Drain channels",
      "Culverts",
      "Overhead bridges",
      "Concrete walkways",
      "Building structures",
      "Structural steel",
    ],
  },
  {
    title: "Electrical & Mechanical",
    description: "Installations and the heavy work under the finishes.",
    items: [
      "Electrical installations",
      "Mechanical installations",
      "Special roofing",
      "Heavy and light foundations",
    ],
  },
  {
    title: "Project Delivery",
    description: "From drawings to handover, including furnished short-lets.",
    items: [
      "Design and build",
      "Management contracting",
      "Subcontracting",
      "Airbnb stays in Bodija and UI second gate",
    ],
  },
  {
    title: "Materials & Production",
    description: "Supply and production for the sites we run.",
    items: ["Quarry supplies", "Block production", "Subcontracting works"],
  },
  {
    title: "Finishing & Exterior",
    description: "The last layer guests and owners actually live with.",
    items: [
      "Aluminum works",
      "Landscaping",
      "Swimming pools",
      "Interlocking paving",
    ],
  },
  {
    title: "Renovation",
    description: "Existing buildings brought up to a current standard.",
    items: ["Structural renovation", "Modernization", "Restoration"],
  },
];

const OurServices = () => {
  return (
    <section id="services" className="bg-[#f4f0e8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-6 md:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
            What we do
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c]">
            Construction, supply, and a finished place to stay.
          </h2>
          <p className="mt-4 text-lg text-[#10241c]/65 leading-relaxed">
            One team for the structure, the services, the finishes, and the
            short-let apartments we operate in Ibadan.
          </p>
        </div>

        <div className="border-b border-[#10241c]/10">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-[#10241c]/10"
            >
              <p className="md:col-span-1 text-sm tabular-nums text-emerald-800 font-medium pt-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold tracking-tight text-[#10241c]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[#10241c]/65 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="md:col-span-7 flex flex-wrap gap-2 content-start">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-white text-sm text-[#10241c]/80 border border-[#10241c]/8"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
