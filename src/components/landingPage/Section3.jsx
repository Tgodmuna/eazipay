import React from "react";
import "../../Styles/Section3.css";
import StepsComponent from "./StepCount";

const Section3 = () => {
  return (
    <div className='-mb-[48rem] flex flex-col justify-between p-5 md:p-8 md:flex-col md:flex md:justify-between gap-5 items-center'>
      <div className='flex flex-col space-y-4'>
        <h1 className='text-4xl capitalize text-green-950 font-extrabold md:text-8xl md:m-6 md:font-serif md:font-extrabold '>
          How Eazy Works
        </h1>
        <p className='text-2xl capitalize text-gray-500 md:text-center md:text-3xl'>
          Get started in 3 simple steps
        </p>
      </div>

      <div className='flex flex-col md:flex md:flex-row px-6 md:px-8 mt-4  md:mt-8 md:gap-80  '>
        <div
          id='how_itWorks'
          className='flex flex-col md:flex-col  md:space-x-8'>
          <div
            id='img_holder'
            className='imageHolder mx-auto md:z-10  rounded-xl'>
            <img
              src='/Assets/onbrdng.gif'
              alt='onBord GIF'
              className='h-80 md:h-[55rem] mx-auto md:mx-auto md:object-contain md:w-[30rem] md:rounded-3xl object-contain'
            />
          </div>

          <div class=' h-screen hidden md:flex md:relative md:-top-[48rem] '>
            <div class='flex justify-center items-center relative w-[43rem] h-[43rem] rounded-full bg-gray-300'>
              <div class='flex justify-center items-center relative w-[39rem] h-[39rem] rounded-full bg-green-900'>
                <div class='flex justify-center items-center relative w-[25rem] h-[25rem] rounded-full bg-gay-500'></div>
              </div>
            </div>
          </div>
          <div className='mt-6 md:mt-0 flex flex-col md:hidden'>
            <div className='flex items-center mb-4'>
              <h2 className='text-4xl text-green-950 font-mono font-extrabold'>
                03
              </h2>
              <p className='ml-2 capitalize font-extrabold text-3xl text-green-950'>
                Prepare your <br /> transaction
              </p>
            </div>
            <h3 className='break-words text-gray-500 capitalize'>
              Run payroll. Bulk Service and Compliance are <br /> done at once
            </h3>
          </div>
        </div>

        <div class=''>
          <StepsComponent />
        </div>
      </div>
    </div>
  );
};

export default Section3;
