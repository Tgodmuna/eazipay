import React from "react";
import Section2Mobile from "./Section2Mobile";
import { useState, useEffect } from "react";

const Section2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 1021);
    };
    checkWindowSize(); // Attach event listener
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (isMobile) {
    return <Section2Mobile />;
  }

  return (
    <div className='' style={{ backgroundImage: "url('./audience')" }}>
      <div className=' p-6 lg:p-12 flex flex-col m-auto relative '>
        <div className='text-center mb-6 lg:mb-12'>
          <h2
            style={{ color: "rgb(23,74,63)" }}
            className='text-7xl mb-4 text-green-900'>
            For Individuals and Businesses
          </h2>
          <p className='text-xl font-sans text-slate-400'>
            Join 200+ businesses using Eazipay's easy solution.
          </p>
        </div>

        <div className='cards gap-6 flex flex-col lg:flex-row left-[10rem] relative '>
          {/* card 1 */}
          <div
            style={{ backgroundColor: "rgb(23,74,63)" }}
            className='card-1 left-[10rem] z-10 relative text-slate-200 bg-white p-10 rounded-2xl transition-transform  duration-1000 group hover:-translate-x-[13.5rem]  shadow-md border-2 border-gray-300'>
            <h3 className='text-2xl font-bold'>
              Tamper-proof Payroll for Life
            </h3>
            <p className='p-3'>
              Your staff payroll history is kept in one place forever.
            </p>
            <p className='p-3'>No more excel sheet or manual records.</p>
            <p className='p-3'>
              Download your payroll history anytime you need it.
            </p>
          </div>
          {/* card2 */}
          <div
            style={{ backgroundColor: "rgb(23,74,63)" }}
            className='text-slate-200 card-2 relative right-[6rem] z-30 bg-white p-10 rounded-2xl  shadow-md border-2 border-gray-300'>
            <h3 className='text-2xl font-bold'>
              All Payroll, Anytime Anywhere
            </h3>
            <p className='p-3'>
              Wherever you are, Eazipay has got you covered on ALL your Payroll
              tasks.
            </p>
            <p className='p-3 block'>
              Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay{" "}
              <br />
              handles all your compliances in one place and easily, in seconds!
            </p>
          </div>
          {/* card 3 */}
          <div
            style={{ backgroundColor: "rgb(23,74,63)" }}
            className='text-slate-200 card-3 relative right-[24rem] z-40 bg-white p-10 rounded-2xl transition-transform duration-1000 group hover:translate-x-[15rem]  shadow-md border-2 border-gray-300'>
            <h3 className='text-2xl font-bold'>Payroll in Seconds</h3>
            <p className='p-3'>
              Never again will you spend more than 2 minutes on payroll.
            </p>
            <p className='p-3'>
              Just click on your staff and bulk-pay them at once.
            </p>
            <p className='p-3'>Payment is done permanently.</p>
          </div>
        </div>
        <div className='mt-6 lg:mt-10 w-[40rem] lg:max-w-xl mx-auto'>
          <p className='text-center text-2xl p-5 text-slate-500'>
            We are happy to answer your queries. Please, reach us at{" "}
            <a
              href='mailto:hi@myeazipay.com'
              className='text-red-600 hover:underline m-3'>
              hi@myeazipay.com
            </a>
            and expect our response shortly after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
