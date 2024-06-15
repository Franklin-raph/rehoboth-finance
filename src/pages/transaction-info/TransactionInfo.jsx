import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { PiArrowElbowUpLeftLight } from "react-icons/pi";
import { IoCopy } from "react-icons/io5";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const TransactionInfo = () => {

    const navigate = useNavigate()


  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[30px] py-[20px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='flex items-center gap-1 cursor-pointer mt-3 text-[#333]' onClick={() => navigate('/history')}>
                        <IoIosArrowRoundBack className='text-[20px]'/>
                        <p>Back</p>
                    </div>
                    <div className='flex items-center justify-between mt-12'>
                        <div className='flex items-end'>
                            <p className='text-[40px] font-[500]'>$25,000</p>
                            <div className="py-1 text-[12px] px-2 mb-[15px] rounded-full flex justify-center items-center text-[#41920D] bg-[#EDFFE2] gap-1">
                                <p className='p-1 rounded-full bg-[#41920D]'></p>
                                <p>Completed</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-[500]'>Transaction Reference:</p>
                            <div className='text-[#929497] flex items-center gap-3'>
                                <p >RF-b3f0725999b7a...</p>
                                <IoCopy className='cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[2rem] border-t border-b py-[2rem] flex items-center justify-between'>
                        <div>
                            <p className='text-[#929497] mb-5'>Date</p>
                            <p className='text-[#121212]'>September 14, 2022</p>
                        </div>
                        <div>
                            <p className='text-[#929497] mb-5'>Rehoboth ID</p>
                            <p className='text-[#121212]'>benxcharles@rf.id</p>
                        </div>
                        <div>
                            <p className='text-[#929497] mb-5'>Customer name</p>
                            <p className='text-[#121212]'>Ben Charles</p>
                        </div>
                        <div>
                            <p className='text-[#929497] mb-5'>TXN Hash</p>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#121212]'>c0fb140be...bbad0</p>
                                <IoCopy className='cursor-pointer text-[#929497]'/>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#929497] mb-5'>Wallet Address</p>
                            <div className='flex items-center gap-3'>
                                <p className='text-[#121212]'>GCSJQP...MK4EHNHEP</p>
                                <IoCopy className='cursor-pointer text-[#929497]'/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[2rem] border-b pb-5'>
                        <p className='font-[500]'>Payment Details</p>
                        <div className="mt-7 font-[400] text-[14px] flex flex-col gap-[1rem]">
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Amonut</span>
                                <span className="w-3/4 text-[#414553]">$25,000</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Processing Fee</span>
                                <span className="w-3/4 text-[#414553]">$10.0</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Destination Country</span>
                                <span className="w-3/4 text-[#414553]">Nigeria</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">From</span>
                                <p className="w-3/4 flex items-center gap-2">
                                    <span className='text-[#414553]'>GDVHWE4VRKGMRWNBPNTAMY6HHVG7LVVJAABZRK2B2FWJ2PZGGFISIJTZ</span>
                                    <IoCopy className='cursor-pointer text-[#929497]'/>
                                </p>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">To</span>
                                <p className="w-3/4 flex items-center gap-2">
                                    <span className='text-[#414553]'>GCSJQPC735OD2IMIKDXX76NOSJEBTEHTN6AWUGBWT2D2MGRMK4EHNHEP</span>
                                    <IoCopy className='cursor-pointer text-[#929497]'/>
                                </p>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Transaction Type</span>
                                <span className="w-3/4 text-[#414553]">Crypto Withdrawal</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Transaction Hash</span>
                                <p className="w-3/4 flex items-center gap-2">
                                    <span className='text-[#414553]'>c0fb140be4f0056a7e0d5c7a52464c87246d04d0d38a3871e5c45d56250bbad0</span>
                                    <IoCopy className='cursor-pointer text-[#929497]'/>
                                </p>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Transaction ID</span>
                                <p className="w-3/4 flex items-center gap-2">
                                    <span className='text-[#414553]'>c0fb140be4f0056a7e0d5c7a52464c87246d04d0d38a3871e5c45d56250bbad0</span>
                                    <IoCopy className='cursor-pointer text-[#929497]'/>
                                </p>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Coin</span>
                                <span className="w-3/4 text-[#414553]">USDT</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Narration</span>
                                <span className="w-3/4 text-[#414553]">Payment for Books</span>
                            </div>
                            <div className="flex">
                                <span className="w-1/4 font-[500] text-[#929497] text-[14px]">Network</span>
                                <span className="w-3/4 text-[#414553]">Stellar Classic Network</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[1.2rem]'>
                        <p className='font-[500] mb-4'>Timeline</p>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-[#5CA271] p-1 rounded-full'>
                                        <div className='bg-[#5CA271] p-1 border rounded-full'></div>
                                    </div>
                                    <p className='text-[14px]'>Transaction Confirmed</p>
                                </div>
                                <p className='text-[#929497] ml-7 text-[14px]'>10:15:16 pm on 17, February, 2024</p>
                            </div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-[#929497] p-1 rounded-full'>
                                        <div className='bg-[#929497] p-1 border rounded-full'></div>
                                    </div>
                                    <p className='text-[14px]'>Transaction Started</p>
                                </div>
                                <p className='text-[#929497] ml-7 text-[14px]'>10:15:16 pm on 17, February, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TransactionInfo