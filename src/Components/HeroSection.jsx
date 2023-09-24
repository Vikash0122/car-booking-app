import React from 'react'

function HeroSection() {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='\src\assets\back.png' 
        alt='/'
      />
      <div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='left-[35%] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            About Us
          </h1>
          <p className='pt-9 drop-shadow-2xl py-2 text-xl text-center'>
            Home <img className='inline' src='\src\assets\Arrow1.png' alt='arrow1'></img> About Us
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection