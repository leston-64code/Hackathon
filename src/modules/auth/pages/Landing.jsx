import { SiNike } from "react-icons/si";
import "./index.css"
import Footer from "../../../layout/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "./Components/Card";

const Landing = () => {
  return (
    <>
      <div className="w-[100%] h-auto bg-red-200 relative ">

        <nav className="w-[100%]  bg-green-30 absolute top-0 text-white text-lg flex flex-row ">
          <ul className="w-[20%] p-4 h-[100%] flex flex-row justify-center  space-x-10  align-middle">
            <SiNike className="text-[80px] absolute top-0" />
          </ul>
          <ul className="w-[60%] p-4 h-[100%] flex flex-row  justify-center  space-x-32">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <ul className="w-[20%] p-4 h-[100%] flex flex-row justify-center  space-x-10">
            <li>Login</li>
            <li>Signup</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* <img src={require("./assets/main.jpg")} className="object-contain w-[100%] h-[100%]" alt="" /> */}
        <video style={{"width":"100%","height":"100%"}} controls autoplay>
          <source src={require("./WhatsApp Video 2024-01-12 at 10.26.31_eec17d4d.mp4")} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>



        <div className="flex flex-col w-[50%] h-auto">
          <p className="text-one uppercase absolute top-1/4 ml-10 text-[115px] text-white">Just
            <span className="text-one-span"> do </span> <br /> it</p>
          <p></p>
        </div>

      </div>

      <p className="text-4xl ml-[2%] my-9 uppercase font-extrabold" data-aos="fade-up">Who are you shopping for ?</p>

      <div className="w-[100%] md:h-[450px] h-auto  bg-green-0 flex md:flex-row  justify-around mb-10 ">
        <div className="w-[28%] h-[100%] bg-red-40 rounded-xl">
          <img src={require("./assets/WhatsApp Image 2024-01-12 at 10.42.32_f9b8e5a2.jpg")} alt="" className="rounded-xl w-[100%] h-[100%] object-cover object-center" />
        </div>
        <div className="w-[28%] h-[100%] bg-red-40 rounded-xl">
          <img src={require("./assets/WhatsApp Image 2024-01-12 at 10.42.32_deb09641.jpg")} alt="" className="rounded-xl w-[100%] h-[100%] object-cover object-center" />
        </div>
        <div className="w-[28%] h-[100%] bg-red-40 rounded-xl">
          <img src={require("./assets/WhatsApp Image 2024-01-12 at 11.04.47_d22665be.jpg")} alt="" className="rounded-xl w-[100%] h-[100%] object-cover object-center" />
        </div>
      </div>

      <p className="text-4xl ml-[2%] my-9 uppercase font-extrabold" data-aos="fade-up">Trending</p>

      <Carousel>

        {
          [...new Array(10)].map((ele, index) => {
            return <Card />
          })
        }
      </Carousel>

      <Footer />
    </>
  )
}

export default Landing
