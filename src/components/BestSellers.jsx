import React from 'react'
import Product from '../assets/product.avif'
import { bestSellersArray } from '../bestSellers'
const BestSellers = () => {
    return (
        <div className='bg-transparent px-24 first-letter:'>
            <h1 className='text-white text-4xl font-semibold'>Best Sellers of the week</h1>

            <div className='w-full mt-6 flex justify-center'>
                {
                    bestSellersArray.map((product, index) => {
                        return (
                            <div className='border w-1/4 py-5 px-6 text-white bg-[#22348a] mr-10' key={index}>
                                <h1 className='text-[20px] font-bold'>{product.title}</h1>
                                <p className='text-gray-400'>TYPE: {product.type}</p>
                                <img src={product.image} className='cursor-pointer hover:scale-125 transition-all' />
                                <p>{product.select}:</p>
                                <select className='outline-none mb-4 bg-transparent border px-2 py-1 cursor-pointer'>
                                    {
                                        product.options.map((option, index) =>{
                                            return(
                                                <option key={index} value={option}>{option}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className='flex w-full justify-between'>
                                    <h1 className='font-bold flex'>{product.price} <span className='text-[12px] ml-[2px]'>USD</span></h1>
                                    <button className='items-center flex border  hover:bg-[#0098ff] transition-all px-3 py-1 rounded-tr-3xl rounded-bl-3xl'>Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BestSellers