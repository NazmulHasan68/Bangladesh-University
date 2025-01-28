import React from 'react'
import { Link } from 'react-router-dom'

export default function CseHeader() {
    const naviagtion = [
        {menuItem:"Home", link:"home"},
        {menuItem:"People", link:"people"},
        {menuItem:"Research", link:"research"},
        {menuItem:"Activies", link:"activies"},
        {menuItem:"About", link:"about"},
        {menuItem:"Curriculum", link:"Curriculum"},
        {menuItem:"Notice", link:"notice"},
        {menuItem:"Alumni", link:"alumni"},
        {menuItem:"Contact", link:"contact"},
     ]
  return (
    <header className='bg-red-50 py-4 shadow-2xl fixed w-full top-0 left-0 right-0 z-30'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold text-red-500 '>CSE</h1>
            </div>
            <div className='flex gap-1 items-center '>
                {naviagtion.map((nav,index)=>(
                    <Link to={nav.link} key={index} className='px-4 py-1 bg-gray-100 text-sky-600 hover:text-red-600'>
                        {nav.menuItem}
                     </Link>
                ))}
            </div>
            <button className='px-6 py-2 bg-red-400 rounded-full text-white'>
                Login
            </button>
        </div>
    </header>
  )
}
