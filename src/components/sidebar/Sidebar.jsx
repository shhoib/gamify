import React, { useState } from 'react'
import logo from '../../assets/images/LOGO PNG.png'
import { RiArrowLeftSLine,RiUserSettingsFill,RiCustomerService2Fill,RiArrowRightSLine } from "react-icons/ri";
import { TbAppsFilled,TbReportSearch } from "react-icons/tb";
import { FiLink } from "react-icons/fi";
import { IoWallet } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { HiMiniWallet } from "react-icons/hi2";
import { PiGameControllerFill } from "react-icons/pi";
import SidebarMap from './SidebarMap';
import { IoIosSettings } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { VscExtensions } from "react-icons/vsc";
import { LuLanguages } from "react-icons/lu";
import { FaSearchengin } from "react-icons/fa6";
import { TbMailStar } from "react-icons/tb";
import { FaSms } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdOutlineAppRegistration } from "react-icons/md";

const sidebarData = [
  {
    id : 1,
    icon : <TbAppsFilled/>,
    text : 'Dashboard',
    hasDropdown : false,
    navigateTo : '/admin_home'
  },
  {
    id : 2,
    icon : <FiLink/>,
    text : 'Referrals',
    hasDropdown : false,
    navigateTo : ''
  },
  {
    id : 3,
    icon : <RiUserSettingsFill/>,
    text : 'Manage Users',
    hasDropdown : false,
    // dropdownData : ['data1','data2'],
    navigateTo : '/admin_manageUsers'
  },
  {
    id : 4,
    icon : <IoWallet/>,
    text : 'Gateways',
    hasDropdown : true,
    dropdownData : ['data1','data2'],
    navigateTo : ''
  },
  {
    id : 5,
    icon : <GiWallet/>,
    text : 'Deposits',
    hasDropdown : false,
    // dropdownData : ['data1','data2'],
    navigateTo : ''
  },
  {
    id : 6,
    icon : <HiMiniWallet/>,
    text : 'Withdrawals',
    hasDropdown : true,
    dropdownData : ['data1','data2'],
    navigateTo : ''
  },
  {
    id : 7,
    icon : <PiGameControllerFill/>,
    text : 'Games',
    hasDropdown : true,
    dropdownData : ['data1','data2'],
    navigateTo : ''
  },
  {
    id : 8,
    icon : <RiCustomerService2Fill/>,
    text : 'Support tickets',
    hasDropdown : true,
    dropdownData : ['data1','data2'],
    navigateTo : ''
  },
  {
    id : 9,
    icon : <TbReportSearch/>,
    text : 'Reports',
    hasDropdown : true,
    dropdownData : ['data1','data2'],
    navigateTo : ''
  },
]
const settingsData = [
  {
    id : 1,
    icon : <IoIosSettings/>,
    text : 'General settings',
    hasDropdown : false
  },
  {
    id : 2,
    icon : <MdEdit/>,
    text : 'Logo & Favicons',
    hasDropdown : false
  },
  {
    id : 3,
    icon : <VscExtensions/>,
    text : 'Extensions',
  },
  {
    id : 4,
    icon : <LuLanguages/>,
    text : 'Languages',
  },
  {
    id : 5,
    icon : <FaSearchengin/>,
    text : 'SEO manager',
  },
  {
    id : 6,
    icon : <TbMailStar/>,
    text : 'Email manager',
    hasDropdown : true,
    dropdownData : ['data1','data2']
  },
  {
    id : 7,
    icon : <FaSms/>,
    text : 'SMS manager',
    hasDropdown : true,
    dropdownData : ['data1','data2']
  },
]

const frontendData = [
  {
    id : 1,
    icon : <CgNotes/>,
    text : 'Manage Pages',
  },
  {
    id : 2,
    icon : <MdOutlineAppRegistration/>,
    text : 'Manage Sections',
    hasDropdown : true,
    dropdownData : ['data1','data2']
  },
]

