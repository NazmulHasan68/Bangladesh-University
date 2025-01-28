import React from 'react'

export default function ContactBUaddress() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto my-5 py-4 md:px-6 px-1 bg-slate-100 rounded-3xl'>
      <h1 className='text-2xl font-semibold text-sky-900'>Bangladesh University </h1>
      <div className='my-4 flex flex-col gap-1'>
        <div className='flex gap-4 items-center '>
            <h1 className='text-sm md:text-xl font-semibold text-sky-900 basis-1/4 md:basis-1/6'>Location </h1>
            <p className='text-xs md:text-xl font-medium text-sky-700 md:basis-6/8 basis-3/4'>: 5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka - 1207</p>
        </div>
        <div className='flex gap-4 items-center '>
            <h1 className='text-sm md:text-xl font-semibold text-sky-900 basis-1/4 md:basis-1/6'>Phone  </h1>
            <p className='text-xs md:text-xl font-medium text-sky-700 md:basis-6/8 basis-3/4'>: +88 0175555 9301, +88 0175555 9320, +88 0175555 9328</p>
        </div>
        <div className='flex gap-4 items-center '>
            <h1 className='text-sm md:text-xl font-semibold text-sky-900 basis-1/4 md:basis-1/6'>Email  </h1>
            <p className='text-xs md:text-xl font-medium text-sky-700 md:basis-6/8 basis-3/4'>: admission@bu.edu.bd</p>
        </div>
      </div>
    </div>
  )
}
