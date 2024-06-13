import React from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'

const HelpAndSupport = () => {
  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="px-[30px] py-[1rem]">
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpAndSupport