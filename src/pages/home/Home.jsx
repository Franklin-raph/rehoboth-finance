import React from 'react'
import { IoChevronDown, IoChevronDownOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { BsDashLg } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";



const Home = () => {

    const pricesArray = ["200", "300", "500", "1,000"]
    const navigate = useNavigate()

  return (
    <div>
        <nav className='flex items-center justify-between py-[20px] lg:max-w-[1300px] md:w-[100%] mx-auto'>
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
        <main className='px-[40px] flex items-start lg:max-w-[1400px] md:w-[100%] mx-auto mt-[4rem]'>
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
        <div className='flex flex-row-reverse px-[40px] items-end justify-between lg:max-w-[1400px] md:w-[100%] mx-auto'>
            <div className="flex justify-center items-center w-full">
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
            </div>
            <div className='w-full'>
                <p className='text-[#939393] uppercase tracking-[8.319px] self-end'>Supported by:</p>
                <div className='flex items-center gap-10 mt-[2rem]'>
                    <img src="./images/stellar-foundation.svg" alt="" />
                    <img src="./images/havilah.svg" alt="" />
                    <img src="./images/stellar.svg" alt="" />
                </div>
            </div>
        </div>
        <section className='mt-[10rem] lg:max-w-[1400px] md:w-[100%] mx-auto'>
            <p className='text-[#939393] tracking-[8px] font-[500] text-center'>WHY SAVE WITH US</p>
            <div className='flex items-center justify-center gap-[8rem] text-center mt-[3rem]'>
                <div>
                    <img src="./images/CurrencyCrush-Mobile-Money.svg" className='mx-auto' alt="" />
                    <p className='text-[#151517] font-[500] text-[24px] my-3'>Desktop & Mobile</p>
                    <p className='text-[#7E7B7B] text-[14px]'>Manage your funds anytime and anywhere with our great mobile and web apps. Track prices and stay up to date with markets.</p>
                </div>
                <div>
                    <img src="./images/Currency-Crush-Shield.svg" className='mx-auto' alt="" />
                    <p className='text-[#151517] font-[500] text-[24px] my-3'>Safe & Secure</p>
                    <p className='text-[#7E7B7B] text-[14px]'>Rehoboth provides highly secure storage for your Lumens and other digital assets, offering 2FA and multisig protection.</p>
                </div>
                <div>
                    <img src="./images/Spakles.svg" className='mx-auto' alt="" />
                    <p className='text-[#151517] font-[500] text-[24px] my-3'>Simple & Clean</p>
                    <p className='text-[#7E7B7B] text-[14px]'>Nice design, simple interface, clear instructions and helpful tips. Rehoboth is an easy way to get started with crypto.</p>
                </div>
            </div>
        </section>

        <section className='mt-[10rem] lg:max-w-[1200px] md:w-[100%] mx-auto'>
            <div className='flex items-start justify-center'>
                <div className="mx-auto bg-[#F1F1F1] lg:p-6 p-3 w-[400px]">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" // Replace with the appropriate URL of the USD Coin logo
                            alt="USD Coin"
                            className="h-6 w-6 mr-2"
                        />
                        <h2 className="text-[#121212]">Lumen</h2>
                    </div>
                    <div className='my-[3rem]'>
                        <div className='inline-flex items-center gap-1 py-2 lg:px-4 px-2 bg-[#899EFD1A] rounded-[4px]'>
                            <img src="./images/tag-user.svg" alt="" />
                            <p className='text-primary-color text-[10px]'>9143 Participants</p>
                        </div>
                        <div className="mb-2 mt-[2.5rem]">
                            <span className="text-[70px] text-[#121212] leading-[26px]">4%</span>
                            <span className="text-2xl">APY</span>
                        </div>
                        <div className="mb-6">
                            <p className="text-[#5D5D5D] text-[12px] lg:text-[16px] font-[300]">With yXLM asset</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-primary-color w-full text-white lg:px-6 px-3 py-2 rounded-lg font-semibold text-[12px] lg:text-[16px]">
                            Earn with yXLM &rarr;
                        </button>
                    </div>
                </div>
                <div className='text-black w-[500px] mt-7'>
                    <p className='font-[500] leading-[42px] text-[40px] mb-4'>EARN UP TO 7% INTEREST. PAID DAILY.</p>
                    <p className='leading-[20px]'>Create a savings account in USD and get 3-7% yearly interest, paid daily. You can track your earnings & add or withdraw money anytime.</p>
                </div>
            </div>
        </section>

        <section className='mt-20 lg:max-w-[1200px] md:w-[100%] mx-auto'>
            <div className='flex items-start justify-center'>
                <div className='text-black w-[300px] mx-auto mt-[12rem]'>
                    <p className='font-[500] leading-[42px] text-[40px] mb-4'>NO MONTHLY CHARGES.</p>
                    <p className='leading-[20px]'>Create a savings account in USD and get 3-7% yearly interest, paid daily. You can track your earnings & add or withdraw money anytime.</p>
                </div>
                <div className="mx-auto bg-[#F1F1F1] w-[500px] rounded-[8px]">
                    <div className="flex items-center mb-4">
                        <img
                            src="./images/mission.svg" // Replace with the appropriate URL of the USD Coin logo
                            alt="USD Coin"
                            className="rounded-t-[8px]"
                        />
                    </div>
                    <div className='mt-[2rem] mb-[3rem]'>
                        <p className='text-[#4BAC0D] text-center text-[20px]'>Transaction Successful !</p>
                        <p className='font-[300] text-center text-[#919090] mt-8'>The receiver received:</p>
                        <p className='text-[#121212] text-center font-[500] mt-4'>2.00000 XLM (Fee: 0.1500 XLM)</p>

                        <div className="mb-6 px-[4.5rem] mt-10 flex flex-col gap-4">
                            <div className='flex items-center justify-between'>
                                <p className='text-[#5D5D5D] font-[300]'>Coin</p>
                                <div className='flex items-center gap-1'>
                                    <img src="./images/Stellar.svg" alt="" />
                                    <p className='text-[#121212]'>Stellar Lumen</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#5D5D5D] font-[300]'>Address</p>
                                <p className='text-primary-color'>0xe4iJ78ufP9kwH56...k8Ty</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#5D5D5D] font-[300]'>Network</p>
                                <p className='text-[#121212]'>Stellar Classic Network</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#5D5D5D] font-[300]'>Source</p>
                                <p className='text-[#121212]'>Spot wallet</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center px-[4rem] pb-10">
                        <button className="bg-primary-color w-full text-white lg:px-6 px-3 py-2 rounded-lg font-semibold text-[12px] lg:text-[16px]">
                            Go to wallet
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section className='mt-20 lg:max-w-[1200px] md:w-[100%] mx-auto'>
            <div className='flex items-start justify-center'>
            <div className="mx-auto bg-[#F1F1F1] w-[500px] rounded-[8px]">
                    <div className="flex items-center mb-4">
                        <img
                            src="./images/mission.svg" // Replace with the appropriate URL of the USD Coin logo
                            alt="USD Coin"
                            className="rounded-t-[8px]"
                        />
                    </div>
                    <div className='mt-[2rem] mb-[3rem]'>
                        <p className='text-[#5D5D5D] font-[300] text-center text-[20px]'>Saving successful</p>
                        <p className='text-[#121212] text-center font-[500] text-[30px] mt-4'>0.05456788 XLM</p>

                        <div className="mb-6 px-[4.5rem] mt-10 flex flex-col gap-4">
                            <div className='flex items-center gap-1 text-[#121212]'>
                                <FiTarget />
                                <p>Summary</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <p className='text-[#5D5D5D] font-[300]'>Save date:</p>
                                <p className='text-[#121212]'>May 6, 2024</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <p className='text-[#5D5D5D] font-[300]'>Value date:</p>
                                <p className='text-[#121212]'>May 6, 2024</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <p className='text-[#5D5D5D] font-[300]'>Interest end date:</p>
                                <p className='text-[#121212]'>May 6, 2024</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <p className='text-[#5D5D5D] font-[300]'>Redemption period:</p>
                                <p className='text-[#121212]'>May 6, 2024</p>
                            </div>
                            <div className='flex items-center justify-start gap-2'>
                                <p className='text-[#5D5D5D] font-[300]'>Redemption date:</p>
                                <p className='text-[#121212]'>May 6, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center px-[4rem] pb-10 flex-col gap-2">
                        <button className="bg-primary-color w-full text-white lg:px-6 px-3 py-2 rounded-lg text-[12px] lg:text-[16px]">
                            Go to wallet
                        </button>
                        <button className="border border-primary-color w-full text-primary-color lg:px-6 px-3 py-2 rounded-lg text-[12px] lg:text-[16px]">
                            Monitor Stake
                        </button>
                    </div>
                </div>
                <div className='text-black w-[400px] mx-auto mt-[12rem]'>
                    <p className='font-[500] leading-[42px] text-[40px] mb-4'>INVEST IN THE FUTURE.</p>
                    <p className='leading-[20px]'>Create a savings account in USD and get 3-7% yearly interest, paid daily. You can track your earnings & add or withdraw money anytime.</p>
                </div>
            </div>
        </section>

        <section className='mt-[10rem] lg:max-w-[1200px] md:w-[100%] mx-auto'>
            <p className='font-[500] leading-[42px] text-[38px]'>From cash to crypto — and back again.</p>
            <div className='grid grid-cols-3 gap-2 mt-10'>
                <div className='w-[390px] bg-[#F1F1F1] rounded-[8px] p-10'>
                    <p className='font-[500] text-[30px] mb-2 leading-[42px]'>Deposit.</p>
                    <p className='text-[#5F5E5E] text-[14px] font-[300] leading-[20px]'>Use a card, Apple Pay, Google Pay or PayPal to buy crypto fast. We also accept bank transfers and wires in applicable jurisdictions.</p>
                    <img src="./images/CurrencyCrush-Mobile-Money.svg" className='mx-auto mt-10 w-[80%]' alt="" />
                </div>
                <div className='w-[390px] bg-[#F1F1F1] rounded-[8px] p-10'>
                    <p className='font-[500] text-[30px] mb-2 leading-[42px]'>Save.</p>
                    <p className='text-[#5F5E5E] text-[14px] font-[300] leading-[20px]'>Swap between tokens, even if they’re on different chains (we make bridging seamless too).</p>
                    <img src="./images/CurrencyCrush-Mobile-Money.svg" className='mx-auto mt-10 w-[80%]' alt="" />
                </div>
                <div className='w-[390px] bg-[#F1F1F1] rounded-[8px] p-10'>
                    <p className='font-[500] text-[30px] mb-2 leading-[42px]'>Withdraw.</p>
                    <p className='text-[#5F5E5E] text-[14px] font-[300] leading-[20px]'>UTurn your crypto into cash. In a flash. Get paid straight to your bank account, card or PayPal account.</p>
                    <img src="./images/CurrencyCrush-Mobile-Money.svg" className='mx-auto mt-10 w-[80%]' alt="" />
                </div>
            </div>
        </section>

        <section className='mt-[10rem] lg:max-w-[1200px] md:w-[100%] mx-auto flex items-start'>
            <div className='w-[600px]'>
                <p className='text-[#1D1D1D] text-[32px] mb-3'>Start Your Journey to Financial Freedom With Rehoboth Finance</p>
                <p className='text-[#2D2A2A] font-[400]'>Get our mobile app on any device you use on the app store or Google play store.</p>
            </div>
            <img src="./images/CurrencyCrush-Mobile-Money.svg" className='mx-auto w-[300px]' alt="" />
        </section>

        <footer className='mt-[10rem] lg:max-w-[1200px] md:w-[100%] mx-auto flex items-start justify-between mb-10 text-[#71717A]'>
            <p>
                &copy; {new Date().getFullYear()} Rehoboth finance. All rights reserved.
            </p>
            <div className='flex items-center gap-[2rem]'>
                <div className='flex items-center gap-1'>
                    <p>Login</p>
                    <BsDashLg />
                    <p>Signup</p>
                </div>
                <RxDividerVertical />
                <div className='flex items-center gap-1'>
                    <p>Privacy</p>
                    <BsDashLg />
                    <p>Terms</p>
                </div>
            </div>
            <div className='flex items-center gap-5 text-white'>
                <div className='bg-[#71717A] p-2 text-[20px] rounded-full'>
                    <FaLinkedinIn />
                </div>
                <div className='bg-[#71717A] p-2 text-[20px] rounded-full'>
                    <FaTwitter />
                </div>
                <div className='bg-[#71717A] p-2 text-[20px] rounded-full'>
                    <RiInstagramFill />
                </div>
                <div className='bg-[#71717A] p-2 text-[20px] rounded-full'>
                    <FaTelegramPlane />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Home