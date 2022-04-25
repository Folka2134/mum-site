import React from 'react'

import aboutPic from '../../images/innovation-coaching.jpg'

export const About = () => {
  return (
    <div className='about w-full text-center pt-12'>
      <h1 className='text-[36px] lg:mb-12 font-semibold'>About Us</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center place-items-center'>
        <p className='text-2xl p-12 lg:p-34 lg:pr-3'>Short stuff... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates nemo sit nesciunt, impedit blanditiis libero harum? Ducimus obcaecati enim, architecto odio amet soluta? Sunt!</p>
        <img src={aboutPic} alt="pic" className='h-96' />
      </div>
    </div>
  )
}
