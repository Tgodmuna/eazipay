import React from 'react'

function DBLeftcard() {
  return (
    <>
      <div className='w-full flex flex-row lg:flex-col lg:w-10/12 mx-auto border-none shadow-lg rounded-2xl overflow-hidden bg-white'>
        <div className='hidden lg:block text-primary text-center p-3 bg-mint font-bold text-base shadow-md'>
          Next Payroll
        </div>
        <div className='w-full bg-white border-r lg:border-b lg:border-r-0 border-outlineGray flex flex-col gap-2 items-center justify-center px-4 sm:px-6 lg:px-4 py-6'>
          <h6 className='font-medium lg:hidden'>Next Payroll</h6>
          <div className='flex items-center justify-center gap-2'>
            <img src='/img/calendar.ec830944.svg' alt='' />
            <span className='text-sm'>Thursday</span>
          </div>
          <h4 className='text-primary font-bold text-sm md:text-lg'>
            undefined/2023-08-31/undefined
          </h4>
        </div>
        <div className='w-full bg-white border-l lg:border-t lg:border-l-0 border-secondary flex flex-col gap-2 items-start lg:items-center justify-center px-4 sm:px-6 lg:px-4 py-6'>
          <h4>Total Employee</h4>
          <h3 className='text-dark-800 text-3xl text-left font-bold'>0</h3>
          <div className='w-full flex flex-col'>
            <div className='border border-dark-400 p-1 w-full flex'>
              {/* Content */}
            </div>
            <div className='w-full flex justify-between text-left font-bold text-xs'>
              <div className='flex flex-col'>
                <span>Male</span>
                <span>0</span>
              </div>
              <div className='flex flex-col'>
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

export default DBLeftcard