const Sidebar = ({children}) => {

  const [isClosed, setisClosed] = useState(true)

  const handleSidebarClose =()=>{
    setisClosed(!isClosed)
  }

  return (
    // <div className='flex w-full'>
      
      <div className={`${ isClosed && 'w-[12%] md:w-[8%] xl:w-[5%]' } w-[40%] xl:w-[20%] bg-[#131a22] fixed z-40 h-screen top-0 left-0 flex flex-col items-center transition-all`} >
        <div className='flex gap-2 lg:gap-4 items-center justify-center relative py-5 md:py-7 lg:py-9 xl:py-11 w-full h-[10%] xl:h-[15%]'>
          <img src={logo} alt="logo"  className={`h-7 md:h-10 lg:h-14 rounded-full border-[1px] border-[#01ff86] p-[2px] ${isClosed && 'h-6 md:h-8 lg:h-9 xl:h-10'}`}/>
          {
          !isClosed &&
          <div>
            <h2 className='text-white text-xs md:text-base lg:text-2xl xl:text-3xl'>Gamblify</h2>
            <h4 className='text-[8px] md:text-xs lg:text-base'>Owner</h4>
          </div>
          }
          {
            isClosed ?
           <RiArrowRightSLine className= {`absolute ${isClosed && 'text-xs md:text-base lg:text-sm xl:text-2xl'} cursor-pointer md:text-2xl lg:text-4xl right-[-11px] md:right-[-15px] lg:right-[-25px] xl:right-[-20px] bg-[#01ff86] shadow-sm shadow-[#01ff86] rounded-full text-black`} onClick={handleSidebarClose}/> :
          <RiArrowLeftSLine className= {`absolute  md:text-2xl lg:text-4xl right-[-11px] md:right-[-15px] cursor-pointer lg:right-[-25px] xl:right-[-20px] bg-[#01ff86] shadow-sm shadow-[#01ff86] rounded-full text-black`} onClick={handleSidebarClose}/>
          }
        </div>

        <hr className='w-[80%] border-[#81848c]'/>

      <div className='flex flex-col items-center w-full  h-[90%] xl:h-[85%]'>
          <div className='flex flex-col items-center w-full overflow-scroll h-[95%] xl:h-[93%]'>
          <div className={`w-full py-2 md:py-3 xl:py-4 ${ isClosed && 'flex flex-col items-center justify-center'}`}>
            {
              sidebarData.map((data)=>(
                <SidebarMap key={data.id} data={data} isclosed={isClosed}/>
              ))
            }
          </div>

          <h1 className= {`text-center text-[11px] md:text-sm lg:text-lg mt-2 md:mt-3 xl:mt-4 ${isClosed && 'text-[6px] md:text-[6px] lg:text-[9px] xl:text-[12px]'}`} >SETTINGS</h1>

          <div className={`w-full py-2 md:py-3 xl:py-4 ${ isClosed && 'flex flex-col items-center justify-center'}`}>
            {
              settingsData.map((data)=>(
                <SidebarMap key={data.id} data={data} isclosed={isClosed}/>
              ))
            }
          </div>

          <h1 className={`text-center text-[11px] md:text-sm lg:text-lg mt-2 md:mt-3 xl:mt-4 ${isClosed && 'text-[6px] md:text-[6px] lg:text-[9px] xl:text-[11px]'}`}>FRONTEND MANAGER</h1>
          <div className={`w-full py-2 md:py-3 xl:py-4 ${ isClosed && 'flex flex-col items-center justify-center'}`}>
            {
              frontendData.map((data)=>(
                <SidebarMap key={data.id} data={data} isclosed={isClosed}/>
              ))
            }
          </div>
          </div>

          <h2 className={`text-[#01ff86] text-xs md:text-sm lg:text-xl xl:text-lg py-2 md:py-3 lg:py-4 w-full cursor-pointer hover:bg-[#26466a] bg-[#1d2d3f] text-center h-[5%] xl:h-[7%] flex items-center justify-center ${isClosed && 'text-[4px] md:text-[6px] lg:text-[9px] xl:text-[14px]'}`}>GAMBLIFY</h2>
       </div>

      </div>

      // <div className='w-full'>
      // {children}
      // </div>
    // </div>
  )
}

export default Sidebar