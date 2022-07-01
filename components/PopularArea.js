import React from 'react'

const PopularArea = () => {
  return (
    <>
        <div className='flex jusitfy-center items-center w-full flex-col pt-28'>
            <h1 className='uppercase text-3xl font-bold tracking-wide italic'>Popular right now </h1>

            <div className='flex flex-wrap justify-center gap-3 pt-8'>
              <h2 className='uppercase text-sm px-3 py-2 border-2 border-gray-300 cursor-pointer'>Face Covers</h2>
              <h2 className='uppercase text-sm px-3 py-2 border-2 border-gray-300 cursor-pointer'>Sneakers</h2>
              <h2 className='uppercase text-sm px-3 py-2 border-2 border-gray-300 cursor-pointer'>superstars</h2>
              <h2 className='uppercase text-sm px-3 py-2 border-2 border-gray-300 cursor-pointer'>adidas originals</h2>
              <h2 className='uppercase text-sm px-3 py-2 border-2 border-gray-300 cursor-pointer'>ultraboost</h2>
            </div>


            <div className='w-10/12 pt-20 pb-40'>
              <h1 className='uppercase text-4xl font-black italic'>Who are you shopping for?</h1>
                <div className='flex gap-2 flex-wrap justify-center pt-16'>
                  <div className='border-2 border-white hover:border-gray-500'> 
                <img src='/img/men.jpg' className='w-fit h-60 object-cover'  />
                <h1 className='uppercase text-sm text-gray-700 mt-4 ml-4'>MEN</h1>
                  </div>
                  <div className='border-2 border-white hover:border-gray-500'> 
                <img src='/img/women.jpg' className='w-fit h-60 object-cover' />
                <h1 className='uppercase text-sm text-gray-700 mt-4 ml-4'>WOMEN</h1>
                  </div>
                  <div className='border-2 border-white hover:border-gray-500'> 
                <img src='/img/kids.jpg' className='w-fit h-60 object-cover' />
                <h1 className='uppercase text-sm text-gray-700 mt-4 ml-4'>KIDS</h1>
                  </div>
          
              </div>
            </div>
        </div>
    </>
  )
}

export default PopularArea