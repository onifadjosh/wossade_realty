import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Sefiyat Olaide Akande Tijani",
    role: "Chairman & Founder",
    image:
      "/wossade-ceo.jpeg",
  },
  
  {
    name: "Arch Olumide Fetuga",
    role: "Project Manager",
    image:
      "/wossade-project-manager.jpeg",
  },
  {
    name: "Afolabi Adewale Segun",
    role: " Supply and Purchasing manager",
    image:
      "/wossade_afolabi.jpeg",
  },
  {
    name: "Yemi Kasali",
    role: "Client Representative",
    image:
      "/wossade-yemi.jpeg",
  },
  {
    name: "Azeez Opeyemi Idris",
    role: "Site Manager",
    image:
      "/wossade-site-manager.jpeg",
  },
  {
    name: "Oni Olanrewaju Emmanuel",
    role: "Architect",
    image:
      "/wossade_oni.jpeg",
  },
  {
    name: "Yomi Adegasi",
    role: "Architect",
    image:
      "/wossade_yomi.jpeg",
  },

  
  

  {
    name: "Peace Komolafe",
    role: "Marketing Executive",
    image:
      "/wossade-marketing.jpeg",
  },

  {
    name: "Ayanfe Oyedokun",
    role: "Store Manager",
    image:
      "/ayanfe.jpeg",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-emerald-900 text-white py-20 px-4 md:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Building dreams into reality with a commitment to excellence and
            innovation.
          </p>
        </div>

        {/* Company Overview */}
        <div className="py-20 px-4 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <Image
                  src="/wossade-team-header.jpeg"
                  alt="Construction Site"
                  className="object-cover object-top w-full h-full"
                  width={600}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                WOSSADE REALTY is an emerging but fast-growing real estate development and construction company dedicated to delivering residential and multi-unit properties that meet international quality standards. The company focuses on bridging critical gaps in real estate delivery by ensuring every project is driven by functionality, durability, and client satisfaction. With a development philosophy rooted in integrity, modern design, and seamless execution, WOSSADE REALTY continues to build a strong presence across strategic locations.


              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to deliver exceptional value to our clients
                through innovative design, superior quality construction, and
                timely delivery. We believe in building lasting relationships
                based on trust and transparency.
              </p>
            </div>
          </div>
        </div>

        <section className="foundation bg-emerald-900 py-12">
          <h2 className="font-semibold text-white text-center text-2xl md:text-3xl">OUR FOUNDATION</h2>
          <div className="/foundation-grid flex flex-col md:flex-row px-4 gap-5 container justify-center /items-center  mx-auto py-10">
            <div className="foundation-card bg-white p-5 rounded-2xl basis-1/3 flex items-center flex-col text-center gap-2.5">
              <Image src="/board.png" alt="wossade-realty foundation" width={50} height={50}/>
              <h3>Our Mission</h3>
              <p>
                To deliver world-class construction and engineering solutions
                that meet client expectations through quality, innovation,
                timeliness, and integrity.
              </p>
            </div>
            <div className="foundation-card bg-white p-5 rounded-2xl basis-1/3 flex items-center flex-col text-center gap-2.5">
              <Image src="/eye.png" alt="wossade-realty foundation" width={50} height={50}/>
              <h3>Our Vision</h3>
              <p>
                Building a home to remember. To be a leading construction company in Nigeria and across
                Africa, recognized for excellence, reliability, and sustainable
                infrastructure development.
              </p>
            </div>
            <div className="foundation-card bg-white p-5 rounded-2xl basis-1/3 flex items-center flex-col text-center gap-2.5">
              <Image src="/like.png" alt="wossade-realty foundation" width={50} height={50}/>
              <h3>Our Core Values</h3>
              <p>
                At Wossade Realty, our values guide every project we
                undertake. We are committed to integrity in all our dealings,
                maintaining the highest standards of quality, ensuring
                timeliness in project delivery, driving innovation through
                modern methods, and showing unwavering commitment to client
                satisfaction and lasting partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <div className="py-20 px-4 md:px-20 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind our success.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-center items-center place-content-center place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-100 group-hover:border-emerald-900 transition-colors duration-300 bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="192px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-emerald-700 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="why-us py-10">
          <h2 className="font-semibold text-black text-center text-2xl md:text-3xl">
            WHY CHOOSE US
          </h2>
          <div className="why-grid grid grid-cols-1 px-4 md:grid-cols-3 gap-5 container justify-center items-center  mx-auto py-10">
            <div className="why-card">
              <Image
                src="/material-symbols-light_order-approve-outline-rounded.png"
                alt=""
                width={40}
                height={40}
              />
              <h3>Proven Experience</h3>
              <p>Over 18 years delivering successful projects nationwide.</p>
            </div>

            <div className="why-card">
              <Image
                src="/covid_mutation-stronger.png"
                alt=""
                width={40}
                height={40}
              />
              <h3>Strong Reputation</h3>
              <p>Zero history of project abandonment or litigation.</p>
            </div>

            <div className="why-card">
              <Image src="/cil_badge.png" alt="" width={40} height={40} />
              <h3>Quality Assurance</h3>
              <p>Every project meets the highest engineering standards.</p>
            </div>

            <div className="why-card">
              <Image
                src="/iconamoon_delivery-fast-thin.png"
                alt=""
                width={40}
                height={40}
              />
              <h3>Timely Delivery</h3>
              <p>Projects completed on schedule, every time.</p>
            </div>

            <div className="why-card">
              <Image
                src="/streamline_gender-equality.png"
                alt=""
                width={40}
                height={40}
              />
              <h3>Modern Resources</h3>
              <p>A dedicated team supported by a full fleet of equipment.</p>
            </div>

            <div className="why-card">
              <Image
                src="/codicon_workspace-trusted.png"
                alt=""
                width={40}
                height={40}
              />
              <h3>Trusted by Institutions</h3>
              <p>
                Worked with FERMA, OAU, Cocoa Research Institute, and top banks.
              </p>
            </div>
          </div>
        </section>

        {/* Company Secretary Section */}
        <section className="py-20 px-4 md:px-20 bg-emerald-50 text-center">
            <div className="max-w-4xl mx-auto">
               <div className="mb-6 flex justify-center">
                   <div className="p-4 bg-emerald-100 rounded-full text-emerald-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                   </div>
               </div>
               <h2 className="text-3xl font-bold text-emerald-900 mb-6">The Company Secretary</h2>
               <h3 className="text-xl font-semibold text-emerald-800 mb-6">Guardian of Integrity and Compliance</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Company Secretary and the Legal Department are strategic partners in guiding Wossade toward its goals by ensuring rigorous legal compliance and ethical governance. A primary focus is conducting exhaustive due diligence for all land and property transactions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    This includes mandating all necessary pre-purchase searches, verifying compliance with building and purchasing regulations, and performing thorough background checks on all counterparties and assets. In all matters, the highest professional standard is our watchword, and we maintain zero tolerance for any unethical conduct.
                </p>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
