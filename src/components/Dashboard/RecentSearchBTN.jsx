import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='w-full lg:w-9/12 mb-12 lg:mb-3 m-auto p-4 flex flex-col max-w-full  md:flex md:flex-col md:w-full'>
      <h1 className='text-3xl font-bold relative left-[7rem] mb-4'>
        Recent Searches
      </h1>

      <div className='flex items-center justify-center  w-full '>
        <input
          type='text'
          className=' p-4 md:p-[2rem] rounded-full border focus:border-green-300   md:placeholder:text-center border-gray-300 w-full lg:w-9/12 mb-12 lg:mb-3 m-auto '
          placeholder='Search by employee , activities or amount'
        />
        <button className='bg-gray-200 md:p-[2rem] border md:rounded-xld relative md:right-[10rem] md:bottom-[5px] right-[2rem] p-[13px] bottom-6  '>
          <FaSearch size={28} />
        </button>
        <button className='bg-gray-200 md:p-8 border md:rounded-xld relative md:right-[10rem]  md:bottom-[5px] right-[2rem] p-[13px] bottom-6   '>
          <FaFilter size={28} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
