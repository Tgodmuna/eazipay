import React from "react";
import { FaTimes } from "react-icons/fa";

const NavBar = ({closeSideBar}) => {
  return (
    <nav
      className={`bg-white  w-auto text-black md:hidden fixed z-50 top-[0.1rem] left-[8.9rem] -top-7  `}>
      <div className='flex justify-between items-center mb-[7rem]'>
        <img src='/Assets/eazi_logo.jpeg' alt='logo' className='w-20' />
        <span className='close-icon relative right-[2rem]' onClick={closeSideBar}>
          <FaTimes />
        </span>
      </div>
      <ul className='flex flex-col p-6 space-y-4'>
        <li className='text-xl'>Individual</li>
        <li className='text-xl'>Business</li>
      </ul>
      <ul className='flex flex-col p-6 space-y-4'>
        <li className='text-xl'>
          <a href='./'>Login</a>
        </li>
        <li className='text-xl '>
          <button className='btnStyle mt-7'>Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
