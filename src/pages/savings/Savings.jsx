import React, { useState } from 'react'
import SideNav from '../../components/side-nav/SideNav'
import TopNav from '../../components/top-nav/TopNav'
import SavingsCard from '../../components/savings-card/SavingsCard'
import SaveCardModal from '../../components/save-card-modal/SaveCardModal'

const Savings = () => {

  // const []

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

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-full lg:w-[84%] bg-[#F5F5F5] ml-auto mb-10">
                <TopNav />
                <div className="lg:px-[10px] pb-[30px] pt-[10px] lg:bg-white bg-transparent mt-5 lg:mx-[30px]">
                    <div className='px-[10px]'>
                        <div className='lg:bg-[#C7C7C71F] bg-transparent rounded-[11px] w-full py-[30px] px-[10px] border-transparent lg:border border-[#BDBDBD]'>
                            <div className='w-[70%] lg:mb-20 mb-5'>
                                <p className='lg:text-[32px] text-[20px] text-primary-color'>Our tokens and reward rates</p>
                                <p className='text-[#5D5D5D] font-[300] lg:text-[14px] text-[12px] mt-3'>You are free ton choose which currency you want to save in. All currencies have a yield feature.</p>
                            </div>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-[2rem] lg:bg-[#F1F1F1] bg-transparent lg:pt-[12rem] pb-[6rem] lg:px-6 rounded-[11px]'>
                                {
                                    savingsArray.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <SavingsCard item={item} setSaveCardModal={setSaveCardModal}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            saveCardModal && <SaveCardModal setSaveCardModal={setSaveCardModal}/>
        }
    </div>
  )
}

export default Savings