import React from 'react'
import { User, Book, CreditCard, FilePlus, PenSquare, Newspaper, Users} from "lucide-react";
import { Link } from 'react-router-dom';


export default function TeacherDashSidebar() {

    const teachers = [
      { name: "Profile", icon: <User />, link: "/dashboard/teacher/profile" },
      { name: "Subject", icon: <Book />, link: "/dashboard/teacher/subject" },
      { name: "Payment", icon: <CreditCard />, link: "/dashboard/teacher/payment" },
      { name: "Add Result", icon: <FilePlus />, link: "/dashboard/teacher/add-result" },
      { name: "Blog Writing", icon: <PenSquare />, link: "/dashboard/teacher/blog-writing" },
      { name: "Add News", icon: <Newspaper />, link: "/dashboard/teacher/add-news" },
      { name: "Club", icon: <Users />, link: "/dashboard/teacher/club" },
    ];
 
    
  return (
    <div className='w-full flex flex-col gap-1 bg-slate-300 h-full'>
      {teachers.map((item, index)=>(
        <Link to={item.link} key={index} className='px-6 py-2 w-full hover:bg-slate-400 flex gap-4 items-center'>
            {item.icon}
            {item.name}
        </Link>
      ))

      }
    </div>
  )
}
