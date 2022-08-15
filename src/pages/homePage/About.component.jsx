import React from 'react'

import aboutPic from '../../images/innovation-coaching.jpg'

export const About = () => {
  return (
    <div className='h-[100vh] grid content-center about w-full text-center'>
      {/* <h1 className='text-3xl md:text-5xl lg:mb-12 md:text-[36px] font-semibold'>About Us</h1> */}
      <div className='text-xl md:text-3xl grid grid-cols-1 lg:grid-cols-2 items-center place-items-center'>
        <p className='p-12 lg:p-34 lg:pr-3'>Short stuff... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates nemo sit nesciunt, impedit blanditiis libero harum? Ducimus obcaecati enim, architecto odio amet soluta? Sunt!</p>
        <img src={aboutPic} alt="pic" className='lg:h-96' />
      </div>
    </div>
  )
}
