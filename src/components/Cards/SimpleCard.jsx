import React from 'react'

const SimpleCard = ({text,color}) => {
  return (
    <div className='p-2 md:p-4 xl:p-5 rounded-lg lg:rounded-xl bg-[#141c27] border-t-2 md:border-t-4 xl:border-t-8 flex flex-col justify-center items-center gap-3 md:gap-5 xl:gap-7 ' style={{ borderColor: color }}>
     <div className='flex flex-col items-center justify-center'>
       <h2 className='text-[8px] md:text-xs lg:text-sm xl:text-xl text-white'>1,02,999.31</h2>
       <h3 className='text-[5px] md:text-[8px] xl:text-[13px] md:mt-[3px]'>Total {text}</h3>
     </div>
     <div className='flex flex-col items-center justify-center'>
       <h2 className='text-[8px] md:text-xs lg:text-sm xl:text-xl text-white'>1,02,9.31</h2>
       <h3 className='text-[5px] md:text-[8px] xl:text-[13px] md:mt-[3px]'>Total {text} Charges</h3>
     </div>
     
    </div>
  )
}

export default SimpleCard