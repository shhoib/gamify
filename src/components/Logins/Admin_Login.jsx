import React from 'react'
import Login_Forms from '../Login_Forms'
import Button from '../Button'
import { FiUser } from "react-icons/fi";
import { RxLockClosed } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';


const Admin_Login = () => {

  const navigate = useNavigate();

  const handleForgotPassword =()=>{
    navigate('/forgot_password')
  }
  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-2 md:mt-3 xl:mt-5'>
        <FiUser/>
        <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs xl:text-sm pl-3' placeholder='USERNAME'/> <br/>
      </div>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
        <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3' placeholder='PASSWORD'/> <br/>
      </div>  

      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
      <Button text='LOGIN' />
      <h6 className='text-end text-white mt-1 md:mt-2 text-xs xl:text-base font-medium cursor-pointer' onClick={handleForgotPassword}>Forgot password?</h6>
      </div>

      </Login_Forms>
    </div>
  )
}

export default Admin_Login