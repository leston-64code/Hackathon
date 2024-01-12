import {BsFacebook,BsLinkedin} from "react-icons/bs"
import {FaXTwitter,FaWhatsapp} from "react-icons/fa6"
import {RiInstagramFill} from "react-icons/ri"
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
        <div className="bg-black w-[100%] h-auto text-white px-5 md:px-16 lg:px-28 pt-8 pb-5 mt-16">
            <p className="foot-links">About</p>
            <p className="foot-links">Our Services</p>
            <p className="foot-links">Blogs</p>
            <p className="foot-links">Contact us</p>
            <div className="flex md:flex-row flex-col w-[100%]">

                <div className="w-full text-center md:text-left md:w-[50%] pt-16">
                    <p className="text-gray-400"><span className="text-white">&copy;</span>2023&nbsp;&nbsp;Xeroverse. All rights reserved <span className="text-gray-400 hover:cursor-pointer mx-5 hover:underline">Privacy & Terms</span> <span className="text-gray-400 hover:cursor-pointer mx-5 hover:underline">Cookies</span></p>
                </div>

                <div className=" md:w-[50%] w-full text-center md:text-right space-y-3 md:order-none order-first mt-5">
                    <p className="text-gray-400 hover:cursor-pointer hover:underline">Get in touch</p>
                    <div className="flex flex-row  w-[100%] items-end md:justify-end justify-center space-x-6">
                        <RiInstagramFill className="foot-icons"/>
                        <BsFacebook className="foot-icons"/>
                        <FaXTwitter className="foot-icons"/>
                        <BsLinkedin className="foot-icons"/>
                        <FaWhatsapp className="foot-icons"/>
                    </div>
                    <p><AiFillHeart className="inline-block mx-1"/><AiFillHeart className="inline-block mx-1"/><AiFillHeart className="inline-block mx-1 mr-3"/>Designed and developed in India, with love !</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer
