import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { useNavigate, useParams } from 'react-router-dom';
import { BsQrCodeScan } from "react-icons/bs";


const Send = () => {

    const navigate = useNavigate()
    const { asset } = useParams()
    const settingsTypeArray = ["Address", "User Info", "Transaction"]
    const [selectedTab, setSelectedTab] = useState(settingsTypeArray[0])
    const [selectedTabIndex, setSelectedTabIndex] = useState(0)
    const [currencyDropDown, setCurrencyDropDown] = useState(false)

    const userInfoArrayTab = ["Email", "Phone", "Pay ID", "Rehoboth ID"]
    const [selectedInfo, setSelectedInfo] = useState(userInfoArrayTab[0])
    const [selectedInfoIndex, setSelectedInfoIndex] = useState(0)

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                    <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[36px]'>Choose Recipient</p>
                    <p className='font-[300] text-[#737985]'>Send money to self or buisness patners</p>
                    </div>
                    <div className='pt-[3rem] pb-[9rem] flex justify-center items-center rounded-[11px] mt-9 bg-[#F1F1F1] flex-col'>
                    <div className="flex justify-center items-center">
                        <div className="bg-[#F8F8F8] py-6 px-[40px] rounded-[8px] shadow w-[500px] border border-[#B2B2B27A]">
                            <div className="mb-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-[#383838] text-[14px] font-[300]">Withdrawal amount</p>
                                    <div className='flex text-[14px]'>
                                        <p className='text-[#383838]'>Balance:</p>
                                        <span className="text-primary-color">$200.00</span>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className="flex justify-between mt-2 bg-[#F1F1F1] rounded-[24px] p-2 items-center relative z-[10] border-2 border-gray-100">
                                        <div className='flex item-center gap-2'>
                                            <div className='flex items-center bg-[#76748014] rounded-full p-2 cursor-pointer' onClick={() => setCurrencyDropDown(!currencyDropDown)}>
                                                <img src="./images/Nigeria.svg" alt="" />
                                                <p className='mr-3 ml-1'>NGN</p>
                                                <IoChevronDown />
                                            </div>
                                            <input type="number" id="input-amount" className="outline-none w-1/2 bg-transparent text-[#121212]" placeholder="300000" />
                                        </div>
                                        <p className='text-primary-color mr-3 text-[12px]'>Max</p>
                                    </div>
                                    {
                                        currencyDropDown &&
                                        <div className='absolute bg-[#F1F1F1] w-[200px] pt-[3.5rem] pb-3 top-[18px] shadow-md'>
                                            <div className='px-3 py-2 hover:bg-gray-300 cursor-pointer'>
                                                <p className='text-[#1C1C1C] font-[300] text-[14px]'>Bitcoin</p>
                                                <p className='text-[10px] text-[#BEBEBE]'>BTC</p>
                                            </div>
                                            <div className='px-3 py-2 hover:bg-gray-300 cursor-pointer'>
                                                <p className='text-[#1C1C1C] font-[300] text-[14px]'>Bitcoin</p>
                                                <p className='text-[10px] text-[#BEBEBE]'>BTC</p>
                                            </div>
                                            <div className='px-3 py-2 hover:bg-gray-300 cursor-pointer'>
                                                <p className='text-[#1C1C1C] font-[300] text-[14px]'>Bitcoin</p>
                                                <p className='text-[10px] text-[#BEBEBE]'>BTC</p>
                                            </div>
                                            <div className='px-3 py-2 hover:bg-gray-300 cursor-pointer'>
                                                <p className='text-[#1C1C1C] font-[300] text-[14px]'>Bitcoin</p>
                                                <p className='text-[10px] text-[#BEBEBE]'>BTC</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="mb-4 mt-10">
                                <div className="">
                                    <p className="text-[#383838] text-[14px] font-[300]">Send to</p>
                                    <div className='flex items-center border-b border-[#EAECF0] mt-4'>
                                        {
                                            settingsTypeArray.map((item, index) => {
                                            return (
                                                <p className={`px-[.8rem] pb-[18px] font-[300] text-[#5D5D5D] cursor-pointer ${selectedTabIndex === index ? 'text-primary-color border-b border-primary-color' : ''}`} onClick={() => { 
                                                    setSelectedTab(item)
                                                    setSelectedTabIndex(index)
                                                }} >{item}</p>
                                            )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    selectedTab === "Address" &&
                                    <div className='mt-5'>
                                        <p className="text-[#383838] text-[14px] font-[300]">Recipient address</p>
                                        <div className="flex justify-between mt-2 bg-[#F1F1F1] rounded-[24px] px-3 py-4 items-center">
                                            <p className='text-[#121212] font-[300]'>0xe4iJ78ufP9kwH56...k8Ty</p>
                                            <BsQrCodeScan className='text-[#5D5D5D]'/>
                                        </div>
                                        <p className='text-[#121212] py-4 px-2 bg-[#D2D9F542] rounded-[6px] mt-2 text-[12px] font-[300]'>
                                            It’s a Rehoboth account. Send instantly and 0 fee via PayID: <span className='text-primary-color'>****</span>
                                        </p>
                                    </div>
                                }

                                {
                                    selectedTab === "User Info" &&
                                    <div className='mt-10'>
                                        <div className='flex items-center gap-[1rem] mb-3'>
                                            {
                                                userInfoArrayTab.map((info, index) => (
                                                    <p  onClick={() => {
                                                        setSelectedInfo(info)
                                                        setSelectedInfoIndex(index)
                                                    }} 
                                                        className={`bg-[#EEF0F7] py-1 px-2 rounded-[4px] ${selectedInfoIndex === index ? 'text-primary-color':''} text-[12px] font-[300] cursor-pointer`}>{info}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="flex justify-between mt-2 bg-[#F1F1F1] rounded-[8px] p-3 items-center">
                                            <p className='text-[#414553] font-[300]'>
                                                {
                                                    selectedInfo === 'Email' ? `bencharles@rehoboth.com` :
                                                    selectedInfo === "Phone" ? `+234 8145 67774`:
                                                    selectedInfo === "Pay ID" ? `My Pay ID`:
                                                    `Ben Chris ID`
                                                }
                                            </p>
                                        </div>
                                        <p className='text-[#121212] py-4 px-2 bg-[#D2D9F542] rounded-[6px] mt-2 text-[12px] font-[300]'>
                                            It’s a Rehoboth account. Send instantly and 0 fee via PayID: <span className='text-primary-color'>****</span>
                                        </p>
                                    </div>
                                }

                                {   selectedTab === "Transaction" &&
                                    <div className='mt-5'>
                                        <div className='flex items-center justify-between bg-[#FFF] rounded-[8px] p-3 border shadow'>
                                            <input type="text" placeholder='To: Name or address' className='outline-none bg-transparent' />
                                            <BsQrCodeScan className='text-[#5D5D5D]'/>
                                        </div>
                                        <p className='text-[#414553] text-[14px] my-5'>Recently Used</p>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <BsQrCodeScan className='text-[#5D5D5D]'/>
                                                    <div>
                                                        <p className='text-[14px]'>Ben Charles</p>
                                                        <p className='text-[#828282] text-[14px]'>CvDQ...WcVn</p>
                                                    </div>
                                                </div>
                                                <p className='text-[#828282] text-[14px]'>Yesterday</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <BsQrCodeScan className='text-[#5D5D5D]'/>
                                                    <div>
                                                        <p className='text-[14px]'>Ben Charles</p>
                                                        <p className='text-[#828282] text-[14px]'>CvDQ...WcVn</p>
                                                    </div>
                                                </div>
                                                <p className='text-[#828282] text-[14px]'>Yesterday</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    selectedTab !== "Transaction" &&
                                    <div className='mt-8'>
                                        <p className="text-[#383838] text-[14px] font-[300]">Network</p>
                                        <div className='flex items-center mt-1 justify-between cursor-pointer mb-1 py-[10px] border rounded-[6px] px-2 shadow-sm bg-white'>
                                            <p className='text-[#121212] font-[300]'>Select Network</p>
                                            <IoChevronDown />
                                        </div>
                                        <p className='font-[300] text-primary-color text-[12px]'>Wallet address automatically matched to corresponding network</p>
                                    </div>
                                }
                            </div>
                            <button className="bg-primary-color text-white p-3 rounded-lg w-full mt-[2rem]">Confirm</button>
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8] py-6 px-[40px] rounded-[8px] shadow w-[500px] mt-[1.5rem] border border-[#B2B2B27A]'>
                        <p className='text-[14px] text-[#121212] border-b border-[#CFCFCF] pb-2'>y{asset} = $3,000</p>
                        
                        <div className='flex flex-col gap-[8px] mt-5'>
                        <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                            <p>Reference APR</p>
                            <p>3.50%</p>
                        </div>
                        <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                            <p>Exchange Rate</p>
                            <p>1 {asset} = 0.98911 y{asset}</p>
                        </div>
                        <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                            <p>Transaction Cost</p>
                            <p>~$11.24</p>
                        </div>
                        <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                            <p>Reward Fee</p>
                            <p>10%</p>
                        </div>
                        <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                            <p>Referrer</p>
                            <p>-</p>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Send