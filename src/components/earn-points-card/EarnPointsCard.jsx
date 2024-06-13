import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const SpecialMissionCard = ({item, setEarnPointsModal}) => {

  console.log(item);

    const handleClaimClick = () => {
        localStorage.setItem("earnPointsInfo", JSON.stringify({ itemNumber: item.number.toString(), itemTitle: item.title }));
        // localStorage.setItem("missionTitle", item.title);
        setEarnPointsModal(true);
    };

  return (
    <div className="flex flex-col p-6 bg-white rounded-[20px]">
      <div className="w-[200px] bg-primary-color text-white p-4 rounded-[12px] flex flex-col mb-[2rem]">
        <div className="flex items-center justify-between mb-16">
          <div className="bg-[#FFFFFF1A] p-[2px] rounded-sm">
            <img
              src="./images/simple-mission.svg" // Replace with actual path to the icon
              alt="Icon"
              className="w-10 h-10"
              aria-hidden="true"
            />
          </div>
          <div className="bg-[#9A9A9A4D] p-[10px] rounded-full flex items-center gap-3">
            <img src="./images/simple-mission1.svg" alt="" />
            <p>{item?.tag}</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-[-8px] text-[54px]">{item?.points}</p>
          <p className="text-[12px] font-[300]">XP POINTS</p>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <h3 className="text-[22px] text-[#121212]">{item?.title}</h3>
          <p className="text-[#5D5D5D] my-5 text-[14px]">{item?.description}</p>
        </div>
        <button
          className="mt-6 bg-primary-color text-white py-2 px-6 rounded-[11px] inline-flex items-center gap-4"
          onClick={handleClaimClick}
        >
          <p>Claim</p>
          <GoArrowRight />
        </button>
      </div>
    </div>
  )
}

export default SpecialMissionCard