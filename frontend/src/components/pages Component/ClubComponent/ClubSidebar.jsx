import React from 'react'
import { Link } from 'react-router-dom'

export default function ClubSidebar() {
    const postname = [
        {name: "Manager", link:'manager'},
        {name: "Selector", link:'selector'},
        {name: "Team", link:'team'},
        {name: "Members", link:'members'},
        {name: "Sponsor", link:'Sponsor'},
        {name: "Galary", link:'Galary'},
        {name: "Future Program", link:'Future Program'},
        {name: "Achivement", link:'Achivement'},
    ]
  return (
    <div className='bg-slate-200 hidden md:flex flex-col px-4'>
        <h1 className='text-sm md:text-xl bg-red-400 text-white px-4 py-1 w-full'>List</h1>
        <div className='flex flex-col gap-1 text-sky-700 mt-2'>
            {postname.map((item, index)=>(
                <Link to={'cricket'} key={index} >{item.name}</Link>
            ))}
        </div>

    </div>
  )
}
