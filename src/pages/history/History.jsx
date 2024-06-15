import React from 'react'
import { GoChevronDown } from "react-icons/go";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { PiArrowElbowUpLeftLight } from "react-icons/pi";
import { VscArrowSmallRight } from "react-icons/vsc";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const History = () => {

  const navigate = useNavigate()

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[30px] py-[20px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='inline-flex items-center gap-1 cursor-pointer mt-3 text-[#333]' onClick={() => navigate('/get-started')}>
                    <IoIosArrowRoundBack className='text-[20px]'/>
                    <p>Back</p>
                  </div>
                  <p className='my-7'>Recent Transactions</p>
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
                              <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px] cursor-pointer' onClick={() => navigate('/transaction-info')}>
                                  <td className="px-6 py-4">1.</td>
                                  <td className="px-6 py-4">0fb17...bad0</td>
                                  <td className="px-6 py-4">$25000</td>
                                  <td className="px-6 py-4">Crypto withdrawal</td>
                                  <td className='px-6 py-4 text-center'>
                                      <img src="./images/Nigeria.svg" alt="" className='inline' />
                                      <VscArrowSmallRight className='inline'/>
                                      <img src="./images/Stellar.svg" alt="" className='inline' />
                                  </td>
                                  <td className="py-2 mt-3 rounded-full flex justify-center items-center text-[#344054] bg-[#F2F4F7]">
                                      <PiArrowElbowUpLeftLight />
                                      <p>Processing</p>
                                  </td>
                                  <td className="px-6 py-4">
                                      <p>10:15pm</p>
                                      <p>17th, Feb 2024</p>
                                  </td>
                              </tr>
                              <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px] cursor-pointer' onClick={() => navigate('/transaction-info')}>
                                  <td className="px-6 py-4">2.</td>
                                  <td className="px-6 py-4">0fb17...bad0</td>
                                  <td className="px-6 py-4">$25000</td>
                                  <td className="px-6 py-4">Crypto withdrawal</td>
                                  <td className='px-6 py-4 text-center'>
                                      <img src="./images/Nigeria.svg" alt="" className='inline' />
                                      <VscArrowSmallRight className='inline'/>
                                      <img src="./images/Stellar.svg" alt="" className='inline' />
                                  </td>
                                  <td className="py-2 mt-3 rounded-full flex justify-center items-center text-[#344054] bg-[#F2F4F7]">
                                      <PiArrowElbowUpLeftLight />
                                      <p>Processing</p>
                                  </td>
                                  <td className="px-6 py-4">
                                      <p>10:15pm</p>
                                      <p>17th, Feb 2024</p>
                                  </td>
                              </tr>
                              <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px] cursor-pointer' onClick={() => navigate('/transaction-info')}>
                                  <td className="px-6 py-4">3.</td>
                                  <td className="px-6 py-4">0fb17...bad0</td>
                                  <td className="px-6 py-4">$25000</td>
                                  <td className="px-6 py-4">Fiat withdrawal</td>
                                  <td className='px-6 py-4 text-center'>
                                      <img src="./images/Nigeria.svg" alt="" className='inline' />
                                      <VscArrowSmallRight className='inline'/>
                                      <img src="./images/Stellar.svg" alt="" className='inline' />
                                  </td>
                                  <td className="py-2 mt-3 rounded-full flex justify-center items-center text-[#41920D] bg-[#EDFFE2] gap-1">
                                      <p className='p-1 rounded-full bg-[#41920D]'></p>
                                      <p>Completed</p>
                                  </td>
                                  <td className="px-6 py-4">
                                      <p>10:15pm</p>
                                      <p>17th, Feb 2024</p>
                                  </td>
                              </tr>
                              <tr style={{borderBottom:"1px solid #dcdcdc"}} className='text-[12px] cursor-pointer' onClick={() => navigate('/transaction-info')}>
                                  <td className="px-6 py-4">4.</td>
                                  <td className="px-6 py-4">0fb17...bad0</td>
                                  <td className="px-6 py-4">$25000</td>
                                  <td className="px-6 py-4">Crypto withdrawal</td>
                                  <td className='px-6 py-4 text-center'>
                                      <img src="./images/Nigeria.svg" alt="" className='inline' />
                                      <VscArrowSmallRight className='inline'/>
                                      <img src="./images/Stellar.svg" alt="" className='inline' />
                                  </td>
                                  <td className="px-[12px] py-2 mt-3 rounded-full flex justify-center items-center text-[#41920D] bg-[#EDFFE2] gap-1">
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
  )
}

export default History