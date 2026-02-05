import React from "react";
import Link from "next/link";
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
    image: "/wossade_estate.webp", // Replace with actual article image
  },
  {
    title: "Wossade Realty Commissioned in Ibadan, Targets Affordable Housing & Global Expansion",
    source: "Daily Economy",
    date: "2026",
    url: "https://dailyeconomy.ng/wossade-realty-commissioned-in-ibadan-targets-affordable-housing-global-expansion/",
    image: "/news.jpeg",
  },
  {
    title: "Real estate firm opens operations, targets affordable housing, global expansion",
    source: "Vanguard Nigeria",
    date: "2026",
    url: "https://www.vanguardngr.com/2026/01/real-estate-firm-opens-operations-targets-affordable-housing-global-expansion/",
    image: "/news.jpeg", 
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
            In The News
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See what the media is saying about our commitment to affordable housing and excellence in real estate development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-gray-200 hover:border-emerald-300 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="font-medium text-emerald-600">{item.source}</span>
                    {item.date && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span>{item.date}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-emerald-600 font-medium group-hover:text-emerald-700">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {newsItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>No news articles available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
