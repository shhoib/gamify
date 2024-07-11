import React from 'react'

const LocationNav = ({text,RightComponent}) => {
  return (
    <div className='flex justify-between items-center bg-Cbg rounded-md xl:rounded-lg px-3 md:px-6 lg:px-7 xl:px-8 h-7 md:h-11 lg:h-12 xl:h-20'>
     <div className='text-dGreen text-[7px] md:text-xs lg:text-sm xl:text-lg h-full border-t-[1px] border-t-lGreen'> <h1 className='mt-1 md:mt-2 xl:mt-3'>{text}</h1></div>
     {
      RightComponent && 
       <div> <RightComponent/> </div>
     }
    </div>
  )
}

export default LocationNav