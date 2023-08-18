import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const Section2Mobile = () => {
  return (
    <div className='bg-cover' style={{ backgroundImage: "url('./audience')" }}>
      <div className='bg-milky p-6 md:p-12 flex flex-col'>
        <div className='text-center mb-6 lg:mb-12'>
          <h2 className='text-4xl md:text-5xl mb-4 text-green-900'>
            For Individuals and Businesses
          </h2>
          <p className='text-lg md:text-xl font-sans text-slate-400'>
            Join 200+ businesses using Eazipay's easy solution.
          </p>
        </div>

        <div className='cards gap-6'>
          {/* card 1 */}
          <div className='card bg-milky p-6 rounded-2xl shadow-md border-2 border-gray-300'>
            <h3 className='text-xl md:text-2xl font-bold'>
              Tamper-proof Payroll for Life
            </h3>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Your staff payroll history is kept in one place forever.
            </p>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              No more excel sheet or manual records.
            </p>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Download your payroll history anytime you need it.
            </p>
          </div>
          {/* card2 */}
          <div className='card bg-milky p-6 rounded-2xl shadow-md border-2 border-gray-300'>
            <h3 className='text-xl md:text-2xl font-bold'>
              All Payroll, Anytime Anywhere
            </h3>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Wherever you are, Eazipay has got you covered on ALL your Payroll
              tasks.
            </p>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay{" "}
              <br />
              handles all your compliances in one place and easily, in seconds!
            </p>
          </div>
          {/* card 3 */}
          <div className='card bg-milky p-6 rounded-2xl shadow-md border-2 border-gray-300'>
            <h3 className='text-xl md:text-2xl font-bold'>
              Payroll in Seconds
            </h3>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Never again will you spend more than 2 minutes on payroll.
            </p>
            <p className='p-2 flex items-start'>
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Just click on your staff and bulk-pay them at once.
            </p>
            <p className='p-2 flex items-start'>
              {" "}
              <HiCheckCircle className='text-green-500 mr-2 mt-1' />
              Payment is done permanently.
            </p>
          </div>
        </div>
        <div className='mt-6 md:mt-10 max-w-md mx-auto'>
          <p className='text-center text-lg md:text-xl p-4 text-slate-500'>
            We are happy to answer your queries. Please, reach us at{" "}
            <a
              href='mailto:hi@myeazipay.com'
              className='text-red-600 hover:underline'>
              hi@myeazipay.com
            </a>{" "}
            and expect our response shortly after.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2Mobile;
