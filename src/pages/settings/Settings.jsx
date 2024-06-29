import React, { useEffect, useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import SaveCardModal from '../../components/save-card-modal/SaveCardModal'
import { SlCloudUpload } from "react-icons/sl";
import { GoChevronDown } from "react-icons/go";
import Cookies from 'js-cookie';
import { FaChevronDown } from 'react-icons/fa6';
import Alert from '../../components/alert/Alert';


const Settings = () => {

  const API_KEY = import.meta.env.VITE_API_KEY
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const [showCountries, setShowCountries] = useState(false)

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
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const [allCountries, setAllCountries] = useState([])
  const [loader, setLoader] = useState(false)
  const [searchText, setSeacrhText] = useState('')

  const [msg, setMsg] = useState('')
  const [alertType, setAlertType] = useState('')

  const [loading, setLoading] = useState(false)

  const user = Cookies.get('token')

  async function getAccountInfo(){
    console.log(`Bearer ${user}`,);
    const res = await fetch(`${BASE_URL}/user/account/profile`,{
      headers: {
        'Authorization': `Bearer ${user}`,
        'Api-Key': `${API_KEY}`,
      }
    })
    const data = await res.json()
    if(res.ok){
      setUsername(data?.data?.username)
      setEmail(data?.data?.primaryEmail)
    }
    console.log(data);
  }

  async function getAllCountruies(){
      setLoader(true)
      const response = await fetch('https://api.countrystatecity.in/v1/countries',{
          headers :{
              'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
          }
      })
      const data = await response.json()
      if(response) setLoader(false)
      console.log(data);
      setAllCountries(data)
      return data
  }

  useEffect(() => {
    getAccountInfo()
    getAllCountruies()
  },[])

  async function handleFileUpload(){

  }

  async function profileUpdate(){
    setLoading(true)
    console.log({username, country});
    const res = await fetch(`${BASE_URL}/user/account/profile`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${user}`,
        'Api-Key': `${API_KEY}`,
      },
      body: JSON.stringify({
        username,
        country,
      })
    })
    if(res) setLoading(false)
    const data = await res.json()
    console.log(data);
    if(res.ok){
      setMsg('Profile updated successfully')
      setAlertType('success')
    }
    if(!res.ok){
      setMsg(data.message)
      setAlertType('error')
    }
    console.log(data);
  }

  async function passwordUpdate(){
    console.log({
      oldPassword,
      password,
    });
    if(!password || !confirmPassword || !oldPassword){
      setMsg('Please fill all fields')
      setAlertType('error')
      return
    }else if(password !== confirmPassword){
      setMsg('Passwords do not match')
      setAlertType('error')
      return
    }else{
      setLoading(true)
      console.log({oldPassword, password});
      const res = await fetch(`${BASE_URL}/user/account/password`,{
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${user}`,
          'Api-Key': `${API_KEY}`,
        },
        body: JSON.stringify({
          oldPassword,
          password
        })
      })
      if(res) setLoading(false)
      const data = await res.json()
      console.log(data);
      if(res.ok){
        setMsg('Password updated successfully')
        setAlertType('success')
      }
      if(!res.ok){
        setMsg(data.message)
        setAlertType('error')
      }
    } 
  }




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
                              <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Lucky.xlm' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] pr-[5rem] py-[2.5rem]'>Country</td>
                            <td className='relative'>
                              <div className='flex items-center justify-between border border-gray-300 p-2 rounded-[6px] w-full'>
                                <input
                                  type="text"
                                  value={country}
                                  placeholder="Nigeria"
                                  className="outline-none w-full text-[#667085]"
                                />
                                <FaChevronDown className='cursor-pointer text-gray-300' onClick={() => setShowCountries(!showCountries)}/>
                              </div>
                              {
                                showCountries &&
                                <div className='bg-white w-full absolute z-10 top-[75px] rounded-[4px] border border-gray-300 h-[300px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                    <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search Country' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                    <div>
                                        {
                                            loader ?
                                            <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                                <FiLoader className='text-[28px] animate-spin'/>
                                                <p className='text-gray-500 text-[14px]'>Fetching Countries Please Wait...</p>
                                            </div>
                                            :
                                            <>
                                            {
                                                allCountries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
                                                .map((country) => (
                                                    <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                        setShowCountries(!showCountries)
                                                        setCountry(country.name)
                                                    }}>
                                                        <p>{country.emoji}</p>
                                                        <p>{country.name}</p>
                                                    </div>
                                                ))
                                            }
                                            </>
                                        }
                                    </div>
                                </div>
                              }
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] pr-[5rem] py-[2.5rem]'>Email address</td>
                            <td className='flex items-center gap-5 py-[2.5rem] w-full'>
                              <input value={email} type="text" placeholder='luckynweke@rehoboth.com' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none w-[714px] text-[#101828] cursor-not-allowed' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className=''>
                              <p className='text-[#344054] font-[500] pr-[5rem]'>Your photo</p>
                              <p className='text-[#667085] font-[300]'>This will be displayed on your profile.</p>
                            </td>
                            <td className='flex items-start gap-5 py-[2.5rem]'>
                              <img src="/images/Avatar.svg" alt="" className='w-[80px]' />
                              <div className='relative border flex flex-col justify-center items-center p-7 cursor-pointer rounded-[8px]'>
                                <input type="file" onChange={handleFileUpload} className='absolute w-full h-full opacity-0 cursor-pointer' />
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
                          {
                            loading ?
                            <button className='bg-primary-color py-2 px-[30px] rounded-[8px] text-white'>
                              <img src="./images/loader.gif" className='w-[20px]' alt="" />
                            </button>
                            :
                            <button className='bg-primary-color py-2 px-5 rounded-[8px] text-white' onClick={profileUpdate}>Save</button>
                          }
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
                              <input onChange={e => setOldPassword(e.target.value)} type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>New Password</td>
                            <td>
                              <input onChange={e => setPassword(e.target.value)} type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                          <tr className='border-b border-[#EAECF0] w-full'>
                            <td className='text-[#344054] font-[500] py-[2.5rem]'>Confirm Password</td>
                            <td>
                              <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='********' className='border border-[#D0D5DD] px-[14px] py-[10px] rounded-[8px] shadow-sm outline-none text-[#101828]' />
                            </td>
                          </tr>
                        </table>
                        <div className='flex justify-end mt-[2.5rem] gap-5'>
                          <button  className='border border-[#D0D5DD] py-2 px-5 rounded-[8px] text-[#344054]'>Cancel</button>
                          {
                            loading ?
                            <button className='bg-primary-color py-2 px-[30px] rounded-[8px] text-white'>
                              <img src="./images/loader.gif" className='w-[20px]' alt="" />
                            </button>
                            :
                            <button className='bg-primary-color py-2 px-5 rounded-[8px] text-white' onClick={passwordUpdate}>Save</button>
                          }
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
        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default Settings