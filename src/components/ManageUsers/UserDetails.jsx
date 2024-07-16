import React, { useEffect, useState } from 'react'
import LocationNav from '../LocationNav'
import { PiHandDepositLight,PiHandWithdrawLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";
import UserCard from '../Cards/UserCard';
import UserActionButton from './UserActionButton';

const userDetailsData = [
    {
        icon : <PiHandDepositLight/>,
        text : 'Total Deposit'
    },
    {
        icon : <PiHandWithdrawLight/>,
        text : 'Total Withdraw'
    },
    {
        icon : <GrTransaction/>,
        text : 'Total Transactions'
    },
    {
        icon : <GiTrophyCup/>,
        text : 'Total Win Amount'
    },
] 

const userActionsData = [
    {
     text : 'Add/Subtract Balance',
     bgColor : '#01ff86',
     onclick : null ,
    },
    {
     text : 'Login Logs',
     bgColor : '#ff813a',
     onclick : null ,
    },
    {
     text : 'Send Email',
     bgColor : '#2fc9ff',
     onclick : null ,
    },
    {
     text : 'Make Admin',
     bgColor : '#ffd704',
     onclick : null ,
    },
    {
     text : 'Email Logs',
     bgColor : '#a178f1',
     onclick : null ,
    },
]

const UserDetails = () => {

    const [userDetails, setuserDetails] = useState({})

    useEffect(() => {
      setuserDetails({
        name : 'Gamblify',
        Username : 'Gamblify',
        Joined : '10 feb 2024 10:43 PM',
        balance : '5,000',
        status : 'Active',
        totalDeposit : '15,000',
        totalWithdraw : '10,000',
        totalTransaction : 4,
        totalWinAmount : '10,000'
      })
    }, [])
    
  return (
    <div>
     <LocationNav text='User Details' />
     <div className='xl:flex  md:gap-3 xl:gap-5 xl:py-7'>

        <div className='flex xl:block  xl:w-[25%] gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-3 md:mt-4 lg:mt-5 xl:mt-6'>
            <div className='bg-Cbg p-3 md:p-5 xl:p-7 rounded-xl w-1/2 xl:w-full h-min'>
                <h1 className='text-[9px] md:text-sm lg:text-base xl:text-xl mb-2 md:mb-3 lg:mb-4 xl:mb-5 font-semibold text-white'>User Information</h1>
                <div className='flex justify-between text-[7px] md:text-[11px] lg:text-xs xl:text-base gap-2'>
                    <div>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Name</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Username</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Joined</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Balance</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>Status</h2>
                    </div>
                    <div className='text-end'>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>{userDetails.name}</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>{userDetails.Username}</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>{userDetails.Joined}</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>{userDetails.balance}</h2>
                        <h2 className='mt-2 md:mt-3 lg:mt-4 xl:mt-5'>{userDetails.status}</h2>
                    </div>
                </div>
            </div>
            <div className='bg-Cbg rounded-xl p-3 md:p-5 lg:p-6 w-1/2 xl:w-full xl:mt-5'>
                <h1 className='text-[11px] md:text-sm lg:text-base xl:text-xl font-semibold text-white'>User Actions</h1>
                <div className='flex flex-col items-center justify-center gap-2 md:gap-2 lg:gap-3 mt-3 md:mt-5 lg:mt-6 xl:mt-6'>
                 {
                    userActionsData.map((data,i)=>(
                        <UserActionButton data={data} />
                    ))
                 }
                </div>
            </div>
        </div>

        <div className='w-full xl:w-[75%] mt-3 md:mt-5 lg:mt-6 xl:mt-6 '>
            <div className='flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4'>
                <div className='w-[48%] md:w-[23.5%] xl:w-[24%]'><UserCard color='#78ff48' heading={userDetails.totalDeposit} text='Total Deposits' icon={<PiHandDepositLight />} /></div>
                <div className='w-[48%] md:w-[23.5%] xl:w-[24%]'><UserCard color='#ff813a' heading={userDetails.totalWithdraw} text='Total Withdraw' icon={<PiHandWithdrawLight />} /></div>
                <div className='w-[48%] md:w-[23.5%] xl:w-[24%]'><UserCard color='#a178f1' heading={userDetails.totalTransaction} text='Total Transaction' icon={<GrTransaction />} /></div>
                <div className='w-[48%] md:w-[23.5%] xl:w-[24%]'><UserCard color='#4ee2b5' heading={userDetails.totalWinAmount} text='Total Deposits' icon={<GiTrophyCup />} /></div>
            </div>

            <div className='bg-Cbg rounded-xl p-4 md:p-5 lg:p-5 xl:p-7 mt-3 md:mt-4 lg:mt-5 xl:mt-6 '>
             <h1 className='text-[11px] md:text-sm lg:text-base xl:text-xl font-semibold text-white '>Information of Gamblify</h1>

             <div className='flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 mt-2 md:mt-5 lg:mt-6 xl:mt-7'>
                <div className='w-1/2'>
                 <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 lg:mb-3'>First Name</h3>
                 <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
                <div className='w-1/2'>
                 <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 lg:mb-3'>Last Name</h3>
                 <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
             </div>
             <div className='flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 mt-2'>
                <div className='w-1/2'>
                 <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>Email</h3>
                 <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
                <div className='w-1/2'>
                 <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>Mobile Number</h3>
                 <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
             </div>

             <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base my-1 mt-2 md:mt-3 lg:mt-4 lg:mb-3'>Address</h3>
             <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />

             <div className='md:flex gap-2 md:gap-3  mt-2'>
              <div className='flex gap-2 md:gap-3 lg:gap-4 xl:gap-5 md:w-1/2'>
                <div className='w-1/2'>
                    <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>City</h3>
                    <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>State</h3>
                    <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                    </div>
              </div>

               <div className='flex mt-2 md:mt-0 gap-2 md:gap-3 lg:gap-4 xl:gap-5 md:w-1/2'>
                <div className='w-1/2'>
                    <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>Zip/Postal</h3>
                    <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-1 mt-2 lg:mb-3'>Country</h3>
                    <input type="text" className='w-full bg-[#1d232a] rounded-md md:h-8 lg:h-10 xl:h-12' />
                </div>
               </div>
             </div>
            
            <div className='mt-4 md:mt-5 lg:mt-6 xl:mt-7'>
              <UserActionButton data={{bgColor:'#01ff86',text:'Save Changes'}} />
            </div>

            </div>
        </div>

     </div>
    </div>
  )
}

export default UserDetails