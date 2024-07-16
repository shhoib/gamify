import React, { useState } from 'react'
import Login_Forms from '../Login_Forms'
import { RxLockClosed } from "react-icons/rx";
import Button from '../Button';
import { changePassword } from '../../services/admin_login_serices';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate()




  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async() => {
    if (password.trim().length < 4 || confirmPassword.trim().length < 4) {
      setError('Passwords must be at least 4 characters long');
      return
    } 
     if (password !== confirmPassword) {
      setError('Passwords do not match');
      return
    } 
    
    const {success,message} = await changePassword(password);
    if(!success) return setError(message)
    navigate('/passwordChanged')
  }

  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
        <input
            onChange={(e) => {
              setPassword(e.target.value)
              setError('')
            }}
        type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3 focus:outline-none' placeholder='PASSWORD'/> <br/>
      </div> 

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
          <input type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setError('')
            }}
          className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3 focus:outline-none' placeholder='CONFIRM NEW PASSWORD'/> <br/>
      </div> 
      {
        error && error.length > 0 &&
          <div className='mt-2'>
            <p className='text-red-500 text-xs mt-1'>{error}</p>
          </div>
       }

      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
      <Button text='RESET PASSWORD'  onclick={handleResetPassword}/>
      </div>

      </Login_Forms>
    </div>
  )
}

export default ResetPassword