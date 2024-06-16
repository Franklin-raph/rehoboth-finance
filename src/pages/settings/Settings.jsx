import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import SaveCardModal from '../../components/save-card-modal/SaveCardModal'
import { SlCloudUpload } from "react-icons/sl";
import { GoChevronDown } from "react-icons/go";



const Settings = () => {

  const savingsArray = [
    {
        title:"Lumen",
        percent:'4',
        participants:'9143',
        asset:'XLM',
    },
    {
      title:"USD Coin",
      percent:'7',
      participants:'139143',
      asset:'USDC',
    },
    {
      title:"Bitcoin",
      percent:'3.8',
      participants:'11234',
      asset:'BTC',
    },
    {
      title:"Ethereum",
      percent:'4',
      participants:'9143',
      asset:'ETH',
    },
    {
      title:"Rehoboth ",
      percent:'7',
      participants:'2234',
      asset:'RTH',
    }
  ]

  const [saveCardModal, setSaveCardModal] = useState(false)
  const settingsTypeArray = ["Profile", "Password", "Notification"]
  const [selectedTab, setSelectedTab] = useState(settingsTypeArray[0])
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)


  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto mb-10">
                <TopNav />
                <div className="px-[30px] pb-[30px] pt-[20px] bg-white mt-5 mx-[30px]">
                    <p className='text-[#101828] text-[25px] font-[500]'>Settings</p>
                    <div className='flex items-center border-b border-[#EAECF0] mt-7'>
                      {
                        settingsTypeArray.map((item, index) => {
                          return (
                            <p className={`px-[.8rem] pb-[18px] font-[500] text-[#667085] cursor-pointer ${selectedTabIndex === index ? 'text-primary-color border-b border-primary-color' : ''}`} onClick={() => { 
                              setSelectedTab(item)
                              setSelectedTabIndex(index)
                            }} >{item}</p>
                          )
                        })
                      }
                    </div>
                    {
                      selectedTab === "Profile" &&
                      <div>
                        <div className='border-b border-[#EAECF0] mt-7 pb-5'>
                          <p className='text-[#101828] font-[500] text-[18px] mb-1'>Personal info</p>
                          <p className='text-[#667085] font-[300]'>Update your photo and personal details here.</p>
                        </div>

                        <table className='w-full'>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Username</td>
                            <td>
                              <input type="text" placeholder='Lucky.xlm' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] pr-[5rem] py-[2.5rem]'>Name</td>
                            <td className='flex items-center gap-5 py-[2.5rem]'>
                              <input type="text" placeholder='Nweke' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none' />
                              <input type="text" placeholder='Lucky Favor' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] pr-[5rem] py-[2.5rem]'>Email address</td>
                            <td className='flex items-center gap-5 py-[2.5rem] w-full'>
                              <input type="text" placeholder='luckynweke@rehoboth.com' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none w-[714px] text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className=''>
                              <p className='text-[#344054] font-[500] pr-[5rem]'>Your photo</p>
                              <p className='text-[#667085] font-[300]'>This will be displayed on your profile.</p>
                            </td>
                            <td className='flex items-start gap-5 py-[2.5rem]'>
                              <img src="/images/Avatar.svg" alt="" className='w-[80px]' />
                              <div className='border flex flex-col justify-center items-center p-7 cursor-pointer rounded-[8px]'>
                                <SlCloudUpload className='text-[#475467] bg-[#F2F4F7] p-3 rounded-full text-[3rem]'/>
                                <p className='text-primary-color font-[600] text-[14px] my-2'>Click to upload  <span className='text-[#667085] font-[300]'>or drag and drop</span></p>
                                <p className='text-[#667085] font-[300]'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                              </div>
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='py-[2.5rem]'>
                              <p className='text-[#344054] font-[500] pr-[5rem]'>Your preferred currency</p>
                              <p className='text-[#667085] font-[300]'>This is the currency in which you deposit and automatically send, receive money.</p>
                            </td>
                            <td>
                              <div className='flex items-center justify-between border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm w-[714px]'>
                                <input type="text" placeholder='Stellar Lumens' className='outline-none text-[#101828]' />
                                <GoChevronDown />
                              </div>
                            </td>
                          </tr>
                        </table>
                        <div className='flex justify-end mt-[2.5rem] gap-5'>
                          <button  className='border border-[#D0D5DD] py-2 px-5 rounded-[8px] text-[#344054]'>Cancel</button>
                          <button className='bg-primary-color py-2 px-5 rounded-[8px] text-white'>Save</button>
                        </div>
                      </div>
                    }

                    {
                      selectedTab === "Password" &&
                      <div>
                        <div className='border-b border-[#EAECF0] mt-7 pb-5'>
                          <p className='text-[#101828] font-[500] text-[18px] mb-1'>Change password</p>
                          <p className='text-[#667085] font-[300]'>Update your password here.</p>
                        </div>
                        <table className='w-full'>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Current Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>New Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Confirm Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                        </table>
                        <div className='flex justify-end mt-[2.5rem] gap-5'>
                          <button  className='border border-[#D0D5DD] py-2 px-5 rounded-[8px] text-[#344054]'>Cancel</button>
                          <button className='bg-primary-color py-2 px-5 rounded-[8px] text-white'>Save</button>
                        </div>
                      </div>
                    }

                    {
                      selectedTab === "Notification" &&
                      <div>
                        <div className='border-b border-[#EAECF0] mt-7 pb-5'>
                          <p className='text-[#101828] font-[500] text-[18px] mb-1'>Notifications</p>
                          <p className='text-[#667085] font-[300]'>Update your notification settings here.</p>
                        </div>
                        {/* <table className='w-full'>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Current Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>New Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Confirm Password</td>
                            <td>
                              <input type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                        </table>
                        <div className='flex justify-end mt-[2.5rem] gap-5'>
                          <button  className='border border-[#D0D5DD] py-2 px-5 rounded-[8px] text-[#344054]'>Cancel</button>
                          <button className='bg-primary-color py-2 px-5 rounded-[8px] text-white'>Save</button>
                        </div> */}
                      </div>
                    }
                </div>
            </div>
        </div>
        {
            saveCardModal && <SaveCardModal setSaveCardModal={setSaveCardModal}/>
        }
    </div>
  )
}

export default Settings