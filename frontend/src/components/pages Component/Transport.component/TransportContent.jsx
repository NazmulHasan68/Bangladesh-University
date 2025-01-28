import React from 'react'

export default function TransportContent() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto my-10 text-sky-900'>
      <h1><span className='font-bold'>Bangladesh University</span> offers a reliable, safe, and comfortable transport 
        service for its students, featuring air-conditioned buses that operate on 
        multiple routes across Dhaka city. This service is designed to provide an 
        affordable and convenient commuting option for students.</h1>
        <p className='mt-2 font-semibold'> Service Availability: </p>
        <p>01. Days: Sunday to Thursday</p>
        <p>02. Exclusions: Weekends, government holidays, and semester breaks</p>
        
        <button className='px-8 mt-5 py-3 rounded-full bg-red-400 hover:bg-red-500 text-white ml-[55%] md:ml-[75%]'>Download Bus Schedule</button>
    </div>
  )
}
