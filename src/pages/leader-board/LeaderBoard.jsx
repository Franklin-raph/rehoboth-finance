import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'

const LeaderBoard = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto mb-[30px]">
                <TopNav />
                <div className="p-[10px] bg-white mt-5 mx-[30px]">
                    <div className='bg-primary-color w-full h-[150px] rounded-[11px] text-white p-3 leader-board-img'>
                        {/* <p className='text-[24px] font-[500]'>Al-Time <br /> Leaderboard</p> */}
                    </div>
                    <div className='bg-[#899EFD1A] inline-flex items-center mt-7 rounded-md'>
                        <div className='flex items-center gap-3 border-r border-gray-300 py-2 px-4'>
                            <img src="./images/tag-user.svg" alt="" />
                            <p className='text-primary-color text-[10px]'>139181 Users</p>
                        </div>
                        <div className='flex items-center gap-3 py-2 px-4'>
                            <img src="./images/cup-colored.svg" alt="" />
                            <p className='text-primary-color text-[10px]'>20 Tiers</p>
                        </div>
                    </div>
                    <div className='mt-10 mx-[30px]'>
                        {
                            Array.from({ length: 10 }).map((item, index) => {
                                return (
                                    <div className='flex items-center justify-between my-12' key={index}>
                                        <div className='flex items-center gap-7'>
                                            <p>{index + 1}.</p>
                                            <div className='flex items-center gap-3'>
                                                <img src="./images/user.svg" alt="" />
                                                <p>GameChanger</p>
                                            </div>
                                        </div>
                                        <p>6465</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaderBoard