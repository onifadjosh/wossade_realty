import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Building Construction",
    description: "Expert execution of residential and commercial structures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    items: [
      "Road construction",
      "Drain channel construction",
      "Culverts (box and rings)",
      "Overhead bridges",
      "Concrete walkways",
      "Building structures",
      "Structural steel works"
    ]
  },
  {
    title: "Electrical & Mechanical",
    description: "Comprehensive installation and maintenance services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    items: [
      "Electrical installations",
      "Mechanical installations",
      "Special roofing works",
      "Heavy and light-duty foundations"
    ]
  },
  {
    title: "Project Delivery Services",
    description: "Seamless project management from start to finish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    items: [
      "Design and build",
      "Management contracting",
      "Subcontracting works"
    ]
  },
  {
    title: "Materials & Production",
    description: "High-quality supplies for your construction needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    items: [
      "Quarries supplies",
      "Block production",
      "Subcontracting works"
    ]
  },
  {
    title: "Finishing & Exterior",
    description: "Adding the perfect final touch to your property.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    items: [
      "Aluminum works",
      "Landscaping works",
      "Swimming pool construction",
      "Interlocking paving"
    ]
  },
  {
    title: "Renovation",
    description: "Breathing new life into existing structures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    items: [
      "Structural renovation",
      "Modernization",
      "Restoration"
    ]
  }
];

const OurServices = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="text-center flex flex-col gap-4 mb-16 px-4">
        <h1 className="font-semibold text-emerald-900 text-center text-3xl md:text-5xl">
          Our Services
        </h1>
        <p className="md:text-xl text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive construction and infrastructure solutions tailored to
          meet your project needs with precision and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 max-w-[1400px] mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            <div className="mb-6 text-emerald-900 bg-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {service.description}
            </p>

            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                 <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-900 group-hover:bg-emerald-900 group-hover:text-white transition-all duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                 </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
