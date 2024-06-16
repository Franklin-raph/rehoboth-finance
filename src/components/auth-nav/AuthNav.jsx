import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const AuthNav = () => {
  return (
    <nav className="flex items-center justify-between py-5 relative z-[11] bg-white px-[100px]">
        <div className="flex items-center gap-10">
            <Link  to='/' className='block'>
                <img src="./images/rehoboth-logo.svg" alt="" />
            </Link>
            <ul className="flex items-center gap-10">
                <li className="text-[#667085] flex items-center gap-2 cursor-pointer">
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
  )
}

export default AuthNav