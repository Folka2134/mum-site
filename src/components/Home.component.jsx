import React from 'react'
import { Carousel } from './Carousel.component'
import { FeaturedProducts } from './FeaturedProducts.component'

export const Home = () => {
  return (
    <div className='h-screen bg-purple-400 mx-48 flex flex-col items-center'>
      <Carousel />
      <FeaturedProducts />
    </div>
  )
}
