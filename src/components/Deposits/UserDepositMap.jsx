import React from 'react'
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const UserDepositMap = ({ currentItems }) => {

    const navigate = useNavigate()

    const handleNavigateDepositDetails =(item)=>{
      navigate(`/admin_UserDeposits/${item.id}`);
    }

    return (
    <div className='text-[6px] md:text-[10px] lg:text-[11px] xl:text-base text-center'>
      <table className='w-full '>
        <thead className='text-white'>
          <tr>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Crypto / Txid</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Initialised</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>User</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Amount</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Status</th>
            <th className='py-2 md:py-3 lg:py-3 xl:py-6'>Action</th>
          </tr>
        </thead>

        <tbody className='bg-Cbg'>
          {currentItems && currentItems.map((item,i) => (
            <tr key={i} className='hover:bg-[#263343] cursor-pointer'onClick={()=>handleNavigateDepositDetails(item)} >
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>
                <h2 className='text-dGreen'>BTC</h2>
                <h3 >{item.id}</h3>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>
                <div className='text-center font-thin'>
                  <h2>{item.initialised}</h2>
                </div>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4'>
                <div>
                    <h2>Gamblify</h2>
                    <h1 className='text-lGreen'>@Gamblify</h1>
                </div>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 font-thin'>
                <div>
                    <h3>{item.btc} BTC</h3>
                    <h2 className='font-semibold'>{item.amount} USD</h2>
                </div>
              </td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 text-lGreen' style={{ color: item.approveStatus === 'Approved' ? '#01ff86' : item.approveStatus === 'Pending' ? '#fb8243' : '#fb4a4e' }}>{item.approveStatus}</td>
              <td className='py-2 md:py-3 lg:py-3 xl:py-4 text-lGreen text-center align-middle xl:text-2xl'><RiEditBoxFill className='inline-block'/></td>
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserDepositMap