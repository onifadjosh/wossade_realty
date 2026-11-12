import React from "react";

const equipment = [
  {
    name: "Excavators",
    model: "CAT 320 GC",
    image: "https://thumbs.dreamstime.com/b/excavator-22093537.jpg",
    specs: "20 ton operating weight",
  },
  {
    name: "Bulldozers",
    model: "CAT D6T",
    image:
      "https://images.unsplash.com/photo-1629807473015-41699c4471b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyfGVufDB8fDB8fHww",
    specs: "200 HP net power",
  },
  {
    name: "Cranes",
    model: "Liebherr LTM 11200",
    image: "https://elebia.com/wp-content/uploads/2020/07/type-of-mobile-cranes.jpg",
    specs: "1,200 ton max capacity",
  },
  {
    name: "Loaders",
    model: "CAT 950 GC",
    image:
      "https://media.istockphoto.com/id/520735876/photo/heavy-equipment-machine-wheel-loader-on-construction-jobsite.jpg?s=612x612&w=0&k=20&c=GcuhLFlzXZHyZmcmAG-PmPnvQZBJGJwVurSi8K5xK10=",
    specs: "18 ton operating weight",
  },
];

const OurEquipment = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
            On site
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c]">
            Plant we put on the job.
          </h2>
          <p className="mt-4 text-lg text-[#10241c]/65 leading-relaxed">
            Excavators, dozers, cranes, and loaders for the groundwork before
            the finishes go in.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {equipment.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-2xl border border-[#10241c]/8 bg-[#f4f0e8]"
            >
              <div className="h-40 overflow-hidden bg-[#e7e1d6]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#10241c]">{item.name}</h3>
                <p className="mt-1 text-sm text-emerald-800">{item.model}</p>
                <p className="mt-3 text-xs tracking-wide text-[#10241c]/55">
                  {item.specs}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEquipment;
