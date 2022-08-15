import React from 'react'

export const PackagePre = () => {
  return (
    <div className='packages text-center mt-12 pt-12 border-t-2'>
      <h1 className='text-[36px] mb-12 font-semibold'>Our Packages</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:m-6'>
        <div className='border-black rounded'>
          <div className='h-72 bg-package-bg w-full bg-center rounded-full shadow-lg'></div>
          <div className='flex flex-col items-center justify-center p-12'>
            <h1 className='text-2xl text-center mb-5'>Package Title</h1>
            <p className='text-center'>Short description...
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
              rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? test </p>
            <button className='mt-8 mb-1 p-4 text-white bg-pink-400 w-52 rounded hover:text-black hover:bg-[#D9E7E8] duration-300'>Overview</button>
            <button className='p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Unlock</button>
          </div>
        </div>
        <div className='rounded'>
          <div className='h-72 bg-package2-bg w-full bg-center rounded-full shadow-lg'></div>
          <div className='flex flex-col items-center p-12'>
            <h1 className='text-2xl text-center mb-5'>Package Title</h1>
            <p className='text-center'>Short description...
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
              rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
            <button className='mt-8 mb-1 p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Overview</button>
            <button className='p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Unlock</button>
          </div>
        </div>
        <div className='rounded'>
          <div className='h-72 bg-package4-bg w-full bg-center rounded-full shadow-lg'></div>
          <div className='flex flex-col items-center p-12'>
            <h1 className='text-2xl text-center mb-5'>Package Title</h1>
            <p className='text-center'>Short description...
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
              rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
            <button className='mt-8 mb-1 p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Overview</button>
            <button className='p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Unlock</button>
          </div>
        </div>
        <div className='rounded'>
          <div className='h-72 bg-package3-bg w-full bg-center rounded-full shadow-lg'></div>
          <div className='flex flex-col items-center p-12'>
            <h1 className='text-2xl text-center mb-5'>Package Title</h1>
            <p className='text-center'>Short description...
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
              rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
            <button className='mt-8 mb-1 p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Overview</button>
            <button className='p-4 text-white bg-pink-400 w-52 rounded border-gray-200 hover:text-black hover:bg-[#D9E7E8] duration-300'>Unlock</button>
          </div>
        </div>
      </div>
    </div>
  )
}
