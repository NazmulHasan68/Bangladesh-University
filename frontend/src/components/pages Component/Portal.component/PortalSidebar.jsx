import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PortalSidebar() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const sidebardetails = [
        {id:1, name:"Results", link:"result"},
        {id:1, name:"Profile", link:"profile"},
        {id:1, name:"Courses", link:"courses"},
        {id:1, name:"Settings", link:"settings"},
        {id:1, name:"Logout", link:"logout"},
    ]
  return (
    <div>
       <div className={`w-64 bg-gray-800 text-white p-4 min-h-screen ${sidebarVisible ? '' : 'hidden'}`}>
            <h2 className="text-xl font-bold mb-4">Dashboard</h2>
            <ul className="space-y-2 flex flex-col">
                {sidebardetails.map((item) => (
                    <Link to={item.link} key={item.id} className="p-2 hover:bg-gray-700 cursor-pointer rounded">{item.name}</Link>
                ))}
            </ul>
        </div>
    </div>
  )
}
