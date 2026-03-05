"use client"
import React from "react";


const videos = [
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772688979/Property_1_wsh9o4.mov",
    title: "Luxury Property Tour 1",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689318/Property_2_fgewdz.mov",
    title: "Luxury Property Tour 2",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689623/Property_3_flcshi.mov",
    title: "Luxury Property Tour 3",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689837/Property_4_liyh1u.mov",
    title: "Luxury Property Tour 4",
  },
  {
    url: "https://res.cloudinary.com/dbbng3r4y/video/upload/v1772689909/Property_5_cxagv5.mov",
    title: "Luxury Property Tour 5",
  },
];

const VideoShowcase = () => {
  return (
    <section id="videos" className="py-20 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
          Exquisite Property Tours
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Experience our latest developments through these cinematic property showcases, highlighting modern architecture and premium finishes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <video
                src={video.url}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
                muted
              />
              <div className="absolute top-4 left-4">
                 <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Tour {index + 1}
                 </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
