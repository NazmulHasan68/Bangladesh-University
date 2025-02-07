import React from 'react'
import { Library, Users, Utensils, Shield, Briefcase, Leaf, HelpingHand } from "lucide-react";
import { Link } from 'react-router-dom';

export default function CentralDashSidebar() {

    const centersidebar = [
      { name: "Library", icon: <Library />, link: "/dashboard/centralcontroller/library" },
      { name: "Club", icon: <Users />, link: "/dashboard/centralcontroller/club" },
      { name: "Canteen", icon: <Utensils />, link: "/dashboard/centralcontroller/canteen" },
      { name: "Security Guard", icon: <Shield />, link: "/dashboard/centralcontroller/security-guard" },
      { name: "Office Assistance", icon: <Briefcase />, link: "/dashboard/centralcontroller/office-assistance" },
      { name: "Gardener", icon: <Leaf />, link: "/dashboard/centralcontroller/gardener" },
      { name: "Helper", icon: <HelpingHand />, link: "/dashboard/centralcontroller/helper" },
      { name: "Transport", icon: <HelpingHand />, link: "/dashboard/centralcontroller/transport" },
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
