import React from 'react';
import { FaCode } from "react-icons/fa6";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { RiKakaoTalkLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { BiSolidDonateHeart } from "react-icons/bi";
import { SiBloglovin } from "react-icons/si";
import { MdOutlineEventNote } from "react-icons/md";
import { Link } from 'react-router-dom'; // Ensure this import if you're using React Router

export default function StudentClub() {
  const club = [
    { name: "Programming Club", link: "/programming-club", img: "https://swiperjs.com/demos/images/nature-1.jpg", icon: <FaCode /> },
    { name: "Library", link: "/library", img: "https://swiperjs.com/demos/images/nature-2.jpg", icon: <IoLibraryOutline /> },
    { name: "Sports Club", link: "/sports-club", img: "https://swiperjs.com/demos/images/nature-3.jpg", icon: <MdOutlineSportsCricket /> },
    { name: "Cultural Club", link: "/cultural-club", img: "https://swiperjs.com/demos/images/nature-4.jpg", icon: <FaMedal /> },
    { name: "Debating Club", link: "/debating-club", img: "https://swiperjs.com/demos/images/nature-5.jpg", icon: <GiMicrophone /> },
    { name: "Language Club", link: "/language-club", img: "https://swiperjs.com/demos/images/nature-6.jpg", icon: <RiKakaoTalkLine /> },
    { name: "Bus Schedule", link: "/bus-schedule", img: "https://swiperjs.com/demos/images/nature-7.jpg", icon: <LuBus /> },
    { name: "Donation", link: "/donation", img: "https://swiperjs.com/demos/images/nature-8.jpg", icon: <BiSolidDonateHeart /> },
    { name: "Blogs", link: "/blogs", img: "https://swiperjs.com/demos/images/nature-8.jpg", icon: <SiBloglovin /> },
    { name: "Event", link: "/event", img: "https://swiperjs.com/demos/images/nature-8.jpg", icon: <MdOutlineEventNote /> },
  ];

  return (
    <div className='max-w-4xl md:mx-auto mx-2 px-2 mb-4 rounded-3xl'>
      <h1 className='text-red-400 text-lg md:text-xl font-bold py-4'>Explore your interest</h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4'>
        {club.map((item, index) => (
          <Link to={item.link}
            key={index}
            className='relative hover:scale-110 transition-all duration-200 bg-cover bg-center rounded-xl shadow-xl flex flex-col items-center text-center p-4'
            style={{
              backgroundImage: `url(${item.img})`,
              height: '150px',
            }}
          >
            <div className='absolute inset-0 bg-red-800 opacity-80 cursor-pointer rounded-xl flex justify-center items-center flex-col'>
              <div className='relative z-10 text-2xl text-white mb-2'>{item.icon}</div>
              <p className='relative z-10 text-sm md:text-md font-semibold text-white'>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
