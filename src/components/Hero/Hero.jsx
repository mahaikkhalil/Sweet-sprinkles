import React from 'react';
import donut2 from "../../assets/donut2.jpg"; 
import s1 from "../../assets/s1.jpg";

const Hero = () => {
  return (
    <div className="relative bg-blue-300 h-screen flex items-center justify-center overflow-hidden">

      <img 
        src={s1} 
        alt="foodie"  
        className="absolute inset-0 object-cover w-full h-full opacity-60"
      />

     


      <div className="absolute z-20 text-center text-white font-bold animate-bounce duration-1000 sm:text-lg md:text-2xl lg:text-4xl max-w-2xl">
        <h1 className=" text-neutral-950 text-[24px] md:text-[30px] lg:text-[40px]">
          The Best Doughnuts You Have Ever Tasted!
        </h1>
        <p className="  text-violet-950 text-sm md:text-base lg:text-lg mt-2">
          Discover our wide range of flavors and experience sweetness like never before.
        </p>
      </div>
    </div>
  );
};

export default Hero;

  