import React from "react";
import Image from "next/image";

interface NewsItem {
  title: string;
  source: string;
  date?: string;
  url: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Wossade Realty Debuts in Ibadan, Eyes Affordable Housing",
    source: "Punch Nigeria",
    date: "2026",
    url: "https://punchng.com/wossade-realty-debuts-in-ibadan-eyes-affordable-housing/",
    image: "/wossade_estate.webp",
  },
  {
    title:
      "Wossade Realty Commissioned in Ibadan, Targets Affordable Housing & Global Expansion",
    source: "Daily Economy",
    date: "2026",
    url: "https://dailyeconomy.ng/wossade-realty-commissioned-in-ibadan-targets-affordable-housing-global-expansion/",
    image: "/news.jpeg",
  },
  {
    title:
      "Real estate firm opens operations, targets affordable housing, global expansion",
    source: "Vanguard Nigeria",
    date: "2026",
    url: "https://www.vanguardngr.com/2026/01/real-estate-firm-opens-operations-targets-affordable-housing-global-expansion/",
    image: "/news.jpeg",
  },
];

const NewsSection = () => {
  const [feature, ...rest] = newsItems;

  return (
    <section id="news" className="bg-[#f4f0e8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
          In the press
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c] max-w-xl">
          Coverage of the Ibadan opening.
        </h2>

        <div className="mt-10 grid lg:grid-cols-5 gap-5">
          <a
            href={feature.url}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-3 group block"
          >
            <div className="relative h-72 sm:h-96 overflow-hidden rounded-[1.75rem] bg-white">
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              {feature.source}
              {feature.date ? ` · ${feature.date}` : ""}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#10241c] group-hover:text-emerald-800 transition-colors">
              {feature.title}
            </h3>
          </a>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 rounded-[1.5rem] bg-white p-6 sm:p-7 flex flex-col justify-between border border-[#10241c]/6 hover:border-emerald-800/30 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                  {item.source}
                  {item.date ? ` · ${item.date}` : ""}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#10241c] leading-snug group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <span className="mt-6 text-sm font-medium text-[#10241c]/60">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
