import React from 'react'
import { Cover } from './Cover.component'
import { MainContent } from './MainContent.component'

export const Home = () => {
  return (
    <div className='h-full bg-purple-400 mx-32 flex flex-col items-center'>
      <Cover />
      <MainContent />
    </div>
  )
}
