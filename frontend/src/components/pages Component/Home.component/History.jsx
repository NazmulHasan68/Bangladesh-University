import React from 'react'
import blogImage3 from '../../../assets/commonPhoto/home3.jpg'
export default function History() {
  return (
    <div className='mx-2 md:mx-auto bg-slate-100 rounded-3xl p-2 max-w-6xl relative mt-32 mb-10'>
      <div className='w-[80%] left-10 md:left-28 bg-red-500 rounded-3xl h-32 md:h-40 absolute -top-20'>
          <img src={blogImage3} className='w-full h-full object-cover rounded-3xl'/>  
      </div>
      <div className='mt-16 md:mt-24'>
        <h1 className='font-semibold text-lg md:text-xl text-center text-sky-800'>Welcome to Bangladesh University</h1>
        <p className='text-xs md:text-md md:p-6 p-2 text-sky-950'>Bangladesh University (BU) started its journey in 2001. Since then it has been providing quality
             higher education at a minimum cost especially for the financially underprivileged. For more than 
             a decade, BU has been increasing and nurturing talent within the youth with modern knowledge and 
             technology. With the international affiliations, BU aims at making its students capable and 
             ethical leaders to lead and represent our nation around the world.
            Under the Private University Act (1992), BU has been approved by the Government of the People's 
            Republic of Bangladesh. The University maintains close collaboration with the University Grants 
            Commission (UGC) including several American, British, Netherlands and other universities across
             the globe with its noble vision and mission since 2001. Bangladesh University strives to attain 
             perfection in its efforts to educate the youth of Bangladesh.</p>
      </div>
    </div>
  )
}
