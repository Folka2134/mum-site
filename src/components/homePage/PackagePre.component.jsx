import React from 'react'

export const PackagePre = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:m-6' >
      <div className=' border-2 border-black bg-purple-200'>
        <div className='h-72 bg-package-bg w-full bg-center'></div>
        <div className='flex flex-col items-center justify-center p-20 pt-12'>
          <h1 className='text-2xl text-center mb-5'>Package Title</h1>
          <p className='text-center'>Short description...
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
            rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
          <button className='mt-8 mb-1 p-4 bg-pink-500 w-52'>Overview</button>
          <button className='p-4 bg-pink-500 w-52'>Unlock</button>
        </div>
      </div>
      <div className='border-2 border-black bg-purple-200'>
        <div className='h-72 bg-package2-bg w-full bg-center'></div>
        <div className='flex flex-col items-center p-20'>
          <h1 className='text-2xl text-center mb-5'>Package Title</h1>
          <p className='text-center'>Short description...
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
            rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
          <button className='mt-8 mb-1  p-4 bg-pink-500 w-52'>Overview</button>
          <button className='p-4 bg-pink-500 w-52'>Unlock</button>
        </div>
      </div>
      <div className='border-2 border-black bg-purple-200'>
        <div className='h-72 bg-package4-bg w-full bg-center'></div>
        <div className='flex flex-col items-center p-20'>
          <h1 className='text-2xl text-center mb-5'>Package Title</h1>
          <p className='text-center'>Short description...
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
            rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
          <button className='mt-8 mb-1  p-4 bg-pink-500 w-52'>Overview</button>
          <button className='p-4 bg-pink-500 w-52'>Unlock</button>
        </div>
      </div>
      <div className='border-2 border-black bg-purple-200'>
        <div className='h-72 bg-package3-bg w-full bg-center'></div>
        <div className='flex flex-col items-center p-20'>
          <h1 className='text-2xl text-center mb-5'>Package Title</h1>
          <p className='text-center'>Short description...
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quis corrupti assumenda aspernatur,
            rerum quo quos laborum at esse eveniet neque praesentium voluptate minus eius? </p>
          <button className='mt-8 mb-1  p-4 bg-pink-500 w-52'>Overview</button>
          <button className='p-4 bg-pink-500 w-52'>Unlock</button>
        </div>
      </div>
    </div>
  )
}
