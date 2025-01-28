import React from 'react';

export default function TransportPolicy() {
  return (
    <div className='max-w-5xl md:mx-auto my-10 text-sky-800 mx-2 p-4 bg-slate-100 rounded-2xl'>
      <h1 className='text-xl md:text-2xl py-4'>General Instructions for Passengers</h1>
      <ul className='list-decimal list-inside text-xs '>
        <li>Passengers must be at the designated bus stops at least five minutes before the scheduled pickup time.</li>
        <li>The bus will not wait for passengers beyond the scheduled departure time.</li>
        <li>Seats are available on a "First come, First served" basis; standing is not allowed once seats are filled.</li>
        <li>Only designated stoppages will be used for pickup and drop-off; requests for unscheduled stops will not be entertained.</li>
        <li>Passengers must present their valid ID cards to the bus conductor before boarding.</li>
        <li>New students must show a photocopy of their payment receipt until they receive their ID cards.</li>
        <li>Smoking, eating, or drinking is strictly prohibited inside the bus to maintain cleanliness.</li>
        <li>Passengers are not allowed to carry hazardous materials, including flammable substances and sharp objects, inside the bus.</li>
        <li>Buses are equipped with GPS tracking and surveillance cameras for passenger safety.</li>
        <li>Passengers must refrain from any behavior that could disturb others, such as playing loud music or engaging in disruptive activities.</li>
        <li>Children under the age of 10 must be accompanied by an adult at all times during the journey.</li>
        <li>The transport service reserves the right to refuse boarding to passengers who violate the rules or exhibit inappropriate behavior.</li>
      </ul>
    </div>
  );
}
