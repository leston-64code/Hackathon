import React from 'react'
import Card from './Components/Card'
import { FaStar } from "react-icons/fa";
import CardTwo from './Components/CardTwo';
import { FaUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

const Products = () => {
  return (
    <>
      {/* <nav class=" h-14 flex flex-wrap relative shadow-md">
        <div class="w-[50%] bg-purple-20">

          <div id="mobileLeftNavIcon" class="md:hidden lg:hidden block text-[#e9c50d]  h-[100%] flex flex-wrap items-center justify-start pl-4">
            <i class="fa-solid fa-bars text-lg" onClick={() => {
              const navLeftMenu = document.getElementById("mobileLeftNavMenu")
              navLeftMenu.classList.toggle("hidden");
            }}></i>
            <div class=" h-[100%] ml-4 flex flex-wrap space-x-3 items-center">
              <img src="https://flowbite.com/images/logo.svg" alt="" />
              <p class="font-semibold">Fastcart</p>
            </div>
          </div>

          <div class=" h-[100%] ml-4 flex flex-wrap space-x-3 items-center hidden md:flex lg:flex">
            <img src="https://flowbite.com/images/logo.svg" alt="" />
            <p class="font-semibold">Fastcart</p>
          </div>


        </div>

        <div class="w-[50%] bg-red-20">
          <div id="mobileNavIcon" class="md:hidden lg:hidden  h-[100%] flex flex-wrap items-center justify-end pr-8">
            <i class="fa-solid fa-bars text-lg" onClick={() => {
              const navMenu = document.getElementById("mobileNavMenu")
              navMenu.classList.toggle("hidden");
            }}></i>
          </div>

          <ul class=" hidden md:flex lg:flex flex justify-end space-x-3 md:space-x-8 lg:space-x-14 md:pr-2 lg:pr-8 h-[100%] items-center">
            <li class="">Home</li>
            <li class="">About</li>
            <li class="inline">Contact Us</li>
          </ul>


          <ul id="mobileNavMenu" class="absolute right-0 md:hidden lg:hidden w-[40%] text-center text-sm border-[1px] border-gray-200 rounded-b-lg shadow-lg hidden font-semibold">
            <li class="border-b-[1px] border-b-gray py-2">Home</li>
            <li class="border-b-[1px] border-b-gray py-2">About</li>
            <li class="border-b-[1px] border-b-gray py-2">Contact Us</li>
            <li class="border-b-[1px] border-b-gray py-2">Blog</li>
            <li class=" py-2">Logout</li>
          </ul>


        </div>

      </nav> */}

      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Men</a>
            <a class="mr-5 hover:text-gray-900">Women</a>
            <a class="mr-5 hover:text-gray-900">Kids</a>
            {/* <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>


          <form className='mr-6'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Mockups, Logos..." required/>
            </div>
          </form>


          <button class="mr-3 inline-flex items-center space-x-3 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <p>Login</p>
          <FaUser />
          </button>

          <button class="inline-flex items-center space-x-3 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-2">
            <p>Contact us</p>
            <MdOutlineLocalPhone />
          </button>

        </div>
      </header>


      <div className='w-[100%] h-[100%] flex flex-row '>

        <div className='md:w-[13%] w-[40%] text-lg h-auto  pt-5' style={{ "borderRadius": "1px solid gray" }}>
          <ul className='w-[100%] h-auto flex flex-col text-black text-center '>
            <p className='text-md '>Gender</p>
            <li >
              <div class="flex items-center mb-4 text-black ml-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300 rounded" />
                <label for="default-checkbox" class="ms-2 text-sm text-black font-medium ">Mens</label>
              </div>
            </li>
            <li >
              <div class="flex items-center mb-4 text-black ml-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300 rounded" />
                <label for="default-checkbox" class="ms-2 text-sm text-black font-medium ">Womens</label>
              </div>
            </li>
            <li >
              <div class="flex items-center mb-4 text-black ml-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300 rounded" />
                <label for="default-checkbox" class="ms-2 text-sm text-black font-medium ">Kids</label>
              </div>
            </li>

            <p className='text-md '>Rating</p>
            <li >
              <div class="flex items-center mb-4 text-black ml-4">
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
              </div>
              <div class="flex items-center mb-4 text-black ml-4">
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
              </div>
              <div class="flex items-center mb-4 text-black ml-4">
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
              </div>
              <div class="flex items-center mb-4 text-black ml-4">
                <FaStar className='inline-block text-[#e9c50d]' />
                <FaStar className='inline-block text-[#e9c50d]' />
              </div>
              <div class="flex items-center mb-4 text-black ml-4">
                <FaStar className='inline-block text-[#e9c50d]' />
              </div>
            </li>

            <p className='text-md '>Rating</p>
            <li className='text-left ml-3'>Under &#8377; 500</li>
            <li className='text-left ml-3'> &#8377; 500 - &#8377;1000</li>
            <li className='text-left ml-3'> &#8377; 1000 - &#8377;2000</li>
            <li className='text-left ml-3'> &#8377; 2000 - &#8377;3000</li>
            <li className='text-left ml-3'> &#8377; 3000 - &#8377;4000</li>

          </ul>
        </div>
        <div className='flex-1 flex flex-row flex-wrap bg-red-0 justify-around w-[100%] h-auto'>
          {
            [...new Array(30)].map((ele, index) => {
              return <CardTwo />
            })
          }
        </div>

      </div>
    </>
  )
}

export default Products
