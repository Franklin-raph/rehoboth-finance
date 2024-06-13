import React from 'react'
import { BsLightningChargeFill } from "react-icons/bs";



const EarnPointsModal = ({setEarnPointsModal}) => {
  return (
    <div>
        <div className="h-full w-full fixed top-0 left-0 z-[99]" style={{ background: "rgba(14, 14, 14, 0.58)" }} onClick={() => setEarnPointsModal(false)} ></div>
        <div className="bg-white w-[500px] fixed top-[50%] left-[50%] z-[100] rounded-[8px]" style={{ transform: "translate(-50%, -50%)" }}>
            {/* <div className="w-full bg-gradient-to-r from-primary-color to-blue-400 text-white p-4 rounded-t-[8px] flex flex-col items-start">
                <p className="text-sm">Task 04</p>
                <p className="text-2xl font-bold mt-2">Make your first deposit</p>
            </div> */}
            <img src="./images/mission.svg" alt="" className='rounded-t-[11px]'/>
            <div className='flex items-center justify-between mt-7 px-4'>
                <div className='flex items-center gap-1 py-2 px-4 bg-[#899EFD1A]'>
                    <BsLightningChargeFill className='text-primary-color'/>
                    <p className='text-primary-color text-[10px]'>More Information</p>
                </div>
                <div className='bg-[#899EFD1A] inline-flex items-center rounded-md'>
                    <div className='flex items-center gap-1 border-r border-gray-300 py-2 px-4'>
                        <img src="./images/tag-user.svg" alt="" />
                        <p className='text-primary-color text-[10px]'>139181 Participants</p>
                    </div>
                    <div className='flex items-center gap-1 py-2 px-4'>
                        <img src="./images/cup-colored.svg" alt="" />
                        <p className='text-primary-color text-[10px]'>20 Tiers</p>
                    </div>
                </div>
            </div>
            <div className='px-4 mt-7 mb-[12rem]'>
                <p className='text-[20px]'>Follow Rehoboth Finance on Instagram</p>
                <p className='text-[#828282] text-[14px]'>Follow us on instagram, react and comment on pinned posts.</p>
            </div>
            <div className="flex flex-col items-center mt-10 gap-4 w-[80%] mx-auto mb-[2rem]">
                <button className="bg-primary-color text-white py-2 px-8 rounded-[6px] w-full">
                    Execute task
                </button>
                <button className="bg-[#EEEFF0] text-[#0C0C0C] py-2 px-8 rounded-[6px] w-full">
                    Claim +250 Points
                </button>
            </div>
        </div>
    </div>
  )
}

export default EarnPointsModal