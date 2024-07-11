import React, { useEffect, useState } from 'react'
import LocationNav from '../LocationNav'
import { PiHandDepositLight,PiHandWithdrawLight } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";
import UserCard from '../Cards/UserCard';

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
     <div className='md:flex xl:gap-5 xl:py-7'>

        <div className='flex md:block  w-[25%]'>
            <div className='bg-Cbg p-3 xl:p-6 rounded-xl'>
                <h1 className='text-[9px] xl:text-xl mb-2 md:mb-3 lg:mb-4 xl:mb-5 font-semibold text-white'>User Information</h1>
                <div className='flex justify-between text-[7px] xl:text-base gap-2'>
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
            <div></div>
        </div>

        <div className='w-[75%]'>
            <div className='flex flex-wrap gap-2 xl:gap-6'>
                <div className='w-[48%] md:w-[23%]'><UserCard color='#78ff48' heading={userDetails.totalDeposit} text='Total Deposits' icon={<PiHandDepositLight />} /></div>
                <div className='w-[48%] md:w-[23%]'><UserCard color='#ff813a' heading={userDetails.totalWithdraw} text='Total Withdraw' icon={<PiHandWithdrawLight />} /></div>
                <div className='w-[48%] md:w-[23%]'><UserCard color='#a178f1' heading={userDetails.totalTransaction} text='Total Transaction' icon={<GrTransaction />} /></div>
                <div className='w-[48%] md:w-[23%]'><UserCard color='#4ee2b5' heading={userDetails.totalWinAmount} text='Total Deposits' icon={<GiTrophyCup />} /></div>
            </div>
            <div></div>
        </div>

     </div>
    </div>
  )
}

export default UserDetails