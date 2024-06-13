import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { useParams } from 'react-router-dom';

const SaveAsset = () => {

  const pricesArray = ["200", "300", "500", "1,000"]
  const { asset } = useParams()

  return (
    <div>
      <div className='flex items-start bg-[#F5F5F5]'>
          <SideNav />
          <div className="w-[84%] bg-[#F5F5F5] ml-auto h-[100dvh]">
              <TopNav />
              <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                <div className='mt-5 ml-1'>
                  <p className='text-primary-color text-[36px]'>Save {asset}</p>
                  <p className='font-[300] text-[#737985]'>Choose your crypto and start earning daily interest today.<br />Rates may increase or decrease in the future. The change will be communicated in advance.</p>
                </div>
                <div className='pt-[3rem] pb-[9rem] flex justify-center items-center rounded-[11px] mt-9 bg-[#F1F1F1] flex-col'>
                  <div className="flex justify-center items-center">
                      <div className="bg-[#F8F8F8] py-6 px-[40px] rounded-[8px] shadow w-[500px] border border-[#B2B2B27A]">
                          <div className="mb-4">
                              <div className="flex justify-between items-center">
                                  <p className="text-[#383838] text-[14px] font-[300]">Save amount</p>
                                  <div className='flex text-[14px]'>
                                      <p className='text-[#383838]'>Balance:</p>
                                      <span className="text-primary-color">$200.00</span>
                                  </div>
                              </div>
                              <div className="flex justify-between mt-2 bg-[#F1F1F1] rounded-[24px] p-2 items-center">
                                  <div className='flex item-center gap-2'>
                                      <div className='flex items-center bg-[#76748014] rounded-full p-2'>
                                          <img src="./images/Nigeria.svg" alt="" />
                                          <p className='mr-3 ml-1'>NGN</p>
                                          <IoChevronDown />
                                      </div>
                                      <input type="number" id="input-amount" className="outline-none w-1/2 bg-transparent text-[#121212]" placeholder="300000" />
                                  </div>
                                  <p className='text-primary-color mr-3 text-[12px]'>Max</p>
                              </div>
                          </div>

                          <div className="mb-4 mt-10">
                              <div className="flex justify-between items-center">
                                  <p className="text-[#383838] text-[14px] font-[300]">Receive amount</p>
                                  <div className='flex text-[14px]'>
                                      <p className='text-[#383838]'>Balance:</p>
                                      <span className="text-primary-color">$200.00</span>
                                  </div>
                              </div>
                              <div className="flex justify-between mt-2 bg-[#F1F1F1] rounded-[24px] p-2 items-center">
                                  <div className='flex item-center gap-2'>
                                      <div className='flex items-center bg-[#76748014] rounded-full p-2'>
                                          <img src="./images/Stellar.svg" alt="" />
                                          <p className='mr-3 ml-1'>XLM</p>
                                          <IoChevronDown />
                                      </div>
                                      <input type="number" id="input-amount" className="outline-none w-1/2 bg-transparent text-[#121212]" placeholder="0.00345" />
                                  </div>
                              </div>
                          </div>
                          <div className='flex items-cener justify-between mb-4'>
                              {
                                  pricesArray.map((price, index) => (
                                      <p className='bg-[#F1F1F1] rounded-full py-[6px] px-7' key={index}>${price}</p>
                                  ))
                              }
                          </div>

                          {/* <div className="mb-4 text-center flex items-center justify-between">
                              <p className="text-[14px] font-[300] text-[#7F7F7F]">You get <span className="text-primary-color">0.00345 XLM</span> for <span className="text-primary-color">₦300000.00</span></p>
                              <p className="text-xs text-gray-400">Quote updates in 2s</p>
                          </div> */}

                          <button onClick={() => router.replace('/confirm-buy-with-fiat')} className="bg-primary-color text-white p-3 rounded-lg w-full mt-[2rem]">Next</button>

                          {/* <div className="text-center mt-4 text-xs text-gray-400">
                              By continuing, you agree to our <a href="#" className="text-primary-color">cookie policy</a>.
                          </div> */}
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

export default SaveAsset