import React from 'react'

const DepositCard = ({color,heading,text}) => {
  return (
    <div className="w-full border-t-2 md:border-t-4 xl:border-t-8 flex items-center justify-between p-2 md:p-4 xl:p-5 rounded-lg lg:rounded-xl bg-[#141c27]" style={{ borderColor: color }}>
    <div className='flex flex-col justify-between h-full gap-1 md:gap-2 xl:gap-3'>
        <h1 className='text-white text-[10px] md:text-sm xl:text-2xl'>{heading}</h1>
        <h2 className='text-[5px] md:text-[10px] xl:text-sm'>{text}</h2>
    </div>
    </div>
  )
}

export default DepositCard