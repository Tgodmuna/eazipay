import React from "react";

const WelcomeSection = () => {
  return (
    <div className='flex flex-wrap   md:ml-[1vw] md:mt-[10rem]'>
      <div className='text-left text-dark-800 px-4'>
        <h2 className='text-xl mb-2 font-bold md:text-3xl font-serif text-neutral-500  capitalize'>
          Welcome abasiama{" "}
        </h2>
        <p className='text-sm md:text-xl text-gray-400 '>Pay and manage your employee in minutes</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
