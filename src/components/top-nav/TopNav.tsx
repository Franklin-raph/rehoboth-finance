import React, { useState } from 'react';

import { IoIosLogOut } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LuSettings2 } from 'react-icons/lu'
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci'
import { MdClose } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';


const TopNav = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [notification, setNotification] = useState(false)

  const notificationArray = [
    {
      title:'New Daily Mint by Atari',
      desc:'Unlock community, gaming, and IRL utility with a new generation of Atari.'
    },
    {
      title:'Your weekly summary is ready for review🔥 ',
      desc:'Unlock community, gaming, and IRL utility with a new generation of Atari.'
    },
    {
      title:'Bitcoin(BTC) +1.1% ($40,00) in the last 18 mins.',
      desc:'Unlock community, gaming, and IRL utility with a new generation of Atari.'
    },
    {
      title:'Invitation Accepted!',
      desc:'Unlock community, gaming, and IRL utility with a new generation of Atari.'
    },
    {
      title:'50% off the service fee',
      desc:'Unlock community, gaming, and IRL utility with a new generation of Atari.'
    }
  ]

  return (
    <div>

      <div className='bg-[#FFFFFF] border border-[#BDBDBD] rounded-[8px] hidden lg:flex items-center justify-center gap-[70px] w-[95%] py-[1.2rem] top-0 right-0 z-[99] mx-auto mt-[1.2rem] relative'>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2'>
            <img src="./images/overview.svg" alt="" />
            <p>
              <p className='text-[#737985] capitalize'>{location.pathname.replace(/^\//, '')}</p>
            </p>
          </div>
          <div className='flex items-center gap-2 bg-[#F8F8F8] border border-[#BDBDBD] rounded-[4px] px-[12px] py-[7px] w-[200px] lg:w-[400px] '>
            <CiSearch className='text-[#828282] text-[26px] cursor-pointer'/>
            <input type="text" placeholder='Search transactions, assets etc.' className='text-[#333333] w-full placeholder:text-[#333333] bg-transparent text-[14px] outline-none'/>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          {/* <img src="./images/moon.svg" alt="" /> */}
          <div className='p-2 rounded-[8px] bg-[#B9B9B926]'>
            <img src="./images/notification.svg" alt="" className='cursor-pointer'  onClick={() => setNotification(true)} />
          </div>
          <button className="flex items-center gap-2 text-white px-4 py-[10px] rounded-[8px] cutom-btn-gradient" onClick={() => navigate('/leader-board')} >
            <img src="./images/ranking.svg" alt="" />
            <p>Leaderboard</p>
          </button>
        </div>
        {
          notification &&
          <div className='h-[500px] overflow-y-scroll absolute z-[9999] mt-[590px] right-0 bg-white shadow-md border w-[360px] p-5 rounded-[8px]'>
            <div className='flex items-center justify-between'>
              <p className='text-[#282828] font-[500] text-[20px]'>Notifications</p>
              <MdClose className='text-[#101828] cursor-pointer text-[20px]' onClick={() => setNotification(false)}/>
            </div>
            {
              notificationArray.map((item, index) => {
                return (
                  <div key={index} className='border-b mt-5 pb-1'>
                    <p className='text-primary-color font-[600]'>{item.title}</p>
                    <p className='text-[#767676] font-[300] text-[14px]'>{item.desc}</p>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
      <div className='p-[20px] flex items-center justify-between'>
        <Link  to='/' className='block lg:hidden'>
            <img src="./images/rehoboth-logo.svg" className='' alt="" />
        </Link>
        <BiMenu className='text-[25px] cursor-pointer lg:hidden block'/>
      </div>
    </div>
  )
}

export default TopNav