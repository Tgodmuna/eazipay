import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className=' p-4 w-full'>
      <h1 className='text-3xl font-bold relative left-[20rem] mb-4'>Recent Searches</h1>

      <div className='flex items-center h-auto '>
        <input
          type='text'
          className='  w-[50vw] m-auto p-4 md:p-[2rem] rounded-full border focus:border-green-300 md:placeholder:break-words  md:placeholder:text-center border-gray-300 '
          placeholder='Search by employee , activities or amount'
        />
        <button className='bg-gray-200 rounded  md:p-[2.3rem] -left-[29.3rem] relative p-[1rem]'>
          <FaSearch size={18} />
        </button>
        <button className='bg-gray-200 rounded-xl  md:p-[2.3rem] relative -left-[30rem] '>
          <FaFilter size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
