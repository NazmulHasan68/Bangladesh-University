import React from 'react';

const futurePrograms = [
  { title: "Cricket World Cup 2025", date: "2025-10-01", description: "The ultimate cricket tournament with top teams from around the world." },
  { title: "Asia Cup 2025", date: "2025-09-10", description: "The best teams from Asia battle for supremacy." },
  { title: "T20 International Series", date: "2025-08-15", description: "A fast-paced, exciting T20 series featuring top cricket nations." },
  { title: "IPL 2025", date: "2025-04-01", description: "India's biggest T20 league, bringing together the best of Indian and international talent." },
  { title: "Test Series: India vs Australia", date: "2025-12-01", description: "A historic test series between two of the world's most successful cricket teams." },
  { title: "Women’s Cricket World Cup", date: "2026-03-01", description: "The premier competition for women’s international cricket teams." },
  { title: "Champions Trophy", date: "2025-06-10", description: "A prestigious tournament where the best cricket teams compete for global dominance." },
  { title: "CPL 2025", date: "2025-07-05", description: "The Caribbean Premier League showcasing exciting cricket action." },
];

export default function CricketFutureProgram() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Upcoming Cricket Programs</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {futurePrograms.map((program, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-sm md:text-lg font-semibold text-center">{program.title}</h2>
            <p className="text-xs md:text-sm text-gray-600 text-center mt-2">{program.description}</p>
            <p className="text-xs md:text-sm text-gray-500 mt-4">{new Date(program.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
