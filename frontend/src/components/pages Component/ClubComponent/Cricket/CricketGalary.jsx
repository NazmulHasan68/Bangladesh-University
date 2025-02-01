import React from 'react';

const galleryItems = [
  { title: "Match 1", image: "https://picsum.photos/200?random=1", description: "An intense cricket match." },
  { title: "Match 2", image: "https://picsum.photos/200?random=2", description: "Team A vs Team B." },
  { title: "Match 3", image: "https://picsum.photos/200?random=3", description: "A thrilling final." },
  { title: "Match 4", image: "https://picsum.photos/200?random=4", description: "A close competition." },
  { title: "Match 5", image: "https://picsum.photos/200?random=5", description: "A nail-biting finish." },
  { title: "Match 6", image: "https://picsum.photos/200?random=6", description: "The winning moment." },
  { title: "Match 7", image: "https://picsum.photos/200?random=7", description: "Celebrating victory." },
  { title: "Match 8", image: "https://picsum.photos/200?random=8", description: "A stunning catch." },
];

export default function CricketGallery() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Cricket Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-sm md:text-lg font-semibold text-center">{item.title}</h2>
            <p className="text-xs md:text-sm text-gray-600 text-center mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
