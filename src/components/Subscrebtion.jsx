import React from 'react'

const Subscrebtion = () => {
  return (
    <div className='flex items-center py-24 px-24 text-white w-full relative'>
        <div className='w-1/2'>
            <h1 className='mb-5 text-5xl font-semibold'>Subscribe newsletter and <span className='text-[#0098ff]'> get -20% off</span></h1>
            <p className='text-gray-400 mb-10'>Almost three-quarters of dedicated PC gamers say their
                 main motivation to upgrade is improving gaming 
                 experiences.
            </p>
            <div>
                <input className='border bg-transparent px-3 py-2 outline-none rounded-bl-xl' type="text" placeholder='Enter email adress...' />
                <button className='border border-l-0 px-3 py-2 bg-[#0098ff] rounded-tr-xl'>Subscribe</button>
            </div>
        </div>
        <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/subscribe-img.png?v=1670903810" alt="" />
    </div>
  )
}

export default Subscrebtion