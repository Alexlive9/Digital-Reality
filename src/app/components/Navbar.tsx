import React from 'react';
import Image from 'next/image'; 
import { Socials } from './constants'; 

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5'>
      <h1 className='text-white text-[40px]'>
    Avicii <span className='font-thin'>Tim Bergling</span>
        <span className='text-red-500'></span>
      </h1>

      <div className='flex flex-row gap-5'>
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name} 
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
