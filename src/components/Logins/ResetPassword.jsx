import React from 'react'
import Login_Forms from '../Login_Forms'
import { RxLockClosed } from "react-icons/rx";
import Button from '../Button';

const ResetPassword = () => {
  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
        <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3' placeholder='PASSWORD'/> <br/>
      </div> 

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
        <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3' placeholder='CONFIRM NEW PASSWORD'/> <br/>
      </div> 

      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
      <Button text='RESET PASSWORD' />
      </div>

      </Login_Forms>
    </div>
  )
}

export default ResetPassword