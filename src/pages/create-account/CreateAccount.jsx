import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";

const CreateAccount = () => {

    const navigate = useNavigate()

    async function handleSignIn(){
        navigate('/get-started')
    }

  return (
    <div className="relative">
      <nav className="flex items-center justify-between py-5 relative z-[11] bg-white px-[100px]">
        <div className="flex items-center gap-10">
          <Link  to='/' className='block'>
            <img src="./images/rehoboth-logo.svg" alt="" />
          </Link>
          <ul className="flex items-center gap-10">
            <li className="text-[#667085] flex items-center gap-2">
              <p>Blog</p>
              <FaChevronDown />
            </li>
            <li className="text-[#667085]">
              <Link href='#'>Faq</Link>
            </li>
          </ul>
        </div>
        <button className="flex items-center gap-2 bg-primary-color text-white px-4 py-[10px] rounded-[8px]">
          <BsLightningCharge />
          <p>Leaderboard</p>
        </button>
      </nav>

      <div className=" mt-[10rem]">
        <div className=" z-[10] w-[70%] mx-auto h-[80%] absolute left-[50%] top-[-5%] blury-bg"  style={{ transform: "translate(-50%, 0%)" }}></div>
        <div className=" flex flex-col justify-center items-center relative z-[11]">
          <div className="bg-white px-8 pt-8 pb-5 rounded-[16px] shadow-lg w-full max-w-[588px]">
            <div className="top-bg relative top-[-20px] flex items-center justify-center w-[300px] mx-auto">
              <img src="./images/logo.svg" alt="Rehoboth Finance Logo" className="mx-auto mb-4 relative top-[-65px] left-[11px]" />
            </div>
            <div className="text-center mb-12 mt-[-80px] relative z-[100]">
              <h2 className="text-2xl font-semibold">Create account</h2>
              <p className="text-[#667085] text-[14px]">Dive back into a world of premium features and explore the endless possibilities that await. Reconnect and continue your journey today.</p>
            </div>
            <div className="flex flex-col w-[400px] mx-auto">

              <div className="w-full flex flex-col gap-3 mb-[20px]">
                <button className="border border-[#D0D5DD] text-[#344054] py-2 px-4 rounded-[8px] flex items-center justify-center w-full shadow">
                  <img src="./images/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
                  Sign in with Google
                </button>
                <button className="border border-[#D0D5DD] text-[#344054] py-2 px-4 rounded-[8px] flex items-center justify-center w-full shadow">
                  <img src="./images/apple.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
                  Sign in with Discord
                </button>
              </div>
              
              <div className="text-center text-[#121212] flex items-center justify-center gap-2 my-[10px]">
                <div className="h-[1px] bg-[#dbdbdb] w-full"></div>
                <p className="text-[#667085]">OR</p>
                <div className="h-[1px] bg-[#dbdbdb] w-full"></div>
              </div>

              <div>
                <label htmlFor="email" className="text-[#121212] gont-[500] text-[14px] mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="olivia@rehoboth.com"
                  className="border border-gray-300 text-[#707070] p-2 rounded-[8px] w-full"
                />
              </div>
              <div className="my-5">
                <label htmlFor="password" className="text-[#121212] gont-[500] text-[14px] mb-1 block">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="border border-gray-300 p-2 rounded-[8px] w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-[#121212] gont-[500] text-[14px] mb-1 block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="border border-gray-300 p-2 rounded-[8px] w-full"
                />
              </div>

              <button onClick={handleSignIn} className="bg-primary-color text-white py-2 px-4 rounded-[8px] mt-5">
                Create Account
              </button>
              <div className="text-center text-[#808080] mt-[70px] text-[14px]">
                Already have an account? <a href="/login" className="text-blue-600">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] mb-5 mx-10 flex items-center justify-between">
        <p className="text-[#808080] text-[12px]">
          &copy; {new Date().getFullYear()} Rehoboth finance. All rights reserved.
        </p>
        <div className="text-[#808080] text-[12px] flex items-center gap-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#" className="mr-4">Terms of Use</Link>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount