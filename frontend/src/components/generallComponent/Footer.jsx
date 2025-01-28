import React from 'react';
import logo from '../../assets/commonPhoto/logo.png'; 

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-sky-800 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Container with 5 Parts */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mx-2 md:mx-0">
          
          {/* Donations, Admission, Student, Teachers, Event */}
          <div className="flex flex-col space-y-2 text-left md:text-right">
            <a href="#donations" className="text-sm hover:text-red-400">Donations</a>
            <a href="#admission" className="text-sm hover:text-red-400">Admission</a>
            <a href="#student" className="text-sm hover:text-red-400">Student</a>
            <a href="#teachers" className="text-sm hover:text-red-400">Teachers</a>
            <a href="#events" className="text-sm hover:text-red-400">Event</a>
          </div>

          {/* News, Notices, Alumni, Library, Location */}
          <div className="flex flex-col space-y-2 text-left md:text-right">
            <a href="#news" className="text-sm hover:text-red-400">News</a>
            <a href="#notices" className="text-sm hover:text-red-400">Notices</a>
            <a href="#alumni" className="text-sm hover:text-red-400">Alumni</a>
            <a href="#library" className="text-sm hover:text-red-400">Library</a>
            <a href="#location" className="text-sm hover:text-red-400">Location</a>
          </div>

          {/* Logo in the middle */}
          <div className=" justify-center flex-col items-center  md:col-span-2 hidden md:flex text-center">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <p className='mt-3 text-xs'>5/B, Beribandh Main Road, <br/> Adabar, Mohammadpur, Dhaka - 1207</p>
            <p className='text-xs py-2'>01755-559301, 01755-559320</p>
          </div>

          {/* Career, Tuitions, Activities, Research, Welfare */}
          <div className="flex flex-col space-y-2">
            <a href="#career" className="text-sm hover:text-red-400">Career</a>
            <a href="#tuitions" className="text-sm hover:text-red-400">Tuitions</a>
            <a href="#activities" className="text-sm hover:text-red-400">Activities</a>
            <a href="#research" className="text-sm hover:text-red-400">Research</a>
            <a href="#welfare" className="text-sm hover:text-red-400">Welfare</a>
          </div>

          {/* Blogs, About, Home, Internship, Rules & Info */}
          <div className="flex flex-col space-y-2">
            <a href="#blogs" className="text-sm hover:text-red-400">Blogs</a>
            <a href="#about" className="text-sm hover:text-red-400">About</a>
            <a href="#home" className="text-sm hover:text-red-400">Home</a>
            <a href="#internship" className="text-sm hover:text-red-400">Internship</a>
            <a href="#rules" className="text-sm hover:text-red-400">Rules & Info</a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 max-w-6xl mx-auto text-center text-xs flex items-center justify-between">
          <p>&copy; 2025 Our Bangladesh University. All rights reserved.</p>
          <div className='flex gap-4 text-red-400 text-xl'>
            <Link to={'#'}>
                <FaFacebook className='hover:text-red-600 scale-110 cursor-pointer'/>
            </Link>
            <Link to={'#'}>
                <FaInstagramSquare className='hover:text-red-600 scale-110 cursor-pointer'/>
            </Link>
            <Link to={'#'}>
                <FaTwitter className='hover:text-red-600 scale-110 cursor-pointer'/>
            </Link>
            <Link to={'#'}>
                <FaYoutube className='hover:text-red-600 scale-110 cursor-pointer'/>
            </Link>
            <Link to={'#'}>
                <FaLinkedin className='hover:text-red-600 scale-110 cursor-pointer'/>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

