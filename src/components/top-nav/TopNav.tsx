import React from 'react';

import { IoIosLogOut } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LuSettings2 } from 'react-icons/lu'
import { RxDashboard } from "react-icons/rx";
import { useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci'


const TopNav = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className='bg-[#FFFFFF] border border-[#BDBDBD] rounded-[8px] flex items-center justify-center gap-[70px] w-[95%] py-[1.2rem] top-0 right-0 z-[99] mx-auto mt-[1.2rem]'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2'>
          <img src="./images/overview.svg" alt="" />
          {/* <p className='text-[#737985] capitalize'>{pathname.replace(/^\//, '')}</p> */}
        </div>
        <div className='flex items-center gap-2 bg-[#F8F8F8] border border-[#BDBDBD] rounded-[4px] px-[12px] py-[7px] w-[400px]'>
          <CiSearch className='text-[#828282] text-[26px] cursor-pointer'/>
          <input type="text" placeholder='Search transactions, assets etc.' className='text-[#333333] w-full placeholder:text-[#333333] bg-transparent text-[14px] outline-none'/>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {/* <img src="./images/moon.svg" alt="" /> */}
        <div className='p-2 rounded-[8px] bg-[#B9B9B926]'>
          <img src="./images/notification.svg" alt="" />
        </div>
        <button className="flex items-center gap-2 text-white px-4 py-[10px] rounded-[8px] cutom-btn-gradient" onClick={() => navigate('/leader-board')} >
          <img src="./images/ranking.svg" alt="" />
          <p>Leaderboard</p>
        </button>
      </div>
    </div>
  )
}

export default TopNav