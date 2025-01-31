import React from 'react'

export default function CareerContent() {
  return (
    <div className='max-w-7xl md:mx-auto mx-4 my-5 flex gap-4 md:flex-row flex-col items-center'>
      <p className='text-sky-900 text-xs md:text-xl md:w-[60%]'>
      Bangladesh University strives to be a leading institution in the Global South, fostering 
      academic excellence, innovative thinking, and the skills needed to address modern challenges.
       Accredited by the UGC and approved by the Ministry of Education, the university is committed 
       to national development and preparing students for a knowledge-based economy. We offer a dynamic,
        inclusive environment that values excellence, diversity, and creativity, with opportunities 
        in academic, administrative, and technical fields. Join us in shaping the future of education 
        and making a meaningful impact.
      </p>
      <img src='https://www.insidehighered.com/sites/default/files/media/GettyImages-1161949895.jpg' className='md:w-[40%] p-5 w-full rounded-2xl h-[200px] md:h-full object-cover' />
    </div>
  )
}
