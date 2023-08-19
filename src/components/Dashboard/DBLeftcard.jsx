import React from "react";
import {FaCalendarWeek } from "react-icons/fa";

function DBLeftcard() {
  return (
    <>
      <div className='  relative -bottom-[12rem] mt-8 h-[18vw] md:w-[14vw] md:flex md:flex-col md:mx-auto md:border border-slate-300 md:shadow-lg md:rounded-[2rem]  hidden md:overflow-hidden '>
        <div className='hidden lg:block text-primary text-center p-3 bg-mint font-bold text-base shadow-md bg-[rgb(217,235,205)]'>
          Next Payroll
        </div>
        <div className='h-full  w-full bg-white border-r lg:border-b lg:border-r-0 border-outlineGray flex flex-col gap-2 items-center justify-center px-4 sm:px-6 lg:px-4 py-6'>
          <h6 className='font-medium lg:hidden'>Next Payroll</h6>
          <div className='flex  items-center justify-center gap-2'>
            <FaCalendarWeek size={30} />
            <span className='text-sm'>Thursday</span>
          </div>
          <h4 className='text-primary font-bold text-sm md:text-lg'>
            2023-08-31
          </h4>
        </div>

        <div className=' h-full  w-full bg-white border-l lg:border-t lg:border-l-0 border-secondary flex flex-col gap-2 items-start lg:items-center justify-center px-4 sm:px-6 lg:px-4 py-6'>
          <h4 className='relative right-[2rem] font-serif text-gray-400 text-xl '>
            Total Employee
          </h4>
          <h3 className='relative right-[5rem] text-dark-800 text-3xl text-left font-bold'>
            64
          </h3>
          <div className='w-full flex flex-col'>
            <div className=' border-neutral-900   p-2 w-full flex'>
              <span className=' bg-green-700 border-neutral-900 p-1 w-[50%]'></span>
              <span className=' bg-red-400 border-neutral-900 p-1 w-[50%]'></span>{" "}
            </div>
            <div className='w-full flex justify-between text-left font-bold text-xs'>
              <div className=' text-gray-400 flex flex-col'>
                <span>Male</span>
                <span>0</span>
              </div>
              <div className='text-gray-400 flex flex-col'>
                <span>Female</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DBLeftcard;
