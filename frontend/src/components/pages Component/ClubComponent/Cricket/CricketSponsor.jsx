import React from 'react';

const sponsors = [
  { name: "Nike", logo: "https://picsum.photos/100?random=11", description: "Official sportswear partner." },
  { name: "Pepsi", logo: "https://picsum.photos/100?random=12", description: "Refreshing drinks sponsor." },
  { name: "Samsung", logo: "https://picsum.photos/100?random=13", description: "Technology and innovation partner." },
  { name: "Red Bull", logo: "https://picsum.photos/100?random=14", description: "Energy booster for the team." },
  { name: "Adidas", logo: "https://picsum.photos/100?random=15", description: "Official footwear sponsor." },
  { name: "Rolex", logo: "https://picsum.photos/100?random=16", description: "Timekeeping partner." },
];

export default function CricketSponsor() {
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2">Our Sponsors</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white p-3 md:p-6 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gray-200"
            />
            <h2 className="md:text-lg text-sm font-semibold text-center">{sponsor.name}</h2>
            <p className="md:text-sm text-xs text-gray-600 text-center mt-2">{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

