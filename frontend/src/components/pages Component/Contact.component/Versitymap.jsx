import React from 'react';

export default function Versitymap() {
  return (
    <div className='max-w-5xl mx-4 md:mx-auto my-4'>
      <div>
        <h1 className='text-xl font-bold text-sky-900 py-4'>Find the location</h1>
      </div>
      <div>
        <iframe
          className='w-full md:w-[1000px] mx-2 border-2 border-gray-800 h-[250px]'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1183.8363779985207!2d90.34463266310333!3d23.766962372501855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c083149585f5%3A0xeb28ac94751626ca!2sBangladesh%20University!5e0!3m2!1sen!2sbd!4v1737090795073!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
