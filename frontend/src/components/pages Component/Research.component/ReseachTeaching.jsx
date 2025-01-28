import React from 'react';

export default function ResearchTeaching() {
  return (
    <div className='max-w-6xl md:mx-auto mx-4 my-8 p-6 bg-slate-100 rounded-xl shadow-lg'>
      <div className='mb-8'>
        <h1 className='text-3xl text-sky-900 font-bold mb-4'>Teaching</h1>
        <p className='text-md md:text-lg text-sky-900 leading-relaxed'>
          Each department, school, and institute at Bangladesh University forms its 
          own academic community, focused on advancing knowledge in specific subjects. 
          These communities often collaborate on joint courses and interdisciplinary 
          research projects. At the heart of Bangladesh University's education is the 
          student, with teachers committed to providing pedagogical support and encouraging 
          creative thinking and innovation.
        </p>
      </div>
      <div className='flex flex-row justify-between items-center gap-4 md:gap-10 md:px-4'>
        <img 
          src='https://picsum.photos/400/300?education' 
          alt='Teaching Image 1' 
          className='w-48 md:flex-1 md:h-[200px] h-[150px] object-cover rounded-2xl shadow-md'
        />
        <img 
          src='https://picsum.photos/400/300?university' 
          alt='Teaching Image 2' 
          className='w-48 md:flex-1 md:h-[200px] h-[150px] object-cover rounded-2xl shadow-md'
        />
      </div>
        <h1 className='text-md md:text-lg font-bold text-sky-900 leading-relaxed mt-5 py-4'>Teaching Style and Learning Formats at Bangladesh University</h1>
      <p className='text-xs md:text-lg text-sky-900 leading-relaxed'>
        Bangladesh University offers high-quality, focused, and concise courses designed to 
        facilitate swift career progression for students. This is achieved through close 
        collaboration between supervisors and students, employing small group teaching methodologies. 
        Teaching styles, formats, and faculty contact frequency vary across courses. Advanced courses 
        typically involve significant case-based studies, complemented by seminars, workshops, and 
        lectures where students analyze and present solutions to assigned problems and tasks.
      </p>
    </div>
  );
}
