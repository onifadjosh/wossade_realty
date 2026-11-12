import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import PageHeader from "@/public/components/PageHeader";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Sefiyat Olaide Akande Tijani",
    role: "Chairman & Founder",
    image: "/wossade-ceo.jpeg",
  },
  {
    name: "Arch Olumide Fetuga",
    role: "Project Manager",
    image: "/wossade-project-manager.jpeg",
  },
  {
    name: "Afolabi Adewale Segun",
    role: "Supply and Purchasing manager",
    image: "/wossade_afolabi.jpeg",
  },
  {
    name: "Yemi Kasali",
    role: "Client Representative",
    image: "/wossade-yemi.jpeg",
  },
  {
    name: "Azeez Opeyemi Idris",
    role: "Site Manager",
    image: "/wossade-site-manager.jpeg",
  },
  {
    name: "Oni Olanrewaju Emmanuel",
    role: "Architect",
    image: "/wossade_oni.jpeg",
  },
  {
    name: "Yomi Adegasi",
    role: "Architect",
    image: "/wossade_yomi.jpeg",
  },
  {
    name: "Ayanfe Oyedokun",
    role: "Store Manager",
    image: "/ayanfe.jpeg",
  },
];

const foundation = [
  {
    title: "Our Mission",
    icon: "/board.png",
    text: "To deliver world-class construction and engineering solutions that meet client expectations through quality, innovation, timeliness, and integrity.",
  },
  {
    title: "Our Vision",
    icon: "/eye.png",
    text: "Building a home to remember. To be a leading construction company in Nigeria and across Africa, recognized for excellence, reliability, and sustainable infrastructure development.",
  },
  {
    title: "Our Core Values",
    icon: "/like.png",
    text: "At Wossade Realty, our values guide every project we undertake. We are committed to integrity in all our dealings, maintaining the highest standards of quality, ensuring timeliness in project delivery, driving innovation through modern methods, and showing unwavering commitment to client satisfaction and lasting partnerships.",
  },
];

const reasons = [
  {
    title: "Proven Experience",
    text: "Over 5 years delivering successful projects nationwide.",
    icon: "/material-symbols-light_order-approve-outline-rounded.png",
  },
  {
    title: "Strong Reputation",
    text: "Zero history of project abandonment or litigation.",
    icon: "/covid_mutation-stronger.png",
  },
  {
    title: "Quality Assurance",
    text: "Every project meets the highest engineering standards.",
    icon: "/cil_badge.png",
  },
  {
    title: "Timely Delivery",
    text: "Projects completed on schedule, every time.",
    icon: "/iconamoon_delivery-fast-thin.png",
  },
  {
    title: "Modern Resources",
    text: "A dedicated team supported by a full fleet of equipment.",
    icon: "/streamline_gender-equality.png",
  },
  {
    title: "Trusted by Institutions",
    text: "Worked with a handful of organizations to erect their desired structure and bring their plans to life.",
    icon: "/codicon_workspace-trusted.png",
  },
];

export default function About() {
  return (
    <main className="bg-[#f4f0e8]">
      <Navbar />
      <PageHeader eyebrow="The company" title="About Wossade.">
        An Ibadan developer building residential and multi-unit properties to
        an international standard.
      </PageHeader>

      <section className="px-5 sm:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="relative lg:col-span-6 h-80 sm:h-[28rem] overflow-hidden rounded-[1.75rem] bg-[#e7e1d6]">
            <Image
              src="/wossade-team-header.jpeg"
              alt="The Wossade Realty team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#10241c]">
              Who we are
            </h2>
            <p className="mt-5 text-[#10241c]/70 text-lg leading-relaxed">
              WOSSADE REALTY is an emerging but fast-growing real estate
              development and construction company dedicated to delivering
              residential and multi-unit properties that meet international
              quality standards. The company focuses on bridging critical gaps
              in real estate delivery by ensuring every project is driven by
              functionality, durability, and client satisfaction. With a
              development philosophy rooted in integrity, modern design, and
              seamless execution, WOSSADE REALTY continues to build a strong
              presence across strategic locations.
            </p>
            <p className="mt-5 text-[#10241c]/70 text-lg leading-relaxed">
              Our mission is to deliver exceptional value to our clients
              through innovative design, superior quality construction, and
              timely delivery. We believe in building lasting relationships
              based on trust and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1f17] text-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Our foundation
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {foundation.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white text-[#10241c] p-6"
              >
                <Image src={item.icon} alt="" width={40} height={40} />
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#10241c]/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
            People
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c]">
            The team on the job.
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {teamMembers.map((member) => (
              <article key={member.name}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f0e8]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold tracking-tight text-[#10241c]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-emerald-800">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Why Wossade
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c] max-w-xl">
            Why clients stay with the firm.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl bg-white border border-[#10241c]/8 p-6"
              >
                <Image src={reason.icon} alt="" width={36} height={36} />
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#10241c]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#10241c]/65">
                  {reason.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto rounded-[1.75rem] bg-[#0c1f17] text-white p-8 sm:p-12 md:p-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Governance
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-xl">
            The Company Secretary
          </h2>
          <p className="mt-2 text-emerald-200/90">
            Guardian of integrity and compliance
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-white/75 text-lg leading-relaxed">
            <p>
              The Company Secretary and the Legal Department are strategic
              partners in guiding Wossade toward its goals by ensuring rigorous
              legal compliance and ethical governance. A primary focus is
              conducting exhaustive due diligence for all land and property
              transactions.
            </p>
            <p>
              This includes mandating all necessary pre-purchase searches,
              verifying compliance with building and purchasing regulations, and
              performing thorough background checks on all counterparties and
              assets. In all matters, the highest professional standard is our
              watchword, and we maintain zero tolerance for any unethical
              conduct.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
