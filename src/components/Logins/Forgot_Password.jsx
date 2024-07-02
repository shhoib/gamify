import React from 'react'
import { GoMail } from "react-icons/go";
import Login_Forms from '../Login_Forms';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Forgot_Password = () => {

    const navigate = useNavigate();

    const handleLoginNavigate =()=>{
      navigate('/admin_login')
    }
    
  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <GoMail/>
        <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs xl:text-sm pl-3' placeholder='ENTER YOUR EMAIL'/> <br/>
      </div>  

      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
       <Button text='SENT RESET CODE' />
       <h6 className='text-end text-white mt-2 md:mt-3 font-medium text-xs xl:text-base cursor-pointer' onClick={handleLoginNavigate}>Login</h6>
      </div>
      </Login_Forms>
    </div>
  )
}

export default Forgot_Password