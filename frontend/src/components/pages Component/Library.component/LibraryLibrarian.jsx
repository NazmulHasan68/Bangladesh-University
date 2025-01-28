import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './librarian.css'; // Ensure custom styles are loaded

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function LibraryLibrarian() {
  return (
    <div className='max-w-5xl md:mx-auto mx-4'>
      <div>
        <h1 className='text-center text-2xl font-semibold text-sky-800'>Librarian and Staff</h1>
        <div className='flex md:flex-row flex-col gap-1 justify-between items-center'>
            <div className='text-slate-700'>
                <p>Librarians provide access to information, promote lifelong learning, assist with research, engage communities, preserve culture, support creativity, ensure job security, manage digital resources, offer equal access, and contribute to societal growth.</p>
            </div>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={10}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000, // Auto-scroll after 1 second
              disableOnInteraction: false, // Keep autoplay working even after user interacts
            }}
            modules={[Pagination, Autoplay]} // Include Autoplay module
            className="mySwiper "
          >
            {/* Example Slide 1 */}
            <SwiperSlide className="flex justify-center items-center">
              <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png" // Same working image URL
                  alt="Librarian"
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-lg">Librarian Name</h3>
                <p className="text-sm text-gray-600">Position or Role</p>
              </div>
            </SwiperSlide>

            {/* Example Slide 2 */}
            <SwiperSlide className="flex justify-center items-center">
              <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png" // Same working image URL
                  alt="Librarian"
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-lg">Librarian Name</h3>
                <p className="text-sm text-gray-600">Position or Role</p>
              </div>
            </SwiperSlide>

            {/* Example Slide 3 */}
            <SwiperSlide className="flex justify-center items-center">
              <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png" // Same working image URL
                  alt="Librarian"
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-lg">Librarian Name</h3>
                <p className="text-sm text-gray-600">Position or Role</p>
              </div>
            </SwiperSlide>

            {/* Example Slide 4 */}
            <SwiperSlide className="flex justify-center items-center">
              <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png" // Same working image URL
                  alt="Librarian"
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-lg">Librarian Name</h3>
                <p className="text-sm text-gray-600">Position or Role</p>
              </div>
            </SwiperSlide>

            {/* Example Slide 5 */}
            <SwiperSlide className="flex justify-center items-center">
              <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center bg-transparent">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png" // Same working image URL
                  alt="Librarian"
                  className="w-full h-[200px] object-cover rounded-md mb-2"
                />
                <h3 className="font-semibold text-lg">Librarian Name</h3>
                <p className="text-sm text-gray-600">Position or Role</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

