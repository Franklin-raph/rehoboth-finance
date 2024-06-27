import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLoader } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import AuthNav from '../../components/auth-nav/AuthNav';
import Alert from '../../components/alert/Alert';
import BtnLoader from '../../components/btn-loader/BtnLoader';

const AboutSelf = () => {

    const navigate = useNavigate()
    const [showCountries, setShowCountries] = useState(false)
    const [allCountries, setAllCountries] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchText, setSeacrhText] = useState('')
    
    const [transactionPin, setTransactionPin] = useState('')
    const [confirmTransactionPin, setConfirmTransactionPin] = useState('')
    const [userName, setUserName] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

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
        getAllCountruies()
    },[])

    async function handleAboutSelfCreation(){
        if(!transactionPin || !confirmTransactionPin || !userName || !country){
            setMsg('Please fill in all fields')
            setAlertType('error')
            return
        }else if(transactionPin !== confirmTransactionPin){
            setMsg('Transaction PINs do not match')
            setAlertType('error')
            return
        }else{
            setLoading(true)
            const res = await fetch(`${BASE_URL}/user/about-self`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Api-Key': `${API_KEY}`,
                },
                body: JSON.stringify({
                    transactionPin,
                    userName,
                    country
                })
            })
            const data = await res.json()
            if(res) setLoading(false)
            if(res.ok){
                setAlertType('success')
                navigate('/dashboard')
            }else{
                setMsg(data.message)
                setAlertType('error')
            }
        }
    }

  return (
    <div className="relative">
        <AuthNav />
        <div className="sm:mt-[10rem] mt-[7rem]">
            <div className="hidden sm:block z-[10] w-[70%] mx-auto h-[80%] absolute left-[50%] top-[-5%] blury-bg"  style={{ transform: "translate(-50%, 0%)" }}></div>
            <div className="flex flex-col justify-center items-center relative z-[11]">
            <div className="bg-white px-4 sm:px-8 pt-8 pb-5 rounded-[16px] sm:shadow-lg w-full max-w-[588px]">
                <div className="top-bg relative top-[-20px] hidden sm:flex items-center justify-center w-[300px] mx-auto">
                    <img src="./images/logo.svg" alt="Rehoboth Finance Logo" className="mx-auto mb-4 relative top-[-65px] left-[11px]" />
                </div>
                <div className="text-center mb-12 mt-[-80px] relative z-[100]">
                <h2 className="text-2xl font-semibold mb-2">Create Your Wallet</h2>
                <p className="text-[#667085] sm:text-[14px] text-[12px]">These details will help us set up your Rehoboth Wallet</p>
                </div>
                <form className="flex flex-col sm:w-[400px] mx-auto">
                
                <div className='my-7'>
                    <label className="text-[#344054] font-[500] text-[14px] mb-1 block">Username</label>
                    <input
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Your nickname"
                        className="border border-gray-300 p-2 rounded-[6px] w-full outline-none text-[#667085]"
                    />
                </div>

                <div>
                    <label className="text-[#344054] font-[500] text-[14px] mb-1 block">Create transaction Pin</label>
                    <input
                        type="text"
                        onChange={e => setTransactionPin(e.target.value)}
                        placeholder="Input a 4-digit pin"
                        className="border border-gray-300 p-2 rounded-[6px] outline-none w-full text-[#667085]"
                    />
                </div>

                <div className="my-7">
                    <label className="text-[#344054] font-[500] text-[14px] mb-1 block">Confirm transaction Pin</label>
                    <input
                        type="text"
                        onChange={e => setConfirmTransactionPin(e.target.value)}
                        placeholder="Input a 4-digit pin"
                        className="border border-gray-300 p-2 rounded-[6px] outline-none w-full text-[#667085]"
                    />
                </div>
                
                <div className='relative'>
                    <label className="text-[#344054] font-[500] text-[14px] mb-1 block">Country</label>
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
                        <div className='bg-white w-full absolute top-[75px] rounded-[4px] border border-gray-300 h-[300px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
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
                </div>
                {
                    loading ?
                    <BtnLoader />
                    :
                    <button onClick={handleAboutSelfCreation} className="bg-primary-color text-white py-2 px-4 rounded-[8px] mt-7">
                        Confirm
                    </button>
                }
                <div className="text-center text-[#808080] mt-5 sm:mt-[70px] text-[14px]">
                    Already have an account? <Link to="/login" className="text-blue-600">Log in</Link>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className="mt-[100px] mb-5 sm:mx-10 flex sm:flex-row flex-col sm:gap-0 gap-3 items-center justify-between">
            <p className="text-[#808080] text-[12px]">
                &copy; {new Date().getFullYear()} Rehoboth finance. All rights reserved.
            </p>
            <div className="text-[#808080] text-[12px] flex items-center gap-4">
                <Link href="#">Privacy Policy</Link>
                <Link href="#" className="mr-4">Terms of Use</Link>
            </div>
        </div>
        {
            msg && <Alert msg={msg} setMsg={setMsg} alertType={alertType}/>
        }
    </div>
  )
}

export default AboutSelf