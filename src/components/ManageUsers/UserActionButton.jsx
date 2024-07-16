import React from 'react';

const UserActionButton = ({ data }) => {
  return (
    <button className="rounded-md block items-center w-full text-black py-2 md:py-3 lg:py-4 text-[8px] md:text-[10px] lg:text-xs xl:text-sm" style={{ backgroundColor: data.bgColor }}>
      {data.text}
    </button>
  );
}

export default UserActionButton;
