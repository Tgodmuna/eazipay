import React from "react";

const EazipayPromotion = () => {
  return (
    <div className=' main-container bg-red-200  md:grid md:grid-cols-2 md:items-center lg:grid lg:grid-cols-2 lg:items-center'>
      <div className=' md:flex md:flex-col md:justify-center md:items-center md:p-[6rem]  text-center mb-10 lg:mb-0 lg:pr-10 lg:text-left'>
        <h2 className='heading text-3xl text-black font-bold font-sans lg:capitalize md:text-7xl md:p-[5rem]  '>
          Free forever for your
          <br /> <span className='text-red-500'>salary payments</span>
        </h2>
        <p className='lg:hidden mt-4 text-xl m '>Get started in 3 simple steps.</p>
        <div className='hidden lg:block mt-9'>
          <p className='mb-3 text-left text-xl font-medium'>
            Subscribe to the Eazilife today
          </p>
          <div className=' mt-5 flex'>
            <div className='inline-flex gap-4'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://play.google.com'
                className='inline-block mx-4 my-4'>
                <img
                  className='w-[17rem]'
                  src=' /Assets/google-store.png'
                  alt='Google Play Store'
                />
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://apps.apple.com'
                className='inline-block mx-4 my-4'>
                <img
                  className='w-[17rem]'
                  src='/Assets/apple-store.png'
                  alt='Apple store'
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center media'>
        <img src='/Assets/image2.png' alt='Eazipay Guy' className="object-contain w-auto " />
      </div>

      <div className='lg:hidden text-center'>
        <p className='mb-2 mt-5 text-center font-medium lg:text-xl'>
          Download the Eazipay App
        </p>
        <div className='inline-flex gap-4'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://play.google.com/store/apps/details?id=com.myeazipay.business'
            className='inline-block  mx-4 my-4'>
            <img src='/Assets/google-store.png' alt='Google Play Store' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://apps.apple.com/us/app/eazipay-business/id6446281426'
            className='inline-block mx-4 my-4'>
            <img src='/Assets/apple-store.png' alt='Apple App Store' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EazipayPromotion;
