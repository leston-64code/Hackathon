import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'

const CardTwo = () => {
    const navigate=useNavigate()
    return (
        <>
            <div class="lg:w-[20%] w-[80%] mx-5 my-5 md:w-1/2 pb-4  bg-white rounded-lg shadow-lg" onClick={() => {
                navigate("/currentProduct")
            }}>
                <div class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={require("./assets/air-jordan-1-low-shoes-qBzpHW.png")} />
                </div>
                <div class="mt-4 p-3">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <div class="flex items-center mb-4 text-black">
                        <FaStar className='inline-block text-[#e9c50d]' />
                        <FaStar className='inline-block text-[#e9c50d]' />
                        <FaStar className='inline-block text-[#e9c50d]' />
                        <FaStar className='inline-block text-[#e9c50d]' />
                    </div>
                    <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                    <p class="mt-1">$16.00</p>
                </div>
            </div>
        </>
    )
}

export default CardTwo
