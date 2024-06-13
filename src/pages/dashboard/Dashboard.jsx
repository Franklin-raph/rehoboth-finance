import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { PiArrowElbowUpLeftLight } from "react-icons/pi";
import { VscArrowSmallRight } from "react-icons/vsc";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';

const Dashboard = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='mb-6'>
                        <p className='text-[#121212] text-[24px]'>Hi, Lucky</p>
                        <p className='text-[#767676] text-[14px] font-[300]'>Welcome to Rehoboth finance </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className="bg-gradient-to-r from-primary-color to-blue-400 text-white pt-3 rounded-lg w-full mx-auto">
                            <div className='flex items-center justify-between px-6'>
                                <p></p>
                                <div className="bg-[#9A9A9A4D] p-[10px] rounded-full inline-flex items-center gap-3">
                                    <img src="./images/simple-mission1.svg" alt="" />
                                    <p>6.5k</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-4 px-6">
                                <div>
                                    <h2 className="text-[#F6F6F6] text-[14px]">AVAILABLE BALANCE</h2>
                                    <p className="text-4xl mt-5 mb-2 font-bold">119,462,544.73 <span className="text-sm inline-flex items-center">NGN <GoChevronDown /></span></p>
                                    <p className="text-[16px] font-[300] text-gray-200">≈ 80000.58 USDC</p>
                                </div>
                            </div>
                            <div className="flex px-6 gap-4 py-4 bg-[#99AAF961]">
                                <button className="bg-white text-blue-500 py-[6px] px-6 rounded-[8px]"> + Deposit</button>
                                <button className="border border-white text-white py-[6px] px-6 rounded-[8px]">Withdraw</button>
                            </div>
                        </div>
                        <div className="border border-[#E1E1E1] pt-3 rounded-lg w-full mx-auto">
                            <div className='flex items-center justify-between px-3'>
                                <p className='text-[#7A7A7A] text-[14px]'>Reward Points</p>
                                <div className='bg-[#899EFD1A] inline-flex items-center rounded-md'>
                                    <div className='flex items-center gap-3 border-r border-gray-300 py-2 px-4'>
                                        <img src="./images/tag-user.svg" alt="" />
                                        <p className='text-primary-color text-[10px]'>139181 Users</p>
                                    </div>
                                    <div className='flex items-center gap-3 py-2 px-4'>
                                        <img src="./images/cup-colored.svg" alt="" />
                                        <p className='text-primary-color text-[10px]'>20 Tiers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start mb-16 px-3">
                                <div>
                                    {/* <h2 className="text-lg">AVAILABLE BALANCE</h2> */}
                                    <p className="text-4xl mt-5 mb-2 font-bold text-[#121212]">5,462,544.00<span className="text-[14px] font-[300]">Points</span></p>
                                    {/* <p className="text-[16px] font-[300] text-gray-200">≈ 80000.58 USDC</p> */}
                                </div>
                            </div>
                            <div className="flex bg-[#F6F6F6] px-6 py-4">
                                <button className="text-white bg-primary-color py-[6px] px-4 rounded-md">Explore Ecosytem</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-5'>
                        <div className='w-[65%] h-[430px] border border-[#E1E1E1] rounded-[8px]'></div>
                        <div className='w-[35%] rounded-[8px] border border-[#E1E1E1] p-5'>
                            <p>Assets</p>
                            <div className='mt-10'>
                                <div className='flex items-center justify-between border-b border-[#E4E7EC99] pb-2 mb-5'>
                                    <div className='flex items-center gap-2'>
                                        <img src="./images/Bitcoin.svg" alt="" />
                                        <div>
                                            <p className='text-[#1C1C1C]'>Bitcoin</p>
                                            <p className='text-[9px] text-[#0E0E0E]'>BTC</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p>0.074566</p>
                                        <div className='text-[10px] text-[#5465FF] flex items-center gap-[2px]'>
                                            <BsArrowUp />
                                            <p>$29,25.70</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b border-[#E4E7EC99] pb-2 mb-5'>
                                    <div className='flex items-center gap-2'>
                                        <img src="./images/Ethereum.svg" alt="" />
                                        <div>
                                            <p className='text-[#1C1C1C]'>Ethereum</p>
                                            <p className='text-[9px] text-[#0E0E0E]'>ETH</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p>1.250</p>
                                        <div className='text-[10px] text-[#FF5E54] flex items-center gap-[2px]'>
                                            <BsArrowDown />
                                            <p>$29,25.70</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b border-[#E4E7EC99] pb-2 mb-5'>
                                    <div className='flex items-center gap-2'>
                                        <img src="./images/USD-Coin.svg" alt="" />
                                        <div>
                                            <p className='text-[#1C1C1C]'>USD Coin</p>
                                            <p className='text-[9px] text-[#0E0E0E]'>USDC</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p>0.074566</p>
                                        <div className='text-[10px] text-[#5465FF] flex items-center gap-[2px]'>
                                            <BsArrowUp />
                                            <p>$29,25.70</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b border-[#E4E7EC99] pb-2 mb-5'>
                                    <div className='flex items-center gap-2'>
                                        <img src="./images/Group.svg" alt="" />
                                        <div>
                                            <p className='text-[#1C1C1C]'>EUR Coin</p>
                                            <p className='text-[9px] text-[#0E0E0E]'>EURC</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p>1.000</p>
                                        <div className='text-[10px] text-[#5465FF] flex items-center gap-[2px]'>
                                            <BsArrowUp />
                                            <p>$29,25.70</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b border-[#E4E7EC99] pb-2'>
                                    <div className='flex items-center gap-2'>
                                        <img src="./images/xlm.svg" alt="" />
                                        <div>
                                            <p className='text-[#1C1C1C]'>Stellar Lumens</p>
                                            <p className='text-[9px] text-[#0E0E0E]'>XLM</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <p>1.000</p>
                                        <div className='text-[10px] text-[#5465FF] flex items-center gap-[2px]'>
                                            <BsArrowUp />
                                            <p>$29,25.70</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-[#E1E1E1] mt-5 rounded-[4px] p-6'>
                        <p className='text-[#121212] text-[20px] mb-10'>Recent Transactions</p>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-left">
                                <thead className="text-[12px] text-[#121212]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 th1 font-[400]">S/N</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Transaction ID</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Amount</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Transaction Type</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Coin/Destination</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Status</th>
                                        <th scope="col" className="px-6 py-3 font-[400]">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px]'>
                                        <td className="px-6 py-4">1.</td>
                                        <td className="px-6 py-4">c0fb1407e0d5c7...bad0</td>
                                        <td className="px-6 py-4">$25000</td>
                                        <td className="px-6 py-4">Crypto withdrawal</td>
                                        <td className='px-6 py-4 text-center'>
                                            <img src="./images/Nigeria.svg" alt="" className='inline' />
                                            <VscArrowSmallRight className='inline'/>
                                            <img src="./images/Stellar.svg" alt="" className='inline' />
                                        </td>
                                        <td className="px-6 py-2 mt-3 rounded-full flex items-center text-[#344054] bg-[#F2F4F7]">
                                            <PiArrowElbowUpLeftLight />
                                            <p>Processing</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>10:15pm</p>
                                            <p>17th, Feb 2024</p>
                                        </td>
                                    </tr>
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px]'>
                                        <td className="px-6 py-4">2.</td>
                                        <td className="px-6 py-4">c0fb1407e0d5c7...bad0</td>
                                        <td className="px-6 py-4">$25000</td>
                                        <td className="px-6 py-4">Crypto withdrawal</td>
                                        <td className='px-6 py-4 text-center'>
                                            <img src="./images/Nigeria.svg" alt="" className='inline' />
                                            <VscArrowSmallRight className='inline'/>
                                            <img src="./images/Stellar.svg" alt="" className='inline' />
                                        </td>
                                        <td className="px-6 py-2 mt-3 rounded-full flex items-center text-[#344054] bg-[#F2F4F7]">
                                            <PiArrowElbowUpLeftLight />
                                            <p>Processing</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>10:15pm</p>
                                            <p>17th, Feb 2024</p>
                                        </td>
                                    </tr>
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px]'>
                                        <td className="px-6 py-4">3.</td>
                                        <td className="px-6 py-4">c0fb1407e0d5c7...bad0</td>
                                        <td className="px-6 py-4">$25000</td>
                                        <td className="px-6 py-4">Fiat withdrawal</td>
                                        <td className='px-6 py-4 text-center'>
                                            <img src="./images/Nigeria.svg" alt="" className='inline' />
                                            <VscArrowSmallRight className='inline'/>
                                            <img src="./images/Stellar.svg" alt="" className='inline' />
                                        </td>
                                        <td className="px-6 py-2 mt-3 rounded-full flex items-center text-[#41920D] bg-[#EDFFE2] gap-1">
                                            <p className='p-1 rounded-full bg-[#41920D]'></p>
                                            <p>Completed</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>10:15pm</p>
                                            <p>17th, Feb 2024</p>
                                        </td>
                                    </tr>
                                    <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px]'>
                                        <td className="px-6 py-4">4.</td>
                                        <td className="px-6 py-4">c0fb1407e0d5c7...bad0</td>
                                        <td className="px-6 py-4">$25000</td>
                                        <td className="px-6 py-4">Crypto withdrawal</td>
                                        <td className='px-6 py-4 text-center'>
                                            <img src="./images/Nigeria.svg" alt="" className='inline' />
                                            <VscArrowSmallRight className='inline'/>
                                            <img src="./images/Stellar.svg" alt="" className='inline' />
                                        </td>
                                        <td className="px-6 py-2 mt-3 rounded-full flex items-center text-[#41920D] bg-[#EDFFE2] gap-1">
                                            <p className='p-1 rounded-full bg-[#41920D]'></p>
                                            <p>Completed</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>10:15pm</p>
                                            <p>17th, Feb 2024</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard