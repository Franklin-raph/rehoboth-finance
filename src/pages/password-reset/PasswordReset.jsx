import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import OTPInput from 'react-otp-input'
import AuthNav from '../../components/auth-nav/AuthNav';
import Alert from '../../components/alert/Alert';
import BtnLoader from '../../components/btn-loader/BtnLoader';
import { GoEye, GoEyeClosed } from "react-icons/go";

const PasswordReset = () => {

    const [otp, setOtp] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const API_KEY = import.meta.env.VITE_API_KEY
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    async function handlePasswordReset(){
        if(!otp){
            setMsg('Please input the OTP sent to you.')
            setAlertType('error')
            return
        }else if(password !== confirmPassword){
            setMsg('Passwords do not match')
            setAlertType('error')
            return
        }else{
            console.log({
                otp,
                password,
                email: localStorage.getItem('forgot-password-email'),
            });
            setLoading(true)
            const res = await fetch(`${BASE_URL}/auth/reset-password`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-Key': `${API_KEY}`,
                },
                body: JSON.stringify({
                    otp,
                    password,
                    email: localStorage.getItem('forgot-password-email'),
                })
            })
            const data = await res.json()
            if(res) setLoading(false)
            if(res.ok){
                setMsg(data.message)
                setAlertType('success')
                navigate('/login')
            }
            if(!res.ok){
                setMsg(data.message)
                setAlertType('error')
            }
            console.log(data);
        }
    }

    async function resendOtp(e){
        e.preventDefault()
        setLoading(true)
        const res = await fetch(`${BASE_URL}/auth/resend-forgot-password-otp`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': `${API_KEY}`,
            },
            body: JSON.stringify({email: localStorage.getItem('forgot-password-email')})
        })
        if(res) setLoading(false)
        const data = await res.json()
        if(res.ok){
            setMsg(data.message)
            setAlertType('success')
        }else{
            // const data = await res.json()
            setMsg(data.message)
            setAlertType('error')
        }
    }


  return (
    <div className="relative">
        <AuthNav />
        <div className="sm:mt-[10rem] mt-[7rem]">
            <div className="hidden sm:block z-[10] w-[70%] mx-auto h-[80%] absolute left-[50%] top-[-5%] blury-bg"  style={{ transform: "translate(-50%, 0%)" }}></div>
            <div className=" flex flex-col justify-center items-center relative z-[11]">
                <div className="bg-white px-4 sm:px-8 pt-8 pb-5 rounded-[16px] sm:shadow-lg w-full sm:w-[588px]">
                    <div className="top-bg relative top-[-20px] hidden sm:flex items-center justify-center w-[300px] mx-auto">
                        <img src="./images/logo.svg" alt="Rehoboth Finance Logo" className="mx-auto mb-4 relative top-[-65px] left-[11px]" />
                    </div>
                    <div className="text-center mb-12 mt-[-80px] relative z-[100]">
                        <h2 className="sm:text-2xl text-[18px] font-semibold">Reset your password </h2>
                        <p className="text-[#667085] text-[14px] mt-3">Please input the OTP sent to {localStorage.getItem('forgot-password-email')}</p>
                    </div>
                    <div className="flex flex-col sm:w-[400px] mx-auto">

                    <div>
                        <label htmlFor="otp" className="text-[#121212] gont-[500] text-[14px] mb-1 block">OTP</label>
                        <input
                            type="text"
                            onChange={e => setOtp(e.target.value)}
                            placeholder="123456"
                            className="border border-gray-300 text-[#707070] p-2 rounded-[8px] outline-none w-full"
                        />
                        <p className='text-[#667085] text-[12px] text-end'>Please check your email inbox for an OTP code</p>
                    </div>

                    <div className='my-5'>
                        <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">Password</label>
                        <div className='flex items-center justify-between border border-gray-300 p-2 rounded-[6px] w-full'>
                        <input
                            type={passwordType}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="********"
                            className="outline-none w-full"
                        />
                        <div>
                            {
                            passwordType === 'password' ?
                            <GoEye className='cursor-pointer text-gray-300 text-[22px]' onClick={() => setPasswordType('text')}/>
                            :
                            <GoEyeClosed className='cursor-pointer text-gray-300' onClick={() => setPasswordType('password')}/>
                            }
                        </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-[#121212] gont-[500] text-[14px] mb-1 block">Confirm Password</label>
                        <div className='flex items-center justify-between border border-gray-300 p-2 rounded-[6px] w-full'>
                        <input
                            type={passwordType}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="********"
                            className="outline-none w-full"
                        />
                        <div>
                            {
                            passwordType === 'password' ?
                            <GoEye className='cursor-pointer text-gray-300 text-[22px]' onClick={() => setPasswordType('text')}/>
                            :
                            <GoEyeClosed className='cursor-pointer text-gray-300' onClick={() => setPasswordType('password')}/>
                            }
                        </div>
                        </div>
                    </div>
                        <p className='text-[#808080] cursor-pointer text-center mt-2 text-[14px]' onClick={resendOtp}>click to resend code?</p>
                        {
                            loading?
                            <BtnLoader />
                            :
                            <button onClick={handlePasswordReset} className="bg-primary-color text-white w-[100%] mx-auto py-2 px-4 rounded-[8px] mt-5">
                                Confirm
                            </button>
                        }
                        <div className="text-center text-[#808080] mt-5 sm:mt-[70px] text-[14px]">
                            Already have an account? <Link to="/login" className="text-blue-600">Log in</Link>
                        </div>
                    </div>
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

export default PasswordReset