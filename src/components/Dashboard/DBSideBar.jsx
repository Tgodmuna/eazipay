import React, { useState } from "react";
import {
  FaCogs,
  FaAngleDown,
  FaWallet,
  FaCoins,
  FaHeadphones,
  FaPeopleArrows,
  FaListOl,
  FaListAlt,
} from "react-icons/fa";

const DBS = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  return (
    <div className='bg-white md:flex fixed z-30 hidden md:flex-col justify-around -top-[2rem] w-[15vw]'>
      <div className='text-black font-semibold mb-4'>
        <img
          src='/Assets/DBsidebarLOGO.png'
          alt='eazipay logo'
          className=' md:w-[15vw] md:object-contain'
        />
      </div>
      <h2 className='md:text-2xl md:font-semibold md:text-green-950 md:font-sans md:my-10 bg-slate-100 md:p-4  '>
        DASHBOARD
      </h2>
      <hr />
      <ul className='space-y-1'>
        <li className='borderr-bborder-b-2 rounded-lg py-2 hover:bg-slate-200 '>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() => toggleMenu(1)}>
            <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
              <FaWallet size={"2rem"} color='gray' className='md:m-3' />
              wallet{" "}
              <FaAngleDown
                className={`ml-1 ${
                  openMenu === 1 ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </div>
          <ul
            className={`pl-4 space-y-1 ${
              openMenu === 1 ? "" : "hidden"
            } list-disc`}>
            <li className='text-gray-500'>View Balance</li>
            <li className='text-gray-500'>Transactions</li>
            <li className='text-gray-500'>Add Funds</li>
          </ul>
        </li>

        <li className='border-b-2 rounded-lg  py-2 hover:bg-slate-200'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() => toggleMenu(2)}>
            <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
              <FaPeopleArrows size={"2rem"} color='gray' className='md:m-3' />
              Employee management{" "}
              <FaAngleDown
                className={`ml-1 ${
                  openMenu === 2 ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </div>
          <ul
            className={`pl-4 space-y-1 ${
              openMenu === 2 ? "" : "hidden"
            } list-disc `}>
            <li className='text-gray-500'>Employee List</li>
            <li className='text-gray-500'>Add Employee</li>
            <li className='text-gray-500'>Attendance</li>
          </ul>
        </li>

        <li className='borderr-bborder-b-2 rounded-lg py-2 hover:bg-slate-200 '>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() => toggleMenu(3)}>
            <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
              <FaListOl size={"2rem"} color='gray' className='md:m-3' />
              payroll{" "}
              <FaAngleDown
                className={`ml-1 ${
                  openMenu === 3 ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </div>
          <ul
            className={`pl-4 space-y-1 ${
              openMenu === 3 ? "" : "hidden"
            } list-disc`}>
            <li className='text-gray-500'>Item1</li>
            <li className='text-gray-500'>Item2</li>
            <li className='text-gray-500'>Item3</li>
            <li className='text-gray-500'>Item4</li>
            <li className='text-gray-500'>Item5</li>
            <li className='text-gray-500'>Item6</li>
          </ul>
        </li>

        <li className='border-b-2 rounded-lg  py-2 hover:bg-slate-200'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() => toggleMenu(4)}>
            <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
              <FaListAlt size={"2rem"} color='gray' className='md:m-3' />
              compliance{" "}
              <FaAngleDown
                className={`ml-1 ${
                  openMenu === 4 ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </div>
          <ul
            className={`pl-4 space-y-1 ${
              openMenu === 4 ? "" : "hidden"
            } list-disc`}>
            <li className='text-gray-500'>Item1</li>
            <li className='text-gray-500'>Item2</li>
            <li className='text-gray-500'>Item3</li>
            <li className='text-gray-500'>Item4</li>
            <li className='text-gray-500'>Item5</li>
            <li className='text-gray-500'>Item6</li>
          </ul>
        </li>

        <li className='border-b-2 rounded-lg  py-2 hover:bg-slate-200'>
          <div
            className='flex items-center justify-between cursor-pointer'
            onClick={() => toggleMenu(5)}>
            <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
              <FaCoins size={"2rem"} color='gray' className='md:m-3' />
              quick loan{" "}
              <FaAngleDown
                className={`ml-1 ${
                  openMenu === 5 ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </div>
          <ul
            className={`pl-4 space-y-1 ${
              openMenu === 5 ? "" : "hidden"
            } list-disc`}>
            <li className='text-gray-500'>Item1</li>
            <li className='text-gray-500'>Item2</li>
            <li className='text-gray-500'>Item3</li>
            <li className='text-gray-500'>Item4</li>
            <li className='text-gray-500'>Item5</li>
            <li className='text-gray-500'>Item6</li>
          </ul>
        </li>
        {/* Add other menu items here */}
      </ul>
      <div className='mt-6'>
        <ul className='flex flex-col py-8'>
          <li className='flex  border-b-2 rounded-lg  p-4 hover:bg-slate-200 capitalize'>
            <FaHeadphones size={"2rem"} color='gray' className='' />
            <span className='text-xl font-sans text-slate-500 font-light mx-6 m-auto'>
              support
            </span>
          </li>

          <li className='border-b-2 rounded-lg  py-2 hover:bg-slate-200'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => toggleMenu(6)}>
              <span className='flex items-center capitalize font-sans font-light text-xl text-slate-500 '>
                <FaCogs size={"2rem"} color='gray' className='md:m-5' />
                settings{" "}
                <FaAngleDown
                  className={`ml-1 ${
                    openMenu === 6 ? "transform rotate-180" : ""
                  }`}
                />
              </span>
            </div>
            <ul
              className={`pl-4 space-y-1 ${
                openMenu === 6 ? "" : "hidden"
              } list-disc`}>
              <li className='text-gray-500'>Item1</li>
              <li className='text-gray-500'>Item2</li>
              <li className='text-gray-500'>Item3</li>
              <li className='text-gray-500'>Item4</li>
              <li className='text-gray-500'>Item5</li>
              <li className='text-gray-500'>Item6</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DBS;
