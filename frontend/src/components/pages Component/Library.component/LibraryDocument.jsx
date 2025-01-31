import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

export default function LibraryDocument() {
  return (
    <div className='max-w-7xl md:mx-auto my-10 mx-4 flex-col md:flex-row flex gap-4 justify-between'>
      <div className='md:w-[60%] bg-slate-50 p-4 rounded-xl '>
        <h1 className='text-center text-2xl text-sky-800 py-4'>Library Documents</h1>
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex justify-center items-center py-12 gap-4 p-4 rounded-xl bg-slate-200 shadow-md'>
                <FaArrowAltCircleDown className='text-5xl text-red-400'/>
                <div>
                    <p className='text-sky-800 font-medium py-1 line-clamp-1'>Membership Form</p>
                    <button className='px-4 py-1 rounded-full bg-red-400 hover:bg-red-500 text-white'>Download</button>
                </div>
            </div>
            
            <div className='flex justify-center items-center py-12 gap-4 p-4 rounded-xl bg-slate-200 shadow-md'>
                <FaArrowAltCircleDown className='text-5xl text-red-400'/>
                <div>
                    <p className='text-sky-800 font-medium py-1'>Teacher Form</p>
                    <button className='px-4 py-1 rounded-full bg-red-400 hover:bg-red-500 text-white'>Download</button>
                </div>
            </div>

            <div className='flex justify-center items-center py-12 gap-4 p-4 rounded-xl bg-slate-200 shadow-md'>
                <FaArrowAltCircleDown className='text-5xl text-red-400'/>
                <div>
                    <p className='text-sky-800 font-medium py-1'>Staff Form</p>
                    <button className='px-4 py-1 rounded-full bg-red-400 hover:bg-red-500 text-white'>Download</button>
                </div>
            </div>

            <div className='flex justify-center items-center py-12 gap-4 p-4 rounded-xl bg-slate-200 shadow-md'>
                <FaArrowAltCircleDown className='text-5xl text-red-400'/>
                <div>
                    <p className='text-sky-800 font-medium py-1'>Faculty Form</p>
                    <button className='px-4 py-1 rounded-full bg-red-400 hover:bg-red-500 text-white'>Download</button>
                </div>
            </div>

        </div>
      </div>
      
      <div className='bg-slate-50 p-3 rounded-xl md:w-[40%]'>
        <div className='p-4'>
            <div className='flex justify-center items-center gap-4'>
                <FaCircleUser className='text-4xl text-sky-800'/>
                <h1 className='text-sky-900 text-xl md:text-2xl font-bold'>Library Membership</h1>
            </div>
            <div className='grid grid-cols-2 gap-2 my-4'>
                <button className='px-4 rounded-xl py-2 bg-sky-900 text-white text-center text-xs md:text-sm'>Faculty Staff Membership<br/> Application</button>
                <button className='px-4 rounded-xl py-2  bg-sky-900 text-white text-center text-xs md:text-sm'>Student Membership<br/> Application</button>
            </div>
            <div className='py-10'>
                <p className='text-sm md:texl-xl font-bold text-slate-600'>Unloack Future, one page at the time - Explore endless possiblities at Bangladesh University Library</p>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
