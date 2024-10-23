import React from 'react';
import Image from 'next/image';
import ServiceSlider from '../components/ServiceSlider'; 

const Page = () => {
  return (
    <div className='flex items-center bg-[#0C011A] h-screen overflow-hidden'>
      <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
        <h1 className='text-[50px] text-white font-semibold'>
          My Skills <span className='text-red-500'>.</span>
        </h1>
        <p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos rem esse architecto culpa tempora itaque earum, alias quam maxime quas!
        </p>
      </div>


<div className='absolute -left-12 bottom-48 rotate-12 animate-pulse hover:blur-none duration-700 ease-in-out hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 p-4 rounded-full'>
          <Image
            src="/assets/bulb.png"
            alt='bulb'
            width={300}
            height={300}
            className='w-full h-full hidden md:block opacity-90 hover:opacity-100 transition-opacity duration-500'
          />
        </div>





      <ServiceSlider />
    </div>
  );
};

export default Page;
