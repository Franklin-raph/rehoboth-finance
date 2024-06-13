import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { useState } from 'react';
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import SpecialMissionCard from '../../components/earn-points-card/EarnPointsCard';
import { Link } from 'react-router-dom';
import EarnPointsModal from '../../components/earn-points-modal/EarnPointsModal';


const EarnPoints = () => {

    const [earnPointsModal, setEarnPointsModal] = useState(false)

    const specialMissionsArray = [
        {
            number:1,
            points:'400',
            tag:'0.0',
            title:'Make your first deposit',
            description:'Go to our Top-up section of the app and make a deposit using crypto/fiat to earn some points.'
        },
        {
            number:2,
            points:'267',
            tag:'6.5k',
            title:'Make your first withdrawal',
            description:'Rehoboth is growing, and so are our Ecosystem Social Media. Follow Us on Instagram, Facebook, CMC, and…'
        },
        {
            number:3,
            points:'900',
            tag:'6.5k',
            title:'Use the savings feature',
            description:'Earn yield on your crypto and also get reward points for doing so'
        },
        {
            number:4,
            points:'300',
            tag:'6.5k',
            title:'Follow Rehoboth Socials',
            description:'Earn more points by Following our Twitter and joining our Discord server'
        }
    ]


  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto mb-10">
                <TopNav />
                <div className="px-[10px] pb-[30px] pt-[10px] bg-white mt-5 mx-[30px]">
                    <div className='flex items-start gap-5 p-3'>
                        <div className='w-[50%] bg-[#C7C7C71F] rounded-[12px] p-4'>
                            <p className='text-primary-color text-[30px]'>Onboarding: Earn Rehoboth Rewards</p>
                            {/* <p className='text-[#5D5D5D] text-[14px]'>Complete the series of tasks to be able to claim your own Rehoboth NFT and keep developing it to receive more reward points.</p> */}
                            <div className='w-full bg-[#F1F1F1] rounded-[11px] mb-4'>
                                <div className='grid grid-cols-5 mt-[4.5rem] items-center gap-4'>
                                    {/* <img src="./images/cookie-image.svg" alt="" />
                                    <img src="./images/cookie-image1.svg" alt="" />
                                    <img src="./images/cookie-image2.svg" alt="" />
                                    <img src="./images/cookie-image3.svg" alt="" />
                                    <img src="./images/cookie-image4.svg" className='w-[70%] ml-auto' alt="" /> */}
                                </div>
                                <div className='bg-[#899EFD1A] inline-flex items-center gap-5 mx-4 mt-[5rem] rounded-md'>
                                    <div className='flex items-center gap-3 border-r border-gray-300 py-2 px-4'>
                                        <img src="./images/tag-user.svg" alt="" />
                                        <p className='text-primary-color'>139181 Users</p>
                                    </div>
                                    <div className='flex items-center gap-3  py-2 px-4'>
                                        <img src="./images/cup-colored.svg" alt="" />
                                        <p className='text-primary-color'>20 Tiers</p>
                                    </div>
                                </div>
                                <div className='mt-[2rem] p-4'>
                                    <p className='text-[34px] text-[#333]'>Finish Onboarding to get Rehoboth Points</p>
                                    <div className='flex items-center mt-3'>
                                        <p className='text-[14px] text-[#333] font-[300] w-[300px]'>Get all the necessary points to be able to mint your own Rehoboth Community passport.</p>
                                        <button className='bg-primary-color text-white py-2 px-4 flex justify-between items-center rounded-md gap-3'>
                                            <p>Claim</p>
                                            <GoChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <div className="flex items-center justify-between bg-primary-color rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px]">My Reward Rank</h2>
                                    <p className='text-[12px] font-[300]'>Check your reward amount and eligibility</p>
                                    <button className="bg-white text-blue-600 py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Go to leader board</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        {/* <img src="./images/chart.svg" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-[#C7C7C71F] border border-[#BDBDBD] my-3 rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px] text-[#121212]">Invite friends for bigger rewards</h2>
                                    <p className='text-[12px] font-[300] text-[#5D5D5D]'>Check your reward amount and eligibility</p>
                                    <button className="bg-primary-color py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Go to Referrals</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        {/* <img src="./images/announcement.svg" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-[#C7C7C71F] border border-[#BDBDBD] my-3 rounded-[11px] text-white p-4">
                                <div>
                                    <h2 className="font-[500] text-[17px] text-[#121212]">Make some transactions to boost your scores</h2>
                                    <p className='text-[12px] font-[300] text-[#5D5D5D]'>Check your reward amount and eligibility</p>
                                    <button className="bg-primary-color py-2 px-4 rounded-md flex items-center gap-2 mt-7">
                                        <p>Explore ecosystem</p>
                                        <GoArrowRight />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        {/* <img src="./images/lightning.svg" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto bg-white rounded-[11px] overflow-hidden border border-[#BDBDBD]">
                                <div className="py-4 bg-[#C7C7C71F]">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 px-4">Social Links</h2>
                                    <div className="flex items-center justify-between py-2 border-t border-gray-200 px-4">
                                        <div className="flex items-center">
                                            <img src="./images/global-search.svg" alt="" />
                                            <span className="ml-2 text-gray-700 text-[13px]">Website</span>
                                        </div>
                                        <Link href="https://www.rehobothfinance.com/" className="text-[12px] underline">
                                            https://www.rehobothfinance.com
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between py-4 px-4">
                                        <div className="flex items-center">
                                            <img src="./images/twitter-x.svg" alt="" />
                                            <span className="ml-2 text-gray-700 text-[13px]">Twitter</span>
                                        </div>
                                        <Link href="https://x.com/rehobothfinance_com" className="text-[12px] underline">
                                            https://x.com/rehobothfinance_com
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div className="flex items-center">
                                            <img src="./images/discord.svg" alt="" />
                                            <span className="ml-2 text-gray-700 text-[13px]">Discord</span>
                                        </div>
                                        <Link href="https://discord.com/invite/rehobothfinance" className="text-[12px] underline">
                                            https://discord.com/invite/rehobothfinance
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-[10px]'>
                        <div className='bg-[#C7C7C71F] rounded-[11px] w-full p-[30px] border border-[#BDBDBD]'>
                            <div className='w-[70%] mb-20'>
                                <p className='text-[32px] text-primary-color'>Special Missions</p>
                                <p className='text-[#5D5D5D] font-[300] text-[14px] mt-3'>Do you want to boost your position on the Rehoboth reward leaderboard? You’re in the right place. Keep checking the Rehoboth Community Discord server and Twitter page to be notified about time-sensitive special missions that can earn you extra points.</p>
                            </div>
                            <div className='grid grid-cols-2 gap-[2rem]'>
                                {
                                    specialMissionsArray.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <SpecialMissionCard item={item} setEarnPointsModal={setEarnPointsModal} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* <div className='bg-[#C7C7C71F] rounded-[11px] w-full h-[350px] flex items-center justify-center'>
                            <p className='text-[30px] text-center w-[450px] mx-auto text-[#5D5D5D75] font-[300]'>No Active Quest At The Moment</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        {
            earnPointsModal && <EarnPointsModal setEarnPointsModal={setEarnPointsModal}/>
        }
    </div>
  )
}

export default EarnPoints