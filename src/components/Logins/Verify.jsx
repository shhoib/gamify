import React from 'react'
import Login_Forms from '../Login_Forms'
import Button from '../Button'

const Verify = () => {
  return (
    <div>
     <Login_Forms>
        <h1 className='text-white font-semibold md:text-2xl xl:text-2xl'>Please check your email</h1>
        <h3 className='text-slate-200 font-thin text-sm md:text-base xl:text-xl mt-1'>code sent to <span className='font-semibold'>adminemail@site.com</span></h3>

        <div className='flex gap-6 md:gap-9 xl:gap-7 mt-6 xl:mt-9'>
          <input type="number" className='border-[#01ff86] bg-[#1d232a] border-[1px] w-1/4 h-12 md:h-16 xl:h-20 rounded-xl lg:rounded-2xl'/>
          <input type="number" className='border-[#01ff86] bg-[#1d232a] border-[1px] w-1/4 h-12 md:h-16 xl:h-20 rounded-xl lg:rounded-2xl'/>
          <input type="number" className='border-[#01ff86] bg-[#1d232a] border-[1px] w-1/4 h-12 md:h-16 xl:h-20 rounded-xl lg:rounded-2xl'/>
          <input type="number" className='border-[#01ff86] bg-[#1d232a] border-[1px] w-1/4 h-12 md:h-16 xl:h-20 rounded-xl lg:rounded-2xl'/>
        </div>

        <div className='mt-10 md:mt-11 xl:mt-12 w-full'>
        <Button text='VERIFY'/>
        </div>
     </Login_Forms>
    </div>
  )
}

export default Verify