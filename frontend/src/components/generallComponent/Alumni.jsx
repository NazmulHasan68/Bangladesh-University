import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import custom styles if needed
import './style.css';

// Import user images
import user1 from '../../assets/user/user2.jpg';
import user3 from '../../assets/user/user3.jpg';
import user4 from '../../assets/user/user4.jpg';
import user5 from '../../assets/user/user5.jpg';
import user6 from '../../assets/user/user6.jpg';
import user7 from '../../assets/user/user7.jpg';

// Import required Swiper modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Alumni() {
    const users = [
        { name: "Nazmul Hasan", job: "Web Developer", company: "ABC Ltd.", img: user1 },
        { name: "Aisha Khan", job: "Graphic Designer", company: "XYZ Inc.", img: user3 },
        { name: "Michael Brown", job: "Project Manager", company: "Tech Solutions", img: user4 },
        { name: "Sophia Lee", job: "Software Engineer", company: "Innovatech", img: user5 },
        { name: "David Smith", job: "Data Analyst", company: "DataCorp", img: user6 },
        { name: "Emily Davis", job: "Marketing Specialist", company: "MarketHub", img: user7 },
    ];

    return (
        <div className='max-w-6xl flex justify-between items-center mx-4 md:mx-auto h-[250px] my-10'>
            <div className='w-[40%]'>
                <h1 className='md:text-xl text-sm font-semibold text-sky-700 py-2 md:py-4'>Alumni Network Benefits</h1>
                <ul className='md:hidden flex flex-col text-xs text-sky-950'>
                    <li>01. Networking</li>
                    <li>02. Career Support</li>
                    <li>03. Mentorship</li>
                    <li>04. Events</li>
                    <li>05. Resources</li>
                    <li>06. Community</li>
                </ul>
                <ul className='md:flex hidden flex-col text-sky-950'>
                    <li>01. Networking: Career connections.</li>
                    <li>02. Career Support: Job resources.</li>
                    <li>03. Mentorship: Alumni guidance.</li>
                    <li>04. Events: Reunions and networking.</li>
                    <li>05. Resources: Access to facilities.</li>
                    <li>06. Community: Supportive network.</li>
                </ul>
            </div>
            <div className='w-[60%] h-[150px] md:h-[250px]'>
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000, // 2 seconds
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {users.map((item, index) => (
                        <SwiperSlide key={index} className='relative'>
                            <img src={item.img} alt={`${item.name}'s profile`} className='w-full h-full object-cover' />
                            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-red-500 to-transparent'>
                                <div className='absolute bottom-4 left-4 text-left'>
                                    <h1 className='text-md font-semibold text-white'>{item.name}</h1>
                                    <h1 className='text-sm text-white'>{item.job}</h1>
                                    <p className='text-xs text-white'>{item.company}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
