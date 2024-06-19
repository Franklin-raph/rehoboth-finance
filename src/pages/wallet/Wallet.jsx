import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { GoChevronDown } from "react-icons/go";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { PiArrowElbowUpLeftLight } from "react-icons/pi";
import { VscArrowSmallRight } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { GiCash } from "react-icons/gi";

const Wallet = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="px-[20px] py-[30px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='mb-6 flex items-end justify-between'>
                        <p className='text-[#151517] font-[500] text-[24px]'>My Wallet</p>
                        <p onClick={() => navigate('/send')} className='text-[#3458D9] bg-[#072AC81F] text-[14px] py-[3px] px-2 rounded-[4px] cursor-pointer flex items-center gap-1'>
                          <GiCash />Send Funds</p>
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
                    <div className="rounded-lg w-full mx-auto bg-[#F8F8F8] border p-[1rem] mt-[1rem]">
                      <p className='text-[#121212]'>Spendable assets</p>
                      <table className="w-full text-sm text-left rtl:text-left mt-[1rem]">
                          <thead className="text-[12px] text-[#121212]">
                              <tr>
                                  <th scope="col" className="py-3 th1 font-[400]">Name</th>
                                  <th scope="col" className="py-3 font-[400]">Amount</th>
                                  <th scope="col" className="py-3 font-[400]">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Stellar Lumens</p>
                                    <p className='text-[#828282]'>XLM</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Bitcoin</p>
                                    <p className='text-[#828282]'>BTC</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Ethereum</p>
                                    <p className='text-[#828282]'>ETH</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>US Dollar</p>
                                    <p className='text-[#828282]'>UDSC</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Nigerian Naira</p>
                                    <p className='text-[#828282]'>NGN</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              
                          </tbody>
                      </table>
                    </div>
                    <div className="rounded-lg w-full mx-auto bg-[#F8F8F8] border p-[1rem] mt-[1rem]">
                      <p className='text-[#121212]'>Saved assets</p>
                      <table className="w-full text-sm text-left rtl:text-left mt-[1rem]">
                          <thead className="text-[12px] text-[#121212]">
                              <tr>
                                  <th scope="col" className="py-3 th1 font-[400]">Name</th>
                                  <th scope="col" className="py-3 font-[400]">Amount</th>
                                  <th scope="col" className="py-3 font-[400]">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Stellar Lumens</p>
                                    <p className='text-[#828282]'>XLM</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Bitcoin</p>
                                    <p className='text-[#828282]'>BTC</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Ethereum</p>
                                    <p className='text-[#828282]'>ETH</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>US Dollar</p>
                                    <p className='text-[#828282]'>UDSC</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                              <tr className='text-[12px]'>
                                  <td className="py-4">
                                    <p className='text-[#121212]'>Nigerian Naira</p>
                                    <p className='text-[#828282]'>NGN</p>
                                  </td>
                                  <td className="py-4">₦100,000.00</td>
                                  <td className="py-4 flex items-center gap-2">
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Deposit</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Withdraw</p>
                                    <p className='text-[#3458D9] bg-[#7B93FE08] py-[3px] px-2 rounded-[4px] cursor-pointer'>Convert</p>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet