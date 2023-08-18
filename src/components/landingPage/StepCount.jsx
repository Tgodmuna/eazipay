import React from "react";
import { useState } from "react";

const StepCard = ({ stepNumber, title, content, isActive }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

  return (
    <div
      className={`step-card ${isActive ? "active" : ""} mt-[7rem] ${
        isFocused ? "bg-green-500" : ""
      }}
`}
      style={{
        "--step-duration": "40000ms",
        display: "flex",
        alignItems: "center", 
        marginBottom: "20px", 
      }}>
      <svg
        className='step-line step-line-2'
        width='20' 
        height='100%' 
        viewBox='0 0 20 245' 
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          maskType: "alpha",
        }}>
        <path
          d='M10 0V245' 
          stroke='#D9EBCD' 
          strokeWidth='10' 
        />
      </svg>
      <div className='step-side md:relative md:-top-[10rem] md:-left-[3rem]'>
        <div
          className='step-no md:bg-slate-700 md:rounded-xl  md:w-20 md:h-20 md:flex md:items-center md:justify-center md:md:text-4xl md:md:font-bold'
          tabIndex='0'
          onFocus={handleFocus}
          onBlur={handleBlur}>
          {stepNumber}
        </div>
        <div className='step-line m-8'></div>
      </div>
      <div className='step-content ml-4'>
        <h3 className='md:text-3xl font-semibold'>{title}</h3>
        <p className='md:text-xl'>{content}</p>
      </div>
    </div>
  );
};



const StepsComponent = () => {
  return (
    <div className='hidden md:block'>
      <div className='steps'>
        <StepCard
          stepNumber={1}
          title='Create your free account'
          content='Click here to set up your Eazipay account.'
          isActive={true}
        />
        <StepCard
          stepNumber={2}
          title='Add Employee Data'
          content='Your employee information is 100% safe and secure.'
          isActive={false}
        />
        <StepCard
          stepNumber={3}
          title='Prepare your Transaction'
          content='Run payroll: Bulk Salaries and Compliance are done at once!'
          isActive={false}
        />
      </div>
    </div>
  );
};

export default StepsComponent;
