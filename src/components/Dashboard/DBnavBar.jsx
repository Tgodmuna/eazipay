import React, { useState } from "react";
import {
  FaBell,
  FaAngleRight,
  FaAngleDown,
  FaUser,
  FaUserPlus,
  FaBusinessTime,
  FaUserCircle,
  FaExchangeAlt,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";

const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='relative  left-9 md:left-[78vw]'>
      <div
        className='items-center cursor-pointer p flex gap-2 md:gap-4 relative'
        onClick={toggleDropdown}>
        <span className=' w-[3rem] bg-green-900 rounded-full '>
          <img
            src='/Assets/image3.jpg'
            alt='users'
            className='object-contain w-[4rem] border-none rounded-full '
          />
        </span>
        <div className='flex flex-col   text-left'>
          <span className='font-bold text-2xl text-dark-900 capitalize'>
            user
          </span>
          <span className='text-xs font-medium -mt-1'>Admin</span>
        </div>
        <div>
          <div>{showDropdown ? <FaAngleDown /> : <FaAngleRight />}</div>{" "}
        </div>
      </div>
      <div
        className={`flex z-10 flex-col w-52 border-t border-dark-100 bg-white absolute mt-4 -right-[3rem] md:-right-1 top-14 py-2 shadow-lg text-sm ${
          showDropdown ? "" : "hidden"
        }`}>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaUser className='text-dark-600' />
          </span>
          <span>Profile</span>
          {/* Submenu for Profile */}
        </div>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaUserPlus className='text-dark-600' />
          </span>
          <span>Create New Account</span>
          {/* Submenu for Create New Account */}
        </div>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaBusinessTime className='text-dark-600' />
          </span>
          <span>Add more accounts</span>
          <div
            className='flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm'
            style={{ display: "none" }}>
            <div className='flex items-center hover:text-secondary gap-4 px-5 py-3 cursor-pointer relative'>
              <span className='w-4'>
                <FaUserCircle className='text-dark-600' />
              </span>
              <span>Business Account</span>
            </div>
            <div className='flex items-center hover:text-secondary gap-4 px-5 py-3 cursor-pointer relative'>
              <span className='w-4'>
                <FaUserCircle className='text-dark-600' />
              </span>
              <span>Personal Account</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaExchangeAlt className='text-dark-600' />
          </span>
          <span>Switch Account</span>
          {/* Submenu for Switch Account */}
        </div>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaCog className='text-dark-600' />
          </span>
          <span>Settings</span>
          {/* Submenu for Settings */}
        </div>
        <div className='flex items-center gap-4 px-5 py-3 cursor-pointer relative'>
          <span className='w-4'>
            <FaPowerOff className='text-dark-600' />
          </span>
          <span>Logout</span>
          {/* Submenu for Logout */}
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className='flex fixed top-[0vw] left-0 w-full z-10  bg-gray-100  md:flex-row md:flex-nowrap justify-start items-center p-6 md:shadow-lg '>
      <div className='w-full mx-auto items-center hidden lg:flex md:flex justify-between flex-wrap md:px-16 py-1 px-2 '>
        <ul className='list-none items-center flex'>
          <li className='relative left-5  md:left-[75vw]'>
            <span className='text-dark-700 block py-1 px-2 cursor-pointer'>
              <FaBell className='text-xl' />
            </span>
            <div
              className='flex z-10 flex-col max-h-screen md:max-h-96 bg-white absolute overflow-y-auto border-t border-dark-100 -mt-1 h-auto -right-52 md:-right-52 top-14 py-2 shadow-lg text-sm'
              style={{ width: "100vw", maxWidth: "528px", display: "none" }}>
              <div className='pt-4 px-6 shadow-md'>
                <div className='w-full flex items-center justify-between font-medium pb-2'>
                  <h4 className='text-lg sm:text-2xl'>Notifications</h4>
                </div>
              </div>
              <div className='text-center py-6 text-sm md:text-lg bg-black '>
                Nothing Here
              </div>
            </div>
          </li>

          <li className='relative'>
            <UserDropdown />
          </li>
        </ul>
      </div>

      <div className='w-full mx-auto items-center md:hidden lg:hidden flex justify-between flex-wrap md:px-16 py-1 px-2'>
        <ul className='flex gap-[8.5rem]'>
          <li className='relative flex'>
            <img
              src='/Assets/image3.jpg'
              alt='users'
              className='object-contain w-[4rem] border-none rounded-full '
            />

            <p className='capitalize text-xl text-neutral-800 md:hidden lg:hidden m-2 font-bold  '>
              hello Wasiu
            </p>
          </li>
          <li className='m-3'>
            {" "}
            <FaBell size={40} />{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
