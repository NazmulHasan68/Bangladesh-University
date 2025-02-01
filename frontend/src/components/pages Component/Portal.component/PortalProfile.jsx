import React from 'react'

export default function PortalProfile() {
  return (
    <div className='mx-2 md:mx-6 mt-2 md:mt-6 md:w-full'>
      <div className='flex md:gap-2 items-center bg-white shadow-lg p-2'>
        <div className=' basis-1/4'>
            <img src='https://t4.ftcdn.net/jpg/07/57/59/25/360_F_757592568_v96NBkRahyTl9QFa99qpcmePYnfoXwZq.jpg' className=' h-24 w-24 md:h-36 md:w-36 object-cover' />
        </div>
        <div className='3/4 text-sky-900 py-2'>
            <h1 className='text-xl font-bold py-2 text-center'>Personal Details</h1>
            <p><span className='font-semibold'>Full name </span> : <span>Nazmul Hasan</span></p>
            <p><span className='font-semibold'>Father's name</span> : <span>ABC Islam</span></p>
            <p><span className='font-semibold'>Mother's name</span> : <span>abc Akter</span></p>
            <p><span className='font-semibold'>Date of Birth </span>: <span>19-05-1985</span></p>
            <p><span className='font-semibold'>Region </span>: <span>Islam</span></p>
            <p><span className='font-semibold'>Nationality </span>: <span>Bangladesh</span></p>
            <p><span className='font-semibold'>Sex </span>: <span>Male</span></p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 p-4 bg-white shadow-lg text-sky-950 my-4'>
        <div className='flex-1'>
            <h1 className='text-xl font-bold'>SSC Result : </h1>
            <div className='mt-2'>
                <p><span className='font-semibold text-sky-800'>SSC GPA :</span> 4.76 </p>
                <p><span className='font-semibold text-sky-800'>passing school:</span> Government high school</p>
                <p><span className='font-semibold text-sky-800'>passing Board: </span> Comilla</p>
            </div>
        </div>
        <div className=' flex-1'>
            <h1 className='text-xl font-bold'>HSC Result : </h1>
            <div className='mt-2'>
                <p><span className='font-semibold text-sky-800'>HSC GPA :</span> 4.66 </p>
                <p><span className='font-semibold text-sky-800'>passing school:</span> Government school and college</p>
                <p><span className='font-semibold text-sky-800'>passing Board: </span> Comilla</p>
            </div>
        </div>
      </div>

      <div className=' p-4 bg-white shadow-lg'>
        <h1 className='text-xl font-semibold text-center pb-6 text-sky-900'>Address </h1>
        <div className='flex flex-col md:flex-row gap-4 text-sky-900'>
            <div className='flex-1'>
                <h1 className='text-md font-semibold'>Parmanent Address</h1>
                <div>
                    <p>Village/Area : Moutopic </p>
                    <p>Polic station : titas </p>
                    <p>Distict : Comilla </p>
                    <p>Divition : chottogram</p>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='text-md font-semibold'>Presnt Address</h1>
                <div>
                    <p>Village/Area : Dhaka uddan </p>
                    <p>Polic station : Muhammdpur </p>
                    <p>Distict : Dhaka </p>
                    <p>Divition : Dhaka</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
