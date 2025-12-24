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
    <div className="py-20 px-4 md:px-20 bg-emerald-900 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className='max-w-2xl'>
                 <h1 className="text-3xl md:text-5xl font-bold mb-4">World-Class Equipment</h1>
                <p className="text-emerald-100 text-lg">
                    We rely on industry-leading machinery to ensure precision, efficiency, and safety in every project we undertake.
                </p>
            </div>
           
            <button className="border border-white hover:bg-white hover:text-emerald-900 px-6 py-2 transition-colors">
                View Fleet
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
                <div key={index} className="bg-emerald-800 p-4 pb-6 rounded-lg hover:-translate-y-2 transition-transform duration-300">
                    <div className="h-48 w-full overflow-hidden rounded mb-4 bg-emerald-700">
                         <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-emerald-300 text-sm mb-2">{item.model}</p>
                    <div className='w-full h-[1px] bg-emerald-700 my-3'></div>
                     <p className="text-emerald-100 text-xs font-mono">{item.specs}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurEquipment
