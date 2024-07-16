import React from 'react'
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarMap = ({data,isclosed}) => {

  const [showDropdown, setshowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleShowDropdown =()=>{
    setshowDropdown(!showDropdown);
  }

  const handleNavigate =()=>{
    navigate(data.navigateTo)
  }

  const handleClick = () => {
    if (data.hasDropdown) {
      handleShowDropdown();
    } else {
      handleNavigate();
    }
  }

  return (
    <div className=''>
    <div className='flex items-center justify-between text-[10px] md:text-sm lg:text-base xl:text-base px-3 md:px-4 lg:px-5 xl:px-6 py-2 md:py-3 hover:bg-[#1d2d3f] cursor-pointer rounded-xl hover:text-white mx-3 transition-all'  onClick={handleClick}>
      <div className='flex items-center justify-center gap-2 md:gap-3 xl:gap-4'>
        <div>{data.icon}</div>
        {
            !isclosed &&
            <h3>{data.text}</h3>
        }
      </div>
      {
        !isclosed && data.hasDropdown &&
        <div>{showDropdown ? <MdOutlineKeyboardArrowDown/> : <MdOutlineKeyboardArrowRight/> }</div>
      }
    </div>

    {
      showDropdown && data.hasDropdown && !isclosed &&
      <div className='text-[8px] md:text-[11px] lg:text-xs xl:text-sm px-3 md:px-4 lg:px-5 xl:px-6 mx-4 transition-all'>
        {
          data.dropdownData.map((dropData,i)=>(
            <div className='flex gap-2 items-center hover:bg-[#1d2d3f] cursor-pointer rounded-lg lg:rounded-xl hover:text-white p-1 md:p-2 px-2'>
              <h1 className='text-[5px] md:text-[8px] lg:text-[9px] xl:text-[11px] text-[#545861]'><GoDotFill/></h1>
              <h3>{dropData}</h3>
            </div>
          ))
        }
      </div>
    }
    </div>
  )
}

export default SidebarMap