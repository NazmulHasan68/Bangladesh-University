import React from 'react';

export default function LeaderDescription() {
  const leaders = [
    { profession: 'The Chancellor', name: 'Professor Nazmul Hasan, PhD', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { profession: 'Vice-Chancellor', name: 'Dr. Ayesha Karim', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { profession: 'Pro Vice-Chancellor', name: 'Dr. Imran Hossain', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { profession: 'Dean of Science', name: 'Dr. Mahmood Al Hasan', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { profession: 'Dean of Arts', name: 'Dr. Sharmin Akhter', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  return (
    <div className="max-w-6xl md:mx-auto mx-4 my-5 flex md:flex-row flex-col gap-4">
      <div className="basis-1/4 bg-gray-100 p-4 rounded shadow hidden md:flex">
        <p className="text-center text-gray-500 ">Ads coming...</p>
      </div>
      <div className="basis-3/4">
        <h1 className="p-4 text-gray-700 text-xl font-semibold">
          Bangladesh University’s leadership provides strategic direction and guidance to achieve the university’s long-term goals, fostering innovation and an inclusive academic environment.
        </h1>
        {leaders.map((leader, index) => (
          <div key={index} className="flex gap-4 justify-between items-center border-b pb-4 mb-4">
            <div>
              <h2 className="text-lg font-bold">{leader.profession}</h2>
              <p className="text-gray-600">{leader.name}</p>
            </div>
            <div>
              <img src={leader.image} alt={leader.name} className="md:w-60 w-48 h-32 rounded-2xl md:h-40 object-cover border border-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
