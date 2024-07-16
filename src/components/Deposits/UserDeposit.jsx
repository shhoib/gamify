import React from 'react'
import LocationNav from '../LocationNav'
import DepositCard from '../Cards/DepositCard'
import PaginatedItems from '../pagination/PaginatedItems'
import UserDepositMap from './UserDepositMap'
import { DepositData } from './DepositData'

const UserDeposit = () => {
  return (
    <div>
     <LocationNav text='User Deposit : Gamblify' />

     <div className='flex gap-2 md:gap-3 lg:gap-4 xl:gap-9 mt-2 md:mt-5 xl:mt-6'>
        <div className='w-1/3'><DepositCard color='#01ff86' heading='$ 15000' text='Successful Deposit' /></div>
        <div className='w-1/3'><DepositCard color='#ff813a' heading='$ 15000' text='Pending Deposit' /></div>
        <div className='w-1/3'><DepositCard color='#ff4749' heading='$ 15000' text='Rejected Deposit' /></div>
     </div>

     <PaginatedItems itemsPerPage={15} userData={DepositData} Component={UserDepositMap} />

    </div>
  )
}

export default UserDeposit