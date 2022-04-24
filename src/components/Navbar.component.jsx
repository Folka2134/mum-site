import React, { useState } from 'react'

import { Link } from 'react-scroll/modules'

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  const updateMenu = () => {
    if (openNav === false) {
      setOpenNav(true)
    } else {
      setOpenNav(false)
    }
  }

  return (
    <div className='bg-green-200 h-12 flex justify-center items-center sticky top-0 border-b-2 border-[#C8F7F3]'>
      <div className='bg-[green-600] h-12 w-full hidden md:flex justify-between items-center mx-32'>
        <ul className='flex items-center'>
          <Link to="home" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Home</li></Link>
          <Link to="about" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300 whitespace-nowrap'>About Us</li></Link>
          <Link to="packages" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Packages</li></Link>
          <Link to="contact" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Contact</li></Link>
        </ul>
        <ul className='flex ml-52'>
          <li className='px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Account</li>
          <li className='px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Logout</li>
        </ul>
      </div>
      <div className='h-12 w-full flex md:hidden justify-end mx-12'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 mr-4 cursor-pointer text-pink-500 mt-3 ${openNav ? "rotate-90" : ""} transition-all`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => updateMenu()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className={`w-52 mt-12 absolute transition-all delay-75 ${openNav ? "flex flex-col" : "-translate-y-72"}`}>
          <ul className='bg-pink-500 text-white flex flex-col items-center rounded-t-sm text-center border-2 border-y-0 '>
            <Link to="home" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Home</li></Link>
            <Link to="about" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300 whitespace-nowrap'>About Us</li></Link>
            <Link to="packages" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Packages</li></Link>
            <Link to="contact" smooth={true}><li className='h-full px-4 cursor-pointer hover:scale-105 transition-transform delay-75 duration-300'>Contact</li></Link>
          </ul>
          <div className='bg-white flex justify-between border-2 p-5 rounded-b-xl'>
            <button className='hover:text-pink-500'>Account</button>
            <button className='hover:text-pink-500'>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
