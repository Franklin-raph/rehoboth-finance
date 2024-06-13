import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import SideNav from '../../components/side-nav/SideNav';
import TopNav from '../../components/top-nav/TopNav';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {

    const currencies = [
        { name: 'Nigerian Naira', code: 'NGN', icon: "NGN" },
        { name: 'Stellar Lumens', code: 'XLM', icon: '⭐' },
        { name: 'Bitcoin', code: 'BTC', icon: '₿' },
        { name: 'Ethereum', code: 'ETH', icon: 'Ξ' },
        { name: 'USD Coin', code: 'USDC', icon: '💵' },
        { name: 'British Pound Sterling', code: 'GBP', icon: '💷' },
        { name: 'Canadian Dollar', code: 'CAD', icon: '🇨🇦' },
        { name: 'Austrian Dollar', code: 'AUD', icon: '🇦🇹' },
      ];
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const navigate = useNavigate()

    const filteredCurrencies = currencies.filter((currency) =>
      currency.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
        <div className='flex items-start bg-[#F5F5F5]'>
            <SideNav />
            <div className="w-[84%] bg-[#F5F5F5] ml-auto">
                <TopNav />
                <div className="p-[10px] rounded-[8px] mt-5 mx-[25px] bg-[#FFFFFF] border border-[#BDBDBD]">
                  <div className='mt-5 ml-1'>
                    <p className='text-primary-color text-[32px]'>Deposit</p>
                    <p className='font-[300] text-[#737985]'>Buy crypto with your money</p>
                  </div>
                  <div className='mt-9'>
                    <h2 className="text-center text-[#151517] mb-2">Choose your deposit currency</h2>
                    <div className='flex items-center gap-5'>
                        <div className="w-[500px] mx-auto p-4 bg-[#F8F8F8] rounded-lg border border-[#B2B2B27A]">
                            <div className="w-full p-2 mb-4 border border-[#B2B2B27A] bg-white rounded-lg flex items-center gap-1">
                                <CiSearch className='text-[22px]'/>
                                <input
                                    type="text"
                                    placeholder="Search transactions, assets etc."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="outline-none bg-transparent"
                                />
                            </div>
                            <ul>
                                {filteredCurrencies.map((currency) => (
                                <li
                                    key={currency.code}
                                    onClick={() => setSelectedCurrency(currency.name)}
                                    className="flex items-center justify-between p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                                >
                                    <div>
                                        <img src={currency.icon} alt="" />
                                        <div>
                                            <span className="flex-grow text-[#414553] block">{currency.name}</span>
                                            <span className="text-[#828282] font-[300]">{currency.code}</span>
                                        </div>
                                    </div>
                                    {selectedCurrency === currency.name && (
                                        <FaCheckCircle className="text-green-500 ml-2" />
                                    )}
                                </li>
                                ))}
                            </ul>
                            <button onClick={() => navigate(`/deposit-currency/${selectedCurrency}`)} className="w-full p-2 mt-4 bg-primary-color text-white rounded-lg hover:bg-blue-600">
                                Proceed
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deposit