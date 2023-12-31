import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaCheckCircle,
  FaMoneyBillWave,
  FaBalanceScale,
} from "react-icons/fa";
import WelcomeSection from "./Welcome";
import DBLeftcard from "./DBLeftcard";

const FinancialDashboard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className='w-full lg:w-9/12 mb-12 lg:mb-3 m-auto mt-[7rem] my-2 px-2 md:px-4 flex flex-row md:relative md:left-[5rem] gap-5 '>
      <div className='w-full flex flex-col md:mt-0 mt-[2.5rem] justify-center '>
        <WelcomeSection />
        <div className=' w-full bg-green-950 md:p-[3rem] p-9 px-3  rounded-2xl flex justify-between items-center'>
          <div className='text-left'>
            <span className='font-medium  text-white md:text-3xl '>
              Wallet Balance
            </span>
            <div className='flex items-center pt-2 gap-x-3'>
              <span className='font-bold text-xl sm:text-3xl text-white'>
                {balanceVisible ? "12,000,000,000" : "******"}
              </span>
              <span
                className='cursor-pointer'
                onClick={toggleBalanceVisibility}>
                {balanceVisible ? (
                  <FaEyeSlash size={20} className='-mt-3' />
                ) : (
                  <FaEye size={20} className='-mt-3' />
                )}
              </span>
            </div>
          </div>
          <span className='relative'>
            <button className='focus:outline-none relative px-7 py-4 text-base font-medium text-white bg-slate-400 hover:bg-slate-500 whitespace-nowrap rounded-full'>
              <span className='text-sm  sm:text-sm '>Fund Wallet</span>
            </button>
          </span>
        </div>

        <div className='hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 my-[2rem] text-grey'>
          {/* Add Employee */}
          <div className='bg-slate-100 hover:border-[3px] hover:border-green-300  hover:bg-gray-200 rounded-xl sm:rounded-2xl cursor-pointer w-full px-2 py-2 sm:px-4 sm:py-4 shadow-xl text-sm lg:px-[1rem]  mx-auto flex flex-col gap-2 md:gap-4 items-center lg:justify-center'>
            <div className='p-2 md:p-3 rounded-lg flex flex-col md:flex-row items-center justify-center'>
              <FaUser
                size={40}
                color='rgb(248,183,182)'
                className='w-9 md:w-auto'
                alt='Add Employee'
              />
            </div>
            <span className='font-medium capitalize text-xs sm:text-sm text-left md:text-sm'>
              Add Employee
            </span>
          </div>
          {/* Other actions */}
          <ActionCard
            icon={
              <FaCheckCircle
                color='rgb(224,248,234)'
                size={40}
                className='w-9 md:w-auto  '
              />
            }
            title='Pay Compliance'
          />
          <ActionCard
            icon={
              <FaMoneyBillWave
                color='rgb(240,217,235)'
                size={40}
                className='w-9 md:w-auto'
              />
            }
            title='Pay Salary'
          />
          <ActionCard
            icon={
              <FaBalanceScale
                color='rgb(237,245,255)'
                size={40}
                className='w-9 md:w-auto'
              />
            }
            title='Quick Loans'
          />
        </div>
      </div>
      <DBLeftcard />
    </div>
  );
};

const ActionCard = ({ icon, title }) => {
  return (
    <div className='bg-slate-100 hover:border-[3px] hover:border-green-300 hover:bg-gray-200 rounded-xl sm:rounded-2xl cursor-pointer w-full px-2 py-2 sm:px-2 sm:py-4 shadow-xl text-sm md:px-7 md:py-6 mx-auto flex flex-col gap-2 md:gap-4 items-center lg:justify-center'>
      <div className='p-2 md:p-3 rounded-lg flex flex-col md:flex-row items-center justify-center'>
        {icon}
      </div>
      <span className='font-medium capitalize text-xs sm:text-sm text-left md:text-sm'>
        {title}
      </span>
    </div>
  );
};

export default FinancialDashboard;
