import React from 'react'
import { IoChevronDown, IoChevronDownOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const pricesArray = ["200", "300", "500", "1,000"]
    const navigate = useNavigate()

  return (
    <div>
        <nav className='flex items-center justify-between py-[20px] px-[40px]'>
            <Link>
                <img src="./images/rehoboth-logo.svg" alt="" />
            </Link>
            <ul className='flex items-center gap-[50px]'>
                <li className='text-[#101828]'>
                    <Link>Individual</Link>
                </li>
                <li className='flex items-center gap-1 text-[#667085] cursor-pointer'>
                    <p>Business</p>
                    <IoChevronDownOutline />
                </li>
                <li className='flex items-center gap-1 text-[#667085] cursor-pointer'>
                    <p>Blog</p>
                    <IoChevronDownOutline />
                </li>
                <li className='text-[#667085]'>
                    <Link>Faq</Link>
                </li>
            </ul>
            <button onClick={() => navigate('/create-account')} style={{ background:'linear-gradient(266deg, #0460BC 11.6%, #00B9FF 86.01%)' }} className='text-white px-[20px] py-[12px] rounded-[8px]'>Get Started</button>
        </nav>
        <main className='px-[40px] flex items-start'>
            <div className='mt-[2rem]'>
                <p className='home-text-gradient text-[72px] font-[600] w-[400px] leading-[68px]'>Earn, Save, Spend</p>
                <p className='text-[#151517] text-[72px] font-[600]'>Like A Boss.</p>
                <p className='text-[#575859] w-[80%] mt-[0.5rem]'>Rehoboth Finance offers the opportunity to experience Hassle-Free Cryptocurrency transactions for individuals and businesses.</p>
                <button style={{ background:'linear-gradient(266deg, #0460BC 11.6%, #00B9FF 86.01%)' }} className='text-white px-[20px] py-[12px] rounded-[8px] mt-[1rem] border border-[#6E9BFF] shadow-lg'>Get Started</button>
            </div>
            <div className='flex justify-center items-center rounded-[11px] lg:mt-9 flex-col'>
                  <div className="flex justify-center items-center w-full">
                      <div className="bg-[#F8F8F8] py-6 sm:px-[40px] p-[15px] rounded-[8px] shadow lg:w-[500px] w-full border border-[#B2B2B27A]">
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
                                      <input type="number" id="input-amount" className="outline-none lg:w-1/2 w-full bg-transparent text-[#121212]" placeholder="300000" />
                                  </div>
                                  <p className='text-primary-color mr-3 text-[12px]'>Max</p>
                              </div>
                          </div>

                          <div className="my-4">
                              <div className="flex justify-between items-center">
                                  <p className="text-[#383838] text-[14px] font-[300]">Receive amount</p>
                                  <div className='flex text-[14px]'>
                                      <p className='text-[#383838]'>Balance:</p>
                                      <span className="text-primary-color">$200.00</span>
                                  </div>
                              </div>
                              <div className="flex justify-between bg-[#F1F1F1] rounded-[24px] p-2 items-center">
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
                          <div className='grid grid-cols-2 sm:grid-cols-4 place-content-center place-items-center text-center gap-5 sm:gap-10 mb-4'>
                              {
                                  pricesArray.map((price, index) => (
                                      <p className='bg-[#F1F1F1] rounded-full py-[6px] text-center w-full cursor-pointer' key={index}>${price}</p>
                                  ))
                              }
                          </div>
                          <button onClick={() => router.replace('/confirm-buy-with-fiat')} className="bg-primary-color text-white p-3 rounded-lg w-full mt-[1rem]">Next</button>
                      </div>
                  </div>
            </div>
        </main>
        <div className='flex flex-row-reverse px-[40px] items-end justify-between'>
            <div className='bg-[#F8F8F8] py-4 px-[40px] rounded-[8px] shadow lg:w-[500px] w-full mt-[1rem] border border-[#B2B2B27A]'>
                <p className='text-[14px] text-[#121212] border-b border-[#CFCFCF] pb-2'>yUSDC = $3,000</p>
                <div className='flex flex-col gap-[8px] mt-5'>
                <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                    <p>Reference APR</p>
                    <p>3.50%</p>
                </div>
                <div className='flex items-center justify-between text-[14px] text-[#121212]'>
                    <p>Exchange Rate</p>
                    <p>1 USDC = 0.98911 yUSDC</p>
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
            <div>
                <p className='text-[#939393] uppercase tracking-[8.319px] self-end'>Supported by:</p>
                <img src="./images/stellar-foundation.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home