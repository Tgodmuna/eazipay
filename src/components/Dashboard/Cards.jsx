import React from "react";

const DashboardCard = () => {
  return (
    <div className='bg-slate-300 hidden md:flex flex-col w-[55vw] m-auto '>
      <h1 className='text-3xl text-neutral-600 capitalize'>
        wednesday, november 19
      </h1>
      <div className='bg-gray-200 md:rounded-lg shadow-md md:p-6 md:flex md:flex-wrap justify-between items-center my-[2rem]  '>
        {/* Item 1 */}
        <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
          <div className='md:w-12 h-12 rounded-full bg-slate-900 mr-3'></div>
          <div>
            <div className='text-xl'>Payroll</div>
            <div className='font-bold text-xl'>User's Name</div>
          </div>
        </div>

        {/* Item 2 */}
        <div className='text-center w-full md:w-1/4 mb-4 md:mb-0'>
          <div className='font-bold text-2xl w-full mb-4'>Activity</div>
          <div className='text-xl'>Date</div>
        </div>

        {/* Item 3 */}
        <div className='text-center w-full md:w-1/4 mb-4 md:mb-0'>
          <div className='font-bold text-2xl mb-4'>Employee</div>
          <div className='text-xl'>Total Number</div>
        </div>

        {/* Item 4 */}
        <div className='text-center w-full md:w-1/4'>
          <div className='font-bold text-2xl mb-4'>Time</div>
          <div className='text-xl'>Time In</div>
        </div>
          </div>
          
            <h1 className='text-3xl text-neutral-600 capitalize'>
        wednesday, november 19
      </h1>
      <div className='bg-gray-200 md:rounded-lg shadow-md md:p-6 md:flex md:flex-wrap justify-between items-center my-[2rem]  '>
        {/* Item 1 */}
        <div className='flex items-center w-full md:w-auto mb-4 md:mb-0'>
          <div className='md:w-12 h-12 rounded-full bg-slate-900 mr-3'></div>
          <div>
            <div className='text-xl'>Payroll</div>
            <div className='font-bold text-xl'>User's Name</div>
          </div>
        </div>

        {/* Item 2 */}
        <div className='text-center w-full md:w-1/4 mb-4 md:mb-0'>
          <div className='font-bold text-2xl w-full mb-4'>Activity</div>
          <div className='text-xl'>Date</div>
        </div>

        {/* Item 3 */}
        <div className='text-center w-full md:w-1/4 mb-4 md:mb-0'>
          <div className='font-bold text-2xl mb-4'>Employee</div>
          <div className='text-xl'>Total Number</div>
        </div>

        {/* Item 4 */}
        <div className='text-center w-full md:w-1/4'>
          <div className='font-bold text-2xl mb-4'>Time</div>
          <div className='text-xl'>Time In</div>
        </div>
          </div>
          
    </div>
  );
};

export default DashboardCard;
