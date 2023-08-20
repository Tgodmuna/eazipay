import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";
import Section2 from "./Section2";
import Section3 from "./Section3";
import EazipayPromotion from "./Section4";

const HomePage = () => {
  const [isMobile, setIsmobile] = useState(false);
  const handleMobile = () => {
    if (isMobile) {
      closeSidebar();
    } else {
      setIsmobile(true); // Open the sidebar if it's closed
    }
  };
  const closeSidebar = () => {
    setIsmobile(false);
  };

  return (
    <>
      <section1
        id='hero-section'
        className='flex flex-col md:flex md:flex-col md:bg-cover md:bg-center md:w-full md:h-full  md:object-contain'
        style={{
          backgroundImage: 'url("/Assets/BGImage.png")',
        }}>
        <nav className='flex justify-between md:w-full p-4 my-5 '>
          <div className='flex gap-5 md:relative md:left-[13rem] '>
            <span className=''>
              <img
                src='/Assets/eazi_logo.jpeg'
                alt='logo'
                className='object-contain '
              />
            </span>
            <ul className=' flex-row space-x-4 capitalize text-xl hidden md:flex'>
              <li>indiviual</li>
              <li>business</li>
            </ul>
            <span
              className='relative w-5 m-auto md:hidden -top-1 left-[12rem]'
              onClick={handleMobile}>
              {isMobile ? <FaTimes className='cursor-pointer ' /> : <FaBars />}
            </span>
          </div>
          {isMobile && <MobileNavBar closeSideBar={closeSidebar} />}
          <div className='md:space-x-4 md:relative md:flex md:left-[-19rem] hidden'>
            <button
              className='px-[5rem] py-[0.5rem] bg-transparent border border-green-900 text-gray-400 rounded-3xl   uppercase'
              style={{
                backgroundColor: "rgb(255,254,255)",
              }}>
              login
            </button>
            <button
              className='btnStyle'
              style={{
                backgroundColor: "rgb(17, 69, 59)",
              }}>
              register
            </button>
          </div>
        </nav>

        <div className='flex flex-row justify-between my-[5rem]'>
          <div id='left' className='m-auto'>
            <div class=' md:ml-[12rem] flex flex-col items-center md:block md:text-left'>
              <h1 class='md:text-6xl text-center md:font-extrabold p-6 mb-5 text-4xl font-bold m-auto'>
                <span style={{ color: "rgb(41,42,41)" }}>Run your</span>
                <span className='mx-4 ' style={{ color: "rgb(17,69,59)" }}>
                  payroll
                </span>
                <br />
                <span className='mx-4' style={{ color: "rgb(180,165,114)" }}>
                  easily
                </span>
                in
                <span className='mx-4' style={{ color: "rgb(234,78,75)" }}>
                  seconds
                </span>
              </h1>
              <p class=' md:block relative md:left-14  p-4 text-xl m-auto md:w-[40rem] '>
                We’ve built an all-inclusive simple solution for individual and
                businesses to manage staff, pay salaries, bills, and relevant
                taxes all at once.
              </p>
              <button
                className='p-4 px-8 rounded-3xl text-slate-100 md:relative md:left-[4.5rem] '
                style={{
                  backgroundColor: "rgb(17, 69, 59)",
                }}>
                <a href='/' class=''>
                  Start Using Free, Forever
                </a>
              </button>
              <div class='relative md:left-16  mt-8 md:mt-12'>
                <p class='mb-6 m-auto text-black font-medium text-xl'>
                  Download the Eazipay App
                </p>
                <div class='inline-flex gap-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='/'
                    class='inline-block '>
                    <img
                      alt='goo'
                      src='/Assets/google-store.png'
                      className='w-[10rem] rounded-lg object-contain'
                    />
                  </a>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='/'
                    class='inline-block'>
                    <img
                      alt='apple'
                      src='/Assets/apple-store.png'
                      className='w-[10rem] rounded-lg object-contain'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id='right' className='hidden md:flex'>
            <img
              src='Assets/hero-media.png'
              alt='hero_desktop'
              className='max-w-4xl object-contain '
            />
          </div>
        </div>
      </section1>
      <Section2 />
      <Section3 />
      <EazipayPromotion />
    </>
  );
};

export default HomePage;
