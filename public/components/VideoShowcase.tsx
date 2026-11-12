import React from "react";

const videos = [
  {
    url: "/videos/downtown-ibadan.mp4",
    title: "Downtown luxury apartment",
  },
  {
    url: "/videos/blue-duplex.mp4",
    title: "Blue duplex",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772688979/Property_1_wsh9o4.mov",
    title: "Property tour 01",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689318/Property_2_fgewdz.mov",
    title: "Property tour 02",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689623/Property_3_flcshi.mov",
    title: "Property tour 03",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689837/Property_4_liyh1u.mov",
    title: "Property tour 04",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689909/Property_5_cxagv5.mov",
    title: "Property tour 05",
  },
];

const VideoShowcase = () => {
  return (
    <section id="videos" className="bg-[#0c1f17] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 md:pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Walk through
        </p>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-xl">
            The rooms, not just the facade.
          </h2>
          <p className="max-w-sm text-white/60 leading-relaxed">
            Seven tours of recent Wossade homes. Press play and move through
            the finishes.
          </p>
        </div>
      </div>

      <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 sm:px-8 pb-20 md:pb-28 max-w-[90rem] mx-auto">
        {videos.map((video, index) => (
          <figure
            key={video.url}
            className="snap-start shrink-0 w-[82%] sm:w-[420px]"
          >
            <div className="overflow-hidden rounded-2xl bg-black aspect-[4/5] sm:aspect-[3/4]">
              <video
                src={video.url}
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                muted
              />
            </div>
            <figcaption className="mt-3 flex items-baseline gap-2 text-sm">
              <span className="text-white/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{video.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
