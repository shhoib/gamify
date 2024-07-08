import React, { useState } from 'react'
import Login_Forms from '../Login_Forms'
import Button from '../Button'
import { FiUser } from "react-icons/fi";
import { RxLockClosed } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { verifyLogin } from '../../services/admin_login_serices';


const Admin_Login = () => {
  const navigate = useNavigate();


  const [formData,setFormData] = useState({
    username:"",
    password:""
  })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    response:'',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
      response:''
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
    if (name === 'username' && value.length < 4) {
      newErrors.username = 'Username must be at least 4 characters long';
    }
    if (name === 'password' && value.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    setErrors(newErrors);
  };

  const handleLogin = async() => {
    let isValid = true;
    const newErrors = { ...errors };
    if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters long';
      isValid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    const {success,message} = await verifyLogin(formData)
    if(!success) return setErrors(prev =>({...prev,response:message}))
    navigate('/admin_home')
  }


  const handleForgotPassword = () => {
    navigate('/forgot_password')
  }
  return (
    <div>
      <Login_Forms>

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-2 md:mt-3 xl:mt-5'>
        <FiUser/>
          <input type="text" className='w-full bg-[#1d232a] rounded-r-xl text-xs xl:text-sm pl-3 focus:outline-none focus:bg-[#1d232a] focus:ring-0' placeholder='USERNAME'
            value={formData.username}
            onChange={handleChange}
            name='username'
            onBlur={handleBlur}
            autoComplete='off'

        /> <br/>
      </div>
        {errors.username && <p className='text-red-500 text-xs mt-1'>{errors.username}</p>}

      <div className='flex items-center h-11 md:h-12 pl-2 md:pl-3 text-white w-full bg-[#1d232a] rounded-md mt-3 md:mt-4 xl:mt-5'>
        <RxLockClosed/>
        <input type="password"
        name='password'
          value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete='off'
            className='w-full bg-[#1d232a] rounded-r-xl text-xs lg:text-sm pl-3 focus:outline-none focus:bg-[#1d232a] focus:ring-0' placeholder='PASSWORD'/> <br/>
      </div>  
        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
        {errors.response && errors.response.length > 1 &&
          <div className='mt-2'>
            <p className='text-red-500 text-xs mt-1'>{errors.response}</p>
          </div>
        }
      <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
      <Button text='LOGIN' onclick={handleLogin}/>
      <h6 className='text-end text-white mt-1 md:mt-2 text-xs xl:text-base font-medium cursor-pointer' onClick={handleForgotPassword}>Forgot password?</h6>
      </div>
      

      </Login_Forms>
    </div>
  )
}

export default Admin_Login