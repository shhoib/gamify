import React from 'react';
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const UserPaginationMap = ({ currentItems }) => {

  const navigate = useNavigate()

  const handleNavigateUserDetails =(item)=>{
    navigate(`/admin_UserDetails/${item.id}`);
  }
  return (
    <div className='text-[6px] md:text-[10px] lg:text-[11px] xl:text-base text-center'>
      <table className='w-full '>
        <thead className='text-white'>
          <tr>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>User</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Email - Phone</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Country</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Joined At</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Balance</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-Cbg '>
          {currentItems && currentItems.map((item) => (
            <tr key={item.id} className='hover:bg-[#263343] cursor-pointer' onClick={()=>handleNavigateUserDetails(item)}>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>
                <h2>{item.user}</h2>
                <h3 className='text-dGreen'>{item.userID}</h3>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>
                <div className='text-center font-thin'>
                  <h2>{item.email}</h2>
                  <h2>{item.phone}</h2>
                </div>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>{item.country}</td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 font-thin'>{item.joinedAt}</td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 text-lGreen'>{item.balance}</td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 text-lGreen text-center align-middle xl:text-2xl'><RiEditBoxFill className='inline-block'/></td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPaginationMap;
