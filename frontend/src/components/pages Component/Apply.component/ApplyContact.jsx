import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

export default function ApplyContact() {
  return (
    <div className='max-w-6xl mt-5 mx-4 md:mx-auto bg-slate-100 rounded-3xl p-4 flex gap-4 items-center py-8 '>
      <div className='w-[60px] md:w-[100px] flex justify-center items-center text-xl md:text-3xl text-red-400'>
        <FaPhoneAlt/>
      </div>
      <div>
        <h1 className='text-md md:text-2xl font-semibold text-sky-950'>Contact Information for Assistance</h1>
        <p className='text-xs md:text-md text-sky-900 py-1'>If you encounter any difficulties, please contact us at  <span className='font-semibold'>admission@bu.edu.bd  </span>or  <span className='font-semibold'>+88 01755-559301, +88 01755-559320</span> <br/> You can also click here to submit detail information</p>
      </div>
    </div>
  )
}
