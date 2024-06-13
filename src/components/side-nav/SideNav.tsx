import React from "react";

import { RxDashboard } from "react-icons/rx";
import { BsTrophy } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { PiHandDepositBold, PiHandWithdrawBold, PiNotepad } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { TbMessageQuestion } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const SideNav = () => {

   const navigate = useNavigate()
   const location = useLocation()
  
  return (
    <div className='bg-[#ffffff] border border-[#BDBDBD] scrollbar w-[18%]' style={{ borderTopRightRadius:'8px', borderBottomRightRadius:'8px' }}>
        <div className='p-5 border-b cursor-pointer'>
            <img src="./images/rehoboth-logo.svg" alt="" />
        </div>
        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">DASHBOARD</p>
          <Link to='/get-started' className={ location.pathname.includes('/get-started') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              <RxDashboard />
              <p className="ml-[10px]">Get Started</p>
            </div>
          </Link>
          <Link to='/dashboard' className={ location.pathname.includes('/dashboard') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <RxDashboard />
                <p className="ml-[10px]">Dashboard</p>
            </div>
          </Link>
          <Link to='/earn-points' className={ location.pathname.includes('/earn-points') ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <BsTrophy />
                <p className="ml-[10px]">Earn Points</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">FINANCE</p>
          <Link to='#' className={ location.pathname.includes('wallet')  ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <IoWalletOutline />
                <p className="ml-[10px]">Wallet</p>
            </div>
          </Link>
          <Link to='/deposit' className={ location.pathname.includes('deposit')? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <PiHandDepositBold />
                <p className="ml-[10px]">Deposit</p>
            </div>
          </Link>
          <Link to='/withdraw' className={ location.pathname.includes('/withdraw') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <PiHandWithdrawBold />
                <p className="ml-[10px]">Withdraw</p>
            </div>
          </Link>
          <Link to='/transactions' className={ location.pathname.includes('/history') ? `flex items-center justify-between py-[10px] text-[#072AC8] px-5 bg-[#072AC81F]` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <PiNotepad />
                <p className="ml-[10px]">History</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">EARN</p>
          <Link to='/savings' className={ location.pathname.includes('/savings') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              <MdOutlineSavings />
              <p className="ml-[10px]">Savings</p>
            </div>
          </Link>
        </div>

        <div className=" my-10 text-white">
          <p className="text-[12px] text-[#98A2B3] mb-2 px-3">ACCOUNT</p>
          <Link to='/settings' className={ location.pathname.includes('/settings') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
              <RiSettingsLine />
              <p className="ml-[10px]">Settings</p>
            </div>
          </Link>
          <Link to='/help-and-support' className={ location.pathname.includes('/help-and-support') ? `flex items-center justify-between py-[10px] text-[#072AC8] bg-[#072AC81F] px-5` :`px-5 flex items-center justify-between py-[10px] text-[#101828]`}>
            <div className="flex items-center">
                <TbMessageQuestion />
                <p className="ml-[10px]">Help & Support</p>
            </div>
          </Link>
          <Link to='/' className='px-5 flex items-center justify-between py-[10px] text-[#101828]'>
            <div className="flex items-center">
              <TbLogout />
              <p className="ml-[10px]">Logout</p>
            </div>
          </Link>
        </div>

        <div className="ml-[10px] mt-[15rem] mb-16">
          <div className="flex align-center">
              <img src="/images/Avatar.svg"className="w-[50px]" style={{ marginRight: 12, }} />
              <div>
                <p className='text-[#101828] text-[14px] font-[500]'>Lucky Nweke</p>
                <p className="text-[#6F7975] text-[12px] tex-[#98A2B3]">favour@havilahstudios.com</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SideNav