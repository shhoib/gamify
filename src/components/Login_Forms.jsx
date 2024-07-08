import React from 'react'
import LOGO from '../../src/assets/images/LOGO PNG.png'
import BG_IMAGE from '../../src/assets/images/BG-01.jpg'


const Login_Forms = ({children}) => {
  return (
    <div className='w-full h-screen flex items-center justify-center' 
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: 'cover',}}
    >
     <div className='w-[80%] md:w-1/2 xl:w-1/4 flex flex-col items-center'>
     <img src={LOGO} alt="logo" className='w-24 md:w-32 xl:w-48 '/>
      {children}
     </div>
    </div>
  )
}

export default Login_Forms