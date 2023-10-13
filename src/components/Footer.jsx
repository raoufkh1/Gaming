import React from 'react'
import {FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaYoutubeSquare
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='w-full py-10 px-24 text-white relative'>
            <div className='flex justify-center '>
                <div className='w-[600px]'>
                    <img className='mb-6' src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="" />
                    <h1 className='text-[28px] font-semibold mb-5'>Reach out & let your mind explore</h1>
                    <p>I also love the challenge of trying to beat a
                         difficult game or master a new skill.
                    </p>
                </div>
                <div className='w-1/4'>
                    <p className='text-[20px] font-medium mb-4'>NAVIGATION:</p>
                    <nav>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Search</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>All Collections</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>All Products</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Article Page</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Blog Page</li>
                        
                    </nav>
                </div>
                <div className='w-1/4'>
                <p className='text-[20px] font-medium mb-4'>ABOUT US:</p>
                    <nav>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>About Us</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Contact us</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>FAQ's</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Privacy Policy</li>
                        <li className='list-none cursor-pointer hover:text-gray-700 transition-all mb-2'>Terms & Conditions</li>
                        
                    </nav>
                </div>
                <div className='w-1/4'>
                <p className='text-[20px] font-medium mb-4'>SHARE:</p>
                    <nav className='flex'>
                        <li className='text-xl list-none cursor-pointer hover:text-gray-700 transition-all mb-2 mr-2'><FaFacebookSquare/></li>
                        <li className='text-xl list-none cursor-pointer hover:text-gray-700 transition-all mb-2 mr-2'><FaTwitterSquare/></li>
                        <li className='text-xl list-none cursor-pointer hover:text-gray-700 transition-all mb-2 mr-2'><FaInstagramSquare/></li>
                        <li className='text-xl list-none cursor-pointer hover:text-gray-700 transition-all mb-2 mr-2'><FaYoutubeSquare/></li>
                        
                    </nav>
                </div>
            </div>
            <p className='mt-7'>© 2023, Created by RaoufDev</p>
        </div>
    )
}

export default Footer