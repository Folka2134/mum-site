import React from 'react'
import { Footer } from '../Footer.component'
import { Cover } from './Cover.component'
import { MainContent } from './MainContent.component'

export const Home = () => {
  return (
    <div className='h-full mx-6 lg:mx-12 xl:mx-32 flex flex-col items-center'>
      <Cover />
      <MainContent />
    </div>
  )
}
