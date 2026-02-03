import React from 'react';

const equipment = [
    {
        name: "Excavators",
        model: "CAT 320 GC",
        image: "https://thumbs.dreamstime.com/b/excavator-22093537.jpg",
        specs: "20 Ton Operating Weight"
    },
    {
        name: "Bulldozers",
        model: "CAT D6T",
        image: "https://images.unsplash.com/photo-1629807473015-41699c4471b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyfGVufDB8fDB8fHww",
        specs: "200 HP Net Power"
    },
    {
        name: "Cranes",
        model: "Liebherr LTM 11200",
        image: "https://elebia.com/wp-content/uploads/2020/07/type-of-mobile-cranes.jpg",
        specs: "1200 Ton Max Capacity"
    },
    {
        name: "Loaders",
        model: "CAT 950 GC",
        image: "https://media.istockphoto.com/id/520735876/photo/heavy-equipment-machine-wheel-loader-on-construction-jobsite.jpg?s=612x612&w=0&k=20&c=GcuhLFlzXZHyZmcmAG-PmPnvQZBJGJwVurSi8K5xK10=",
        specs: "18 Ton Operating Weight"
    }

]

const OurEquipment = () => {
  return (
    <section className="py-20 md:py-24 px-4 md:px-8 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              World-Class Equipment
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl">
              We rely on industry-leading machinery to ensure precision, efficiency, and safety in every project we undertake.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-xl border-2 border-white/80 px-6 py-3 font-semibold hover:bg-white hover:text-emerald-900 transition-colors"
          >
            View Fleet
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-emerald-800/80 backdrop-blur-sm border border-white/10 overflow-hidden hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
            >
              <div className="h-44 w-full overflow-hidden bg-emerald-700/50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-emerald-300 text-sm mb-3">{item.model}</p>
                <div className="h-px bg-emerald-700/80 my-3" />
                <p className="text-emerald-100 text-xs font-mono">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEquipment
