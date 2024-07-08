import React, { useState } from 'react'
import { GoMail } from "react-icons/go";
import Login_Forms from '../Login_Forms';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { sendOTP } from '../../services/admin_login_serices';

const Forgot_Password = () => {

  const navigate = useNavigate();


    const[email,setEmail] = useState('')
    const [errors, setErrors] = useState({
    email:"",
    response:""
  })

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
      setEmail(value);
      setErrors({
        response:"",
        email: ""
      });
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address"
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ""
      }));
    }
  };

    const handleSendOTP = async() => {

      if (!validateEmail(email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address"
        }));
        return
      } 
      const { success, message }= await sendOTP()
      if (!success) return setErrors((prevErrors) => ({...prevErrors,response: message }));
      navigate('/verify')
    }
    

  const handleLoginNavigate = () => {
    navigate('/admin_login')
  }

  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5 '>
        <GoMail/>
          <input type="text"
            onChange={handleEmailChange}
            onBlur={handleBlur}
          className='w-full bg-[#1d232a] rounded-r-xl text-xs xl:text-sm pl-3 focus:outline-none focus:bg-[#1d232a] focus:ring-0' placeholder='ENTER YOUR EMAIL'/> <br/>
      </div>  
        {errors && errors.email.length > 1 &&
            <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
        }
        {errors.response && errors.response.length > 1 &&
          <div className='mt-2'>
            <p className='text-red-500 text-xs mt-1'>{errors.response}</p>
          </div>
        }
      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
          <Button text='SENT RESET CODE' onclick={handleSendOTP} />
       <h6 className='text-end text-white mt-2 md:mt-3 font-medium text-xs xl:text-base cursor-pointer' onClick={handleLoginNavigate}>Login</h6>
      </div>
 
      </Login_Forms>
    </div>
  )
}

export default Forgot_Password