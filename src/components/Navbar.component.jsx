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
    <div className='bg-[#D9E7E8] h-16 flex justify-center items-center sticky top-0 text-lg shadow-md'>
      <div className='bg-[green-600] h-12 w-full hidden md:flex justify-evenly items-center mx-32'>
        <ul className='flex items-center'>
          <Link to="home" smooth={true}><li className='h-full px-4 cursor-pointer  hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full'>Home</li></Link>
          <Link to="about" smooth={true}><li className='h-full px-4 cursor-pointer hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full whitespace-nowrap '>About Us</li></Link>
          <Link to="packages" smooth={true}><li className='h-full px-4 cursor-pointer hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full'>Packages</li></Link>
          <Link to="contact" smooth={true}><li className='h-full px-4 cursor-pointer hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full'>Contact</li></Link>
        </ul>
        <ul className='flex ml-52'>
          <li className='px-4 cursor-pointer hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full'>Account</li>
          <li className='px-4 cursor-pointer hover:bg-[#BED2D2] transition-all delay-75 duration-300 rounded-full'>Logout</li>
        </ul>
      </div>

      {/* MOBILE NAV-BAR */}

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
        <div className={`w-52 mt-14 absolute transition-all delay-75 ${openNav ? "flex flex-col" : "translate-x-72"}`}>
          <ul className='bg-green-200 text-black flex flex-col items-center  text-center border-2 border-gray-100 rounded-md'>
            <Link to="home" smooth={true}><li className='h-full w-52 p-2 cursor-pointer hover:bg-pink-400 hover:text-white transition-all duration-800 rounded-t-md'>Home</li></Link>
            <Link to="about" smooth={true}><li className='h-full w-52 p-2 cursor-pointer hover:bg-pink-400 hover:text-white transition-all duration-800 whitespace-nowrap'>About Us</li></Link>
            <Link to="packages" smooth={true}><li className='h-full w-52 p-2 cursor-pointer hover:bg-pink-400 hover:text-white transition-all duration-800'>Packages</li></Link>
            <Link to="contact" smooth={true}><li className='h-full w-52 p-2 cursor-pointer hover:bg-pink-400 hover:text-white transition-all duration-800 rounded-b-md'>Contact</li></Link>
          </ul>
          <div className='bg-white flex justify-evenly border-2 border-t-0 border-gray-100  h-24 rounded-b-xl'>
            <button className='w-full hover:text-white hover:bg-pink-400 transition-all duration-800 rounded-sm'>Account</button>
            <button className='w-full hover:text-white hover:bg-pink-400 transition-all duration-800 rounded-sm'>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
