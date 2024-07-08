import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import logo from '../../assets/images/LOGO PNG.png'
import { FaSortDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-full bg-[#0c141c] flex items-center justify-end p-1 md:p-3 gap-2 md:gap-4 lg:gap-5 xl:gap-9'>
        <IoSearchSharp className='bg-[#141c27] text-lg md:text-3xl xl:text-4xl p-[3px] md:p-[5px] rounded-md lg:rounded-lg'/>
        <GoBellFill className='bg-[#141c27] text-lg md:text-3xl xl:text-4xl p-[3px] md:p-[5px] rounded-md lg:rounded-lg'/>

        <div className='flex items-center justify-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 bg-[#141c27] p-[3px] md:p-[4px] lg:p-[7px] xl:p-[6px] rounded-md lg:rounded-lg px-2 md:px-5 lg:px-6 xl:px-7'>
            <img src={logo} alt="logo" className='h-5 md:h-6 lg:h-7 xl:h-9 rounded-full border-[1px] border-[#01ff86] p-[1px]'/>
            <div>
                <h3 className='text-[8px] md:text-[10px] lg:text-[12px] xl:text-[17px] '>Admin</h3>
                <h4 className='text-[7px] md:text-[8px] lg:text-[9px] xl:text-[12px] '>name</h4>
            </div>
            <FaSortDown className='text-xs'/>
        </div>
    </nav>
  )
}

export default Navbar