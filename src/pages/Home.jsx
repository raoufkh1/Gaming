import React from 'react'
import Navbar from '../components/Navbar'
import CotainerImage from '../assets/container.webp'
import {BsController} from 'react-icons/bs'
import BestSellers from '../components/BestSellers'
import Subscrebtion from '../components/Subscrebtion'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className=' bg-black font-poppins '>
        <Navbar />
        <img src={CotainerImage} className='absolute right-0 top-[-8%] z-20 ' />
        <div className='w-full bg-transparent h-[80vh] px-24 py-32 flex relative z-10'>
            <div className='w-1/2 text-white '>
                <h1 className='text-5xl font-bold leading-tight mb-5'>Best <span className='text-[#0098ff]'>Pro Gaming </span>Accessories </h1>
                <p className='text-gray-500 mb-5'>Gaming accessories include gear such as headsets, extra controllers,
                     charging stations,
                     memory devices, carrying cases and much more.
                </p>
                <button className='items-center flex border text-[17px] mt-6 hover:bg-[#0098ff] transition-all px-6 py-3 rounded-tr-3xl rounded-bl-3xl'>Show products <BsController className='ml-4'/> </button>

            </div>
            
        </div>
        <BestSellers/>
        <Subscrebtion/>
        <Footer/>
    </div>
  )
}

export default Home