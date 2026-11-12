import Image from "next/image";
import Link from "next/link";
import React from "react";

const facts = [
  { stat: "5", label: "Years building in Ibadan" },
  { stat: "4", label: "Homes and hostels delivered" },
  { stat: "2pm", label: "Short-let check-in" },
];

const Headerr = () => {
  return (
    <>
      <header className="relative min-h-[85vh] lg:min-h-screen bg-[#0c1f17] text-white flex items-end">
        <Image
          src="/wossade-team-header.jpeg"
          alt="The Wossade Realty team on site"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1f17]/95 via-[#0c1f17]/55 to-black/15"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-14 lg:py-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Ibadan · Construction & short-lets
          </p>
          <h1 className="mt-5 max-w-xl text-[3.1rem] sm:text-6xl xl:text-7xl font-semibold tracking-[-0.035em] leading-[0.92]">
            Building a home to remember.
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-white/75">
            Residential development and furnished stays across Bodija, Lekron
            Layout, and the University of Ibadan second gate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-[#0c1f17] font-semibold hover:bg-emerald-50 transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors"
            >
              See the work
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg border-t border-white/15 pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {fact.stat}
                </dt>
                <dd className="mt-1 text-xs sm:text-sm text-white/60 leading-snug">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="bg-[#f4f0e8] border-b border-[#10241c]/8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
              Book a stay
            </p>
            <p className="mt-2 text-sm text-[#10241c]/70 leading-relaxed">
              WhatsApp or call. Check-in 2:00 p.m., check-out 12:00 noon.
            </p>
            <Link
              href="/house-rules"
              className="mt-3 inline-flex text-sm font-medium text-emerald-800 underline underline-offset-4"
            >
              Read house rules
            </Link>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#10241c]/45">
              Phone
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-[#10241c]">
              <a href="tel:+2348131180078" className="hover:text-emerald-800">
                0813 118 0078
              </a>
              <a href="tel:+13467737627" className="hover:text-emerald-800">
                +1346 7737627
              </a>
              <a href="tel:+2348038608112" className="hover:text-emerald-800">
                0803 860 8112
              </a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#10241c]/45">
              Email
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-[#10241c]">
              <a href="mailto:wossaderealty@gmail.com" className="hover:text-emerald-800">
                wossaderealty@gmail.com
              </a>
              <a href="mailto:azeezidris59@gmail.com" className="hover:text-emerald-800">
                azeezidris59@gmail.com
              </a>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#10241c]/45">
              Instagram
            </p>
            <a
              href="https://instagram.com/wosaade_homes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm font-medium text-[#10241c] hover:text-emerald-800"
            >
              @wosaade_homes
            </a>
            <p className="mt-3 text-sm text-[#10241c]/70 leading-relaxed">
              Office: close to UI second gate, behind First Bank, Ojoo, Ibadan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headerr;
