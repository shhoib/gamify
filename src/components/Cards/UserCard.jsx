import React from 'react'

const UserCard = ({color,heading,text,icon}) => {
  return (
    <div className="w-full border-t-2 md:border-t-4 xl:border-t-8 h-16 md:h-24 lg:h-28 xl:h-36 flex items-center justify-between p-2 md:p-4 xl:p-5 rounded-lg lg:rounded-xl bg-[#141c27]" style={{ borderColor: color }}>
    <div className='flex flex-col justify-between h-full'>
        <h1 className='text-white text-[10px] md:text-sm xl:text-xl'>{heading}</h1>
        <h2 className='text-[5px] md:text-[10px] xl:text-sm'>{text}</h2>
    </div>
    <div className='bg-[#242424] p-1 md:p-2 xl:p-3 rounded-md md:rounded-xl text-xs md:text-2xl xl:text-5xl' style={{color:color}}>{icon}</div>
    </div>
  )
}

export default UserCard