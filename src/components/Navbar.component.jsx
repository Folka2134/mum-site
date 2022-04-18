import React from 'react'

export const Navbar = () => {
  return (
    <div className='bg-green-200 h-12 flex justify-evenly items-center sticky top-0'>
      <ul className='flex'>
        <li className='px-4 cursor-pointer'>Home</li>
        <li className='px-4 cursor-pointer'>About Us</li>
        <li className='px-4 cursor-pointer'>Packages</li>
        <li className='px-4 cursor-pointer'>Contact</li>
      </ul>
      <ul className='flex ml-52'>
        <li className='px-4 cursor-pointer'>Account</li>
        <li className='px-4 cursor-pointer'>Logout</li>
      </ul>
    </div>
  )
}
