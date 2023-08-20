import React from "react";
import { useState,useRef,useEffect } from "react";

const Form1 = () => {
  const [IsCompany, SetIsCompany] = useState(false);

  const ShowCompany = () => {
    SetIsCompany(true);
  };
  const ShowIndividual = () => {
    SetIsCompany(false);
  };
  const SwitchBtnREF = useRef(null);
  useEffect(() => {
    SwitchBtnREF.current.focus()
})
  return (
    <>
      <div className='flex p-4 gap-3 flex-col bg-[rgb(255,255,255)] w-full border-[5px] border-[rgb(238,239,238)] rounded-'>
        <div className='pt-[1rem] mt-4 text-center text-[35px]  font-serif text-[#11453b] font-bold '>
          <h2 className='heading level-2 mb-6'>
            Get an Exclusive <br /> Demo of Eazipay{" "}
          </h2>
          <p className='text-summary hidden lg:block'>
            Our greatest priority is to put you and your business first. Let’s
            show you how we can help.{" "}
          </p>
        </div>

        <div className='m-[0.5rem] flex flex-col p-[1rem] w-full'>
          <p className='text-2xl text-[rgb(81,82,81)] text-center font-bold font-serif    '>
            First things first
          </p>
          <p className='text-[17px] p-5 text-center font-serif text-neutral-500  '>
            We want to serve you better. Tell us a bit about yourself or company
          </p>
        </div>
        {/* Type switches */}
        <div className=' f mb-5 flex gap-3 border-[3px] border-[rgb(238,239,238)] rounded-3xl  w-full p-2'>
          <button
            ref={SwitchBtnREF}
            onClick={ShowIndividual}
            className=' w-[50vw] focus:bg-[#11453b]  p-2 h-[50px] bg-slate-300 text-xl text-neutral-500   text-center   rounded-xl '>
            Individual
          </button>
          <button
            onClick={ShowCompany}
            className=' focus:bg-[#11453b] active:bg-[#11453b]  w-[50vw]  p-2 h-[50px] bg-slate-300 text-xl text-neutral-500   text-center   rounded-xl '>
            company
          </button>
        </div>
        {/* inputs */}
        <form action='' className='w-full m-auto p-5 flex flex-col gap-5 '>
          <input
            type='text'
            name='firstName'
            id='fn'
            placeholder='First Name'
            className='border-[2px] w-full p-4 border-slate-300  px-[1rem] py-[0.8rem] rounded-3xl placeholder:text-xl '
          />
          <input
            type='text'
            name='second Name'
            id='sn'
            placeholder='Last Name'
            className='border-[2px] w-full p-4 border-slate-300  px-[1rem] py-[0.8rem] rounded-3xl placeholder:text-xl '
          />
          <input
            type='email'
            name='firstName'
            id='email'
            placeholder='Email'
            className='border-[2px] w-full p-4 border-slate-300  px-[1rem] py-[0.8rem] rounded-3xl placeholder:text-xl '
          />
          {IsCompany ? (
            <>
              {" "}
              <input
                type='text'
                name='job title'
                id='job'
                placeholder='Job Title'
                className=' border-[2px] w-full p-4 border-slate-300  px-[1rem] py-[0.8rem] rounded-3xl placeholder:text-xl '
              />
              <input
                type='text'
                name='Company name'
                id='companyN'
                placeholder='Company size'
                className='border-[2px] w-full p-4 border-slate-300  px-[1rem] py-[0.8rem] rounded-3xl placeholder:text-xl '
              />
            </>
          ) : null}
          <button className=' p-3 h-40px rounded-full text-gray-50 mt-4 text-xl capitalize bg-[#11453b] '>
            <a href='jhjk'> Request demo</a>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form1;
