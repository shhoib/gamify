import { useState } from 'react'
import Login_Forms from '../Login_Forms'
import Button from '../Button'
import { verifyOTP } from '../../services/admin_login_serices'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleInput = (event, index) => {
    setError('')
    const { value } = event.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  const handleKeyDown = (event, index) => {
    const { key } = event;
    if (key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      } else {
        document.getElementById(`otp-input-${index}`).focus();
      }
    }
  };

  const handleVerifyOTP = async () => {
    let value = otp.join('');
    if (value.length !== 4) return setError('Please enter the 4-digit OTP')
    const { success, message } = await verifyOTP(Number(value))
    if (!success) return setError(message)
    navigate('/resetPassword')
  }


  return (
    <div>
      <Login_Forms>
        <h1 className='text-white font-semibold md:text-2xl xl:text-2xl'>Please check your email</h1>
        <h3 className='text-slate-200 font-thin text-sm md:text-base xl:text-xl mt-1'>code sent to <span className='font-semibold'>adminemail@site.com</span></h3>

        <div className='flex gap-6 md:gap-9 xl:gap-7 mt-6 xl:mt-9'>
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              className='border-[#01ff86] text-white bg-[#1d232a] border-[1px] w-1/4 h-12 md:h-16 xl:h-20 rounded-xl lg:rounded-2xl text-center text-2xl'
              value={value}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
            />
          ))}

        </div>
        {error && error.length > 1 &&
          <div className='mt-2'>
            <p className='text-red-500 text-xs mt-1'>{error}</p>
          </div>
        }

        <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
          <Button text='VERIFY' onclick={handleVerifyOTP} />
        </div>

      </Login_Forms>
    </div>
  )
}

export default Verify