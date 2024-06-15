import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { GoChevronDown } from "react-icons/go";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { PiArrowElbowUpLeftLight } from "react-icons/pi";
import { VscArrowSmallRight } from "react-icons/vsc";

const Wallet = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="px-[20px] py-[30px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='mb-6'>
                        <p className='text-[#151517] font-[500] text-[24px]'>My Wallet</p>
                        {/* <p className='text-[#767676] text-[14px] font-[300]'>Welcome to Rehoboth finance </p> */}
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className="rounded-lg w-full mx-auto bg-[#F8F8F8] border pt-[5rem] pb-[1rem]">
                            <div className="flex justify-between items-start mb-4 px-6">
                                <div>
                                    <h2 className="text-[#828282] text-[14px] tracking-[2.4px]">TOTAL BALANCE</h2>
                                    <p className="text-4xl mt-5 mb-2 text-[#121212]">119,462,544.73 <span className="text-sm inline-flex items-center">NGN <GoChevronDown /></span></p>
                                    <p className="text-[16px] font-[300] text-[#828282]">≈ 80000.58 USDC</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                          <div className="bg-[#F8F8F8] pt-[2rem] px-6 pb-[0.5rem] border mb-[0.6rem] rounded-lg">
                            <p className="text-[#828282] text-[14px] tracking-[2.4px]">SPENDABLE BALANCE</p>
                            <p className="text-2xl mt-3 text-[#121212]">79,641,696.5</p>
                          </div>
                          <div className="bg-[#F8F8F8] pt-[2rem] px-6 pb-[0.5rem] border rounded-lg">
                            <p className="text-[#828282] text-[14px] tracking-[2.4px]">SPENDABLE BALANCE</p>
                            <p className="text-2xl mt-3 text-[#121212]">79,641,696.5</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet