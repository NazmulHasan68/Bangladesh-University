import React from 'react'
import { ClipboardList, Calendar, CalendarClock, Building, Clock, LayoutDashboard } from "lucide-react";
import { Link } from 'react-router-dom';

export default function CentralExamSidbar() {

    const centersidebar = [
      { name: "Notice Board", icon: <ClipboardList />, link: "/dashboard/centralexamcontroller/notice-board" },
      { name: "Exam Date", icon: <Calendar />, link: "/dashboard/centralexamcontroller/exam-date" },
      { name: "Exam Routine", icon: <CalendarClock />, link: "/dashboard/centralexamcontroller/exam-routine" },
      { name: "Department", icon: <Building />, link: "/dashboard/centralexamcontroller/department" },
      { name: "Future Schedule", icon: <Clock />, link: "/dashboard/centralexamcontroller/future-schedule" },
      { name: "Exam Controller Board", icon: <LayoutDashboard />, link: "/dashboard/centralexamcontroller/exam-board" },
    ];
    
    return (
        <div className='w-full flex flex-col gap-1 bg-slate-300 h-screen'>
          {centersidebar.map((item, index)=>(
            <Link to={item.link} key={index} className='px-6 py-2 w-full hover:bg-slate-400 flex gap-4 items-center'>
                {item.icon}
                {item.name}
            </Link>
          ))
    
          }
        </div>
      )
}
