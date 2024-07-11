import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { userData } from '../ManageUsers/userData';
import UserPaginationMap from './UserPaginationMap';

const PaginatedItems = ({itemsPerPage}) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [userdata, setuserdata] = useState([])

    useEffect(()=>{
        setuserdata(userData)
    })


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = userdata.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(userdata.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % userdata.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <UserPaginationMap currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className='flex gap-2 md:gap-3 xl:gap-4 justify-center text-[9px] md:text-[11px] xl:text-base my-3 md:my-4 xl:my-10'
          activeClassName='bg-lGreen px-[5px] md:px-[7px] xl:px-[9px] py-[1px] text-black rounded-sm'
          previousClassName='px-[5px] rounded-sm border-[.5px] border-lGreen md:px-[7px] xl:px-[10px] '
          nextClassName='px-[5px] rounded-sm border-[.5px] border-lGreen md:px-[7px] xl:px-[10px] '
          containerClassName='px-1'
        />
      </>
    )
}

export default PaginatedItems