import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import OTPInput from 'react-otp-input'
import AuthNav from '../../components/auth-nav/AuthNav';
import Alert from '../../components/alert/Alert';

const ConfirmEmail = () => {

    const [otp, setOtp] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

    const navigate = useNavigate()

    async function handleConfirmEmail(){
        if(!otp){
            setMsg('Please input the OTP sent to you.')
            setAlertType('error')
            return
        }else{
            navigate('/about-self')
        }
    }

  return (
    <div className="relative">
        <AuthNav />

        <div className=" mt-[10rem]">
            <div className=" z-[10] w-[70%] mx-auto h-[80%] absolute left-[50%] top-[-5%] blury-bg"  style={{ transform: "translate(-50%, 0%)" }}></div>
            <div className=" flex flex-col justify-center items-center relative z-[11]">
            <div className="bg-white px-4 sm:px-8 pt-8 pb-5 rounded-[16px] sm:shadow-lg w-full sm:w-[588px]">
                <div className="top-bg relative top-[-20px] hidden sm:flex items-center justify-center w-[300px] mx-auto">
                    <img src="./images/logo.svg" alt="Rehoboth Finance Logo" className="mx-auto mb-4 relative top-[-65px] left-[11px]" />
                </div>
                <div className="text-center mb-12 mt-[-80px] relative z-[100]">
                <h2 className="sm:text-2xl text-[18px] font-semibold">Confirm email address </h2>
                <p className="text-[#667085] text-[14px] mt-3">Please input the OTP sent to {localStorage.getItem('createAccountEmail')}</p>
                </div>
                <div className="flex flex-col sm:w-[400px] mx-auto">

                    <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <OTPInput
                        value={otp}
                        inputType='number'
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span style={{ visibility:'hidden' }}>---</span>}
                        renderInput={(props) => <input {...props} placeholder='0' className='text-center otp-input text-[26px] font-[600] outline-none h-[68px] rounded-[8px] border placeholder:text-[#BDBDBD59] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>}
                    />
                    </div>
                    <p className='text-[#667085] text-[12px] mt-2 mb-[5rem] text-center'>Please check your email inbox for an OTP code</p>

                    <button onClick={handleConfirmEmail} className="bg-primary-color text-white w-[90%] mx-auto py-2 px-4 rounded-[8px] mt-5">
                        Confirm
                    </button>
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

export default ConfirmEmail