import React from 'react'
import Login_Forms from '../Login_Forms'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

const PasswordChanged = () => {

    const navigate = useNavigate();

    const handleLoginClick =()=>{
      navigate('/admin_login')
    }

  return (
    <div>
      <Login_Forms>
        <h1 className='text-white text-xl xl:text-3xl md:text-3xl font-semibold mt-1'>Password changed</h1>
        <h6 className='text-slate-400 font-extralight text-xs lg:text-base mt-1'>Admin password has changed succesfully</h6>
        <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
          <Button text='BACK TO LOGIN' onclick={handleLoginClick}/>
        </div>
      </Login_Forms>
    </div>
  )
}

export default PasswordChanged