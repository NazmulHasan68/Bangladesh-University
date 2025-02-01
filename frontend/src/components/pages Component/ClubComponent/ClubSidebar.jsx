import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ClubSidebar() {
    const location = useLocation();
    
    // Extract the club name from the URL ("/club/football" → "football")
    const clubName = location.pathname.split('/')[2]; 

    const postname = [
        { name: "Manager", link: "/cricket/cricketmanager" },
        { name: "Selector", link: "/cricket/cricketselector" },
        { name: "Team", link: "/cricket/cricketteam" },
        { name: "Members", link: "/cricket/cricketmembers" },
        { name: "Sponsor", link: "/cricket/cricketsponsor" },
        { name: "Gallery", link: "/cricket/cricketgallery" },
        { name: "Future Program", link: "/cricket/cricketfuture-program" },
        { name: "Achievement", link: "/cricket/cricketachievement" },
    ];

    return (
        <div className='bg-slate-200 md:h-screen flex flex-col p-4'>
            <h1 className='text-sm md:text-xl bg-red-400 text-white px-4 py-1 w-full'>
                {clubName ? clubName.charAt(0).toUpperCase() + clubName.slice(1) : "Club"} Club
            </h1>
            <div className='flex flex-col gap-1 text-sky-700 mt-2'>
                {postname.map((item, index) => (
                    <Link to={`/club${item.link}`} key={index}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}