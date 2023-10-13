import React from 'react'
import Logo from '../assets/logo.png'
import {GoPerson} from 'react-icons/go'
import {TbWorld} from 'react-icons/tb'
import {BsCart} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='w-full z-30 fixed bg-black'>
        <nav className='w-full flex justify-between px-24 bg-transparent border-b-2 py-5 font-poppins items-center z-30'>
            <div className='flex'>
                <li className='list-none mr-6 text-[18px] text-white font-medium after:content-[""] relative after:transition-all transition-all after:w-0 hover:after:w-full  after:opacity-0 hover:after:opacity-100 after:h-1 after:bg-[#7b35c8] after:block after:absolute'><a href="#">Game Accessories</a></li>
                <li className='list-none mr-6 text-[18px] text-white font-medium after:content-[""] relative after:transition-all transition-all after:w-0 hover:after:w-full  after:opacity-0 hover:after:opacity-100 after:h-1 after:bg-[#7b35c8] after:block after:absolute'><a href="#">Pages</a></li>
                <li className='list-none mr-6 text-[18px] text-white font-medium after:content-[""] relative after:transition-all transition-all after:w-0 hover:after:w-full  after:opacity-0 hover:after:opacity-100 after:h-1 after:bg-[#7b35c8] after:block after:absolute'><a href="#">Blog</a></li>
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex text-white items-center'>
                <a href="" className='text-[25px] mr-4'><GoPerson/></a>
                <a href="" className='text-[25px] mr-4'><TbWorld/></a>
                <select name="" id="" className='bg-transparent mr-4 cursor-pointer outline-none border p-1 rounded-tr-xl rounded-bl-xl'>

                    <option value="USD">USD</option>
                </select>
                <p className='w-20 text-[13px] '>My Card: <span className='font-bold'>0.00USD</span></p>
                <a href="" className='text-[25px] mr-4'><BsCart/></a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar