import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import { useNavigate, useParams } from 'react-router-dom'
import { RiBankLine } from 'react-icons/ri'

const DepositCurrency = () => {

    const { country } = useParams()
    const navigate = useNavigate()

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-full lg:w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 lg:mx-[25px] bg-transparent lg:bg-[#FFFFFF] border border-transparent lg:border-[#BDBDBD]">
                  <div className='mt-5 ml-1 hidden lg:block'>
                    <p className='text-primary-color text-[32px]'>Deposit</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='mt-9'>
                    <h2 className="text-center lg:text-[#151517] text-primary-color mb-2 font-[500] lg:font-[400]">Choose your deposit method</h2>
                    <div className='flex items-center gap-5'>
                        <div className="w-[500px] mx-auto lg:p-2 bg-[#F8F8F8] rounded-lg border border-[#B2B2B27A] responsive-widths">
                            <div className='bg-white p-3 rounded-[8px]'>
                              <div className='flex items-center justify-between'>
                                <div>
                                  <p className='text-[#121212]'>Bank Transfer</p>
                                  <p className='font-300 text-[#828282]'>
                                    {country}
                                  </p>
                                </div>
                                <div className='bg-[#CCD6FF54] p-1 rounded-full'>
                                  <RiBankLine className='text-primary-color text-[22px]'/>
                                </div>
                              </div>
                              <div className='mt-5'>
                                <p className='text-primary-color'>Transfer Time</p>
                                <p className='font-300 text-[#828282]'>0 - 15 hours</p>
                              </div>
                            </div>
                            <div className='lg:flex items-center justify-center hidden'>
                              <button className='py-2 w-[90%] mx-auto text-white bg-primary-color rounded-[6px] mb-3 mt-[4rem]' onClick={() => navigate(`/deposit-provider/${country}/provider`)} >Proceed</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 mt-5 lg:hidden'>
                        <div className="w-[500px] mx-auto lg:p-2 bg-[#F8F8F8] rounded-lg border border-[#B2B2B27A] responsive-widths">
                            <div className='bg-white p-3 rounded-[8px]'>
                              <div className='flex items-center justify-between'>
                                <div>
                                  <p className='text-[#121212]'>Wallet Transfer</p>
                                  <p className='font-300 text-[#828282]'>
                                    {country}
                                  </p>
                                </div>
                                <div className='bg-[#CCD6FF54] p-1 rounded-full'>
                                  <RiBankLine className='text-primary-color text-[22px]'/>
                                </div>
                              </div>
                              <div className='mt-5'>
                                <p className='text-primary-color'>Transfer Time</p>
                                <p className='font-300 text-[#828282]'>0 - 15 hours</p>
                              </div>
                            </div>
                            <div className='lg:flex items-center justify-center hidden'>
                              <button className='py-2 w-[90%] mx-auto text-white bg-primary-color rounded-[6px] mb-3 mt-[4rem]' onClick={() => navigate(`/deposit-provider/${country}/provider`)} >Proceed</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden items-center justify-center flex mt-[5rem] w-[500px] mx-auto responsive-widths'>
                      <button className='py-2 w-full mx-auto text-white bg-primary-color rounded-[6px] mb-3 mt-[4rem]' onClick={() => navigate(`/deposit-provider/${country}/provider`)} >Proceed</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DepositCurrency