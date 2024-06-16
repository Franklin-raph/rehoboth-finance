import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLoader } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import AuthNav from '../../components/auth-nav/AuthNav';
import Alert from '../../components/alert/Alert';

const AboutSelf = () => {

    const navigate = useNavigate()
    const [showCountries, setShowCountries] = useState(false)
    const [allCountries, setAllCountries] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchText, setSeacrhText] = useState('')
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [country, setCountry] = useState('')

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
        if(!firstName || !lastName || !userName || !country){
            setMsg('Please fill in all fields')
            setAlertType('error')
            return
        }else{
            navigate('/login')
        }
    }

  return (
    <div className="relative">
        <AuthNav />
        <div className=" mt-[10rem]">
            <div className=" z-[10] w-[70%] mx-auto h-[80%] absolute left-[50%] top-[-5%] blury-bg"  style={{ transform: "translate(-50%, 0%)" }}></div>
            <div className=" flex flex-col justify-center items-center relative z-[11]">
            <div className="bg-white px-8 pt-8 pb-5 rounded-[16px] shadow-lg w-full max-w-[588px]">
                <div className="top-bg relative top-[-20px] flex items-center justify-center w-[300px] mx-auto">
                <img src="./images/logo.svg" alt="Rehoboth Finance Logo" className="mx-auto mb-4 relative top-[-65px] left-[11px]" />
                </div>
                <div className="text-center mb-12 mt-[-80px] relative z-[100]">
                <h2 className="text-2xl font-semibold">Tell us a little about you</h2>
                <p className="text-[#667085] text-[14px]">These details would help us set up your account profile</p>
                </div>
                <div className="flex flex-col w-[400px] mx-auto">

                <div>
                    <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">First Name</label>
                    <input
                        type="text"
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="Adeyemi"
                        className="border border-gray-300 text-[#707070] p-2 rounded-[6px] outline-none w-full"
                    />
                </div>
                <div className="my-5">
                    <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">Last Name</label>
                    <input
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Issac"
                        className="border border-gray-300 p-2 rounded-[6px] outline-none w-full"
                    />
                </div>
                <div>
                    <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">Username</label>
                    <input
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Your nickname"
                        className="border border-gray-300 p-2 rounded-[6px] w-full outline-none"
                    />
                </div>

                <div className='my-5 relative'>
                    <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">Country</label>
                    <div className='flex items-center justify-between border border-gray-300 p-2 rounded-[6px] w-full'>
                        <input
                            type="text"
                            value={country}
                            placeholder="Nigeria"
                            className="outline-none"
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

                <button onClick={handleAboutSelfCreation} className="bg-primary-color text-white py-2 px-4 rounded-[8px] mt-5">
                    Confirm
                </button>
                <div className="text-center text-[#808080] mt-[70px] text-[14px]">
                    Already have an account? <Link to="/login" className="text-blue-600">Log in</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="mt-[100px] mb-5 mx-10 flex items-center justify-between">
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