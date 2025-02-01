import React, { useState } from 'react';
import PortalSidebar from '../components/pages Component/Portal.component/PortalSidebar';
import Navigation from '../components/generallComponent/Navigation';
import { Link, Outlet } from 'react-router-dom';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { FaRegAddressCard } from "react-icons/fa";
  import { FaUser } from "react-icons/fa";
  import { FaClipboardList } from "react-icons/fa";
  import { IoSettingsSharp } from "react-icons/io5";
  import { IoIosLogOut } from "react-icons/io";
  

export default function Portal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
      setIsOpen(false); 
    };
    return (
        <div>
            <Navigation/>
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-14 md:mt-20">
                <div className='hidden md:flex'>
                    <PortalSidebar/>
                </div>
                <div className='flex md:hidden mx-2 px-4 mb-2 text-gray-700 bg-white shadow-md mt-4'>
                    <Accordion type="single" collapsible className="w-full" value={isOpen ? "item-1" : ""} onValueChange={(value) => setIsOpen(value === "item-1")}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="no-underline hover:no-underline focus:no-underline font-bold">Check your Dashboard</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-1">
                                <div className='flex gap-2 items-center  hover:bg-slate-200 p-2'>
                                    <FaRegAddressCard className='text-2xl'/>
                                    <Link to="result" className="w-full" onClick={handleLinkClick}>Result</Link>
                                </div>
                                <div className='flex gap-2 items-center  hover:bg-slate-200 p-2'>
                                    <FaUser className='text-2xl'/>
                                    <Link to="profile" className="w-full" onClick={handleLinkClick}>Profile</Link>
                                </div>
                                <div className='flex gap-2 items-center  hover:bg-slate-200 p-2'>
                                    <FaClipboardList className='text-2xl'/>
                                    <Link to="courses" className="w-full" onClick={handleLinkClick}>Courses</Link>
                                </div>
                                <div className='flex gap-2 items-center  hover:bg-slate-200 p-2'>
                                    <IoSettingsSharp className='text-2xl'/>
                                    <Link to="finalcial" className="w-full" onClick={handleLinkClick}>Financial status</Link>
                                </div>
                                <div className='flex gap-2 items-center  hover:bg-slate-200 p-2'>
                                    <IoIosLogOut className='text-2xl'/>
                                    <Link to="portal" className="w-full" onClick={handleLinkClick}>Logout</Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}


