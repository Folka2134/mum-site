import React from 'react'

export const PackagePre = () => {
  return (
    <div className='h-[1000px] md:h-[1000px] grid grid-rows-4 md:grid-rows-2 grid-cols-1 md:grid-cols-2 bg-purple-200 md:m-24' >
      <div className='border-2 border-black flex-1'>
        <div className='h-[40%] border-2'><img src="#" alt="#" /></div>
        <div className='grid'>
          <h1 className='text-2xl text-center'>Package Title</h1>
          <p>Short description...</p>
        </div>
      </div>
      <div className='border-2 border-black flex-1 '>2</div>
      <div className='border-2 border-black flex-1'>3</div>
      <div className='border-2 border-black flex-1'>4</div>
    </div>
  )
}
