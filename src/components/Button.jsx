import React from 'react'

const Button = ({text,onclick}) => {
  return (
    <button className='bg-[#01ff86] text-gray-950 font-semibold w-full py-3 md:py-3 rounded text-xs lg:text-sm' onClick={onclick}>{text}</button>
  )
}

export default Button