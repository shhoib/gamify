import React from 'react'
import LocationNav from '../LocationNav'
import { IoMdClose } from "react-icons/io";
import PaginatedItems from '../pagination/PaginatedItems';
import { userData } from '../ManageUsers/userData';
import UserPaginationMap from '../pagination/UserPaginationMap';

export const rComponent = ()=>{
  return (
    <div className='rounded-full bg-[#1c2737] text-white p-[3px] text-[9px] xl:text-base'><IoMdClose/></div>
  )
}

const ManageUsers = () => {
  return (
    <div>
      <LocationNav text='Manage Users' RightComponent={rComponent} />
      <PaginatedItems itemsPerPage={25} userData={userData} Component={UserPaginationMap} />
    </div>
  )
}

export default ManageUsers