import React, { useState } from 'react'

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
    <div className='bg-green-200 h-12 flex justify-center items-center sticky top-0'>
      <div className='bg-green-600 h-12 w-full hidden md:flex justify-between items-center mx-32'>
        <ul className='flex'>
          <li className='px-4 cursor-pointer'>Home</li>
          <li className='px-4 cursor-pointer whitespace-nowrap'>About Us</li>
          <li className='px-4 cursor-pointer'>Packages</li>
          <li className='px-4 cursor-pointer'>Contact</li>
        </ul>
        <ul className='flex ml-52'>
          <li className='px-4 cursor-pointer'>Account</li>
          <li className='px-4 cursor-pointer'>Logout</li>
        </ul>
      </div>
      <div className='bg-pink-700 h-12 w-full flex md:hidden justify-end mx-12'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 mr-4 cursor-pointer text-purple-200 mt-3 ${openNav ? "rotate-90" : ""} transition-all`}
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
        <div className={`w-52 mt-12 absolute ${openNav ? "flex flex-col" : "-translate-y-72"} transition-all delay-75`}>
          <ul className='bg-blue-800 text-white flex flex-col items-center rounded-t-sm'>
            <li className='p-2 cursor-pointer'>Home</li>
            <li className='p-2 cursor-pointer whitespace-nowrap'>About Us</li>
            <li className='p-2 cursor-pointer'>Packages</li>
            <li className='p-2 cursor-pointer'>Contact</li>
          </ul>
          <div className='bg-blue-400 flex justify-between p-5 rounded-b-xl'>
            <button className='hover:text-white'>Account</button>
            <button className='hover:text-white'>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
