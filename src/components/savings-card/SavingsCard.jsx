import React from 'react'

const SavingsCard = ({item, setSaveCardModal}) => {

    const handleSaveClick = () => {
        localStorage.setItem("saveCard", JSON.stringify({ itemTitle: item.asset }));
        // localStorage.setItem("missionTitle", item.title);
        setSaveCardModal(true);
    };

  return (
    <div className="mx-auto bg-white p-6">
        <div className="flex items-center mb-4">
            <img
                src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" // Replace with the appropriate URL of the USD Coin logo
                alt="USD Coin"
                className="h-6 w-6 mr-2"
            />
            <h2 className="text-[#121212]">{item.title}</h2>
        </div>
        <div className='my-[2rem]'>
            <div className='inline-flex items-center gap-1 py-2 px-4 bg-[#899EFD1A] rounded-[4px]'>
                <img src="./images/tag-user.svg" alt="" />
                <p className='text-primary-color text-[10px]'>{item.participants} Participants</p>
            </div>
            <div className="my-2">
                <span className="text-5xl text-[#121212]">{item.percent}%</span>
                <span className="text-lg">APY</span>
            </div>
            <div className="mb-6">
                <p className="text-[#5D5D5D">With y{item.asset} asset</p>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="bg-primary-color w-full text-white px-6 py-2 rounded-lg font-semibold" onClick={handleSaveClick}>
                Earn with y{item.asset} &rarr;
            </button>
        </div>
    </div>
  )
}

export default SavingsCard