// import "./style.css"
import { Link } from "react-router-dom"
import { SiNike } from "react-icons/si";

const Login = () => {
  return (
    <>
      <div className='w-screen h-screen flex flex-row'>

        <div className='w-[80%] h-[100%] hidden lg:block'>
          <img src={require("./assets/Nike-LunarGlide-6-Womens-Running-Shoe-654434_603_G_PREM.jpg")} alt="img-here" className='w-full h-full object-cover' />
        </div>

        <div className='w-[60%] h-[100%] bg-red-5 flex-auto'>
          <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

              {/* <img className="w-auto h-8 mr-2 mb-3" src={require("./assets/logo.png")} alt="logo" /> */}
              <SiNike  className="text-[100px] text-red-600"/>

              <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Login
                  </h1>
                  <p className='inline-block'>New to nike.&nbsp;</p>
                  <Link to="/register" className='font-semibold text-[#1A5ACC] hover:underline inline-block'>Create an account?</Link>

                  <form className="space-y-4 md:space-y-6" action="#">


                    <div>
                      <input type="email" name="email" id="email" className="bg-[#F5F5F5] text-[#636363] sm:text-sm rounded block w-full p-3 outline-none hover:shadow-md input-placeholder" placeholder="Email Address" required="" />
                    </div>

                    <div>
                      <input type="password" name="password" id="password" placeholder="Enter Password" className="bg-[#F5F5F5] text-[#636363] sm:text-sm rounded block w-full p-3 outline-none hover:shadow-md input-placeholder" required="" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start">

                        <div className="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required="" />
                        </div>

                        <div className="ml-3 text-sm">
                          <label for="remember" className="text-gray-500">Stay logged in</label>
                        </div>

                      </div>
                      <Link to="/forgot" className="text-sm font-medium text-[#1A5ACC] hover:underline ">Forgot password?</Link>
                    </div>

                    <div className='items-center justify-center text-center'>

                      {/* <p className='text-[#8C8C8C] text-sm font-semibold text-left'>If needed, inform users about the use of a CAPTCHA or reCAPTCHA system for added security.</p> */}
                      <button type="submit" className="w-[50%] m-auto text-white bg-[#1A5ACC] font-medium rounded-md text-sm px-5 py-2.5 mt-3 text-center hover:shadow-lg">Login</button>

                    </div>

                    <div className='flex items-center'>
                      <hr className='w-[40%] mx-2' />
                      <p className='text-sm font-thin text-gray'>OR</p>
                      <hr className='w-[40%] mx-2' />
                    </div>

                    <div className='flex flex-row w-full justify-around'>
                      <img className='hover:shadow-md cursor-pointer' src={require("./assets/Google.png")} alt="" />
                      <img className='hover:shadow-md cursor-pointer' src={require("./assets/Linkedin.png")} alt="" />
                      <img className='hover:shadow-md cursor-pointer' src={require("./assets/Facebook.png")} alt="" />
                      <img className='hover:shadow-md cursor-pointer' src={require("./assets/Twitter X.png")} alt="" />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Login
