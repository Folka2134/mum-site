import React from 'react'
import { About } from './About.component'
import { Contact } from './Contact.component'
import { PackagePre } from './PackagePre.component'

export const MainContent = () => {
  return (
    <div className='h-full min-h-screen w-full pt-12 grid place-items-center border-t-2'>
      <About />
      <PackagePre />
      <Contact />
    </div>
  )
}
