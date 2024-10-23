import React from 'react';
import ProjectSlider from '../components/ProjectSlider'; 
import Image from 'next/image'; 

const Page = () => {
  return (
    <div className='relative flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#15032c]'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-[50px] text-white font-semibold'>
          My Work <span className='text-red-500'>.</span>
        </h1>
        <p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos rem esse architecto culpa tempora itaque earum, alias quam maxime quas!
        </p>

        <div className='absolute -left-14 bottom-48 rotate-12 animate-pulse hover:blur-md hover:rotate-0 hover:scale-125 duration-1000 ease-out transition-all'> 
  <Image
    src="/assets/bulb.png"
    alt='bulb'
    width={300}
    height={300}
    className='w-full h-full hidden md:block filter hover:drop-shadow-lg hover:brightness-125'
  />
</div>




        
      </div>

      <ProjectSlider />
    </div>
  );
};

export default Page;
