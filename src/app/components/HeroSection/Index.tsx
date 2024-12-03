 import React from 'react';
 import { Poppins } from 'next/font/google';
 import Counter from '../Counter/Index';
 import Image from 'next/image';
 import Cover from "../../../../public/cover.png";
 


 const poppins = Poppins ({
   weight: ["300", "400", "500", "800","900"],
   subsets: ["latin"],
 })

function HeroSection(){
  return (
        <div className={`relative flex z-0 w-full h-full overflow-hidden bg-opacity-75 bg-[url("https://arynews.tv/wp-content/uploads/2017/01/governor-news.jpg")] bg-cover ${poppins.className}`}>
          <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80 "></div>
       <div className="z-50  m-auto mt-6 block w-[95%] justify-between md:flex md:flex-row sm:w-full lg:w-[87%] xl:[1300px]">
        <div className="h-fit w-fit pt-5 md:w-1/2 md:py-10">
        <h1 className="whitespace-nowrap text-main  text-[2rem] font-extrabold leading-1 tracking-wide text-center mt-10 sm:text-5xl sm:leading-none sm:text-center md:text:-left lg:text-5xl">Governor Sindh</h1>
        <h1 className="whitespace-nowrap text-main  font-normal text-[1.5rem] leading-[2rem] tracking-wide text-center sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2rem]">Kamran Khan Tessori</h1>

    <h1 className="whitespace-nowrap text-sub mt-3 font-semibold text-[1.5rem] leading-[2rem] tracking-widern text-center sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2rem] ">
      Certified Cloud
      <br />
      Applied Generative AI <br />
      Engineer (GenEng)</h1>
      <p className="whitespace-nowrap text-main font-extrabold text-[1.2rrem] my-3 text-center sm:text-center sm:text-2xl md:text-left lg:text-[1.25rem] ">Earn upto $5000/month</p>
      <p className="tracking-wider w-full text-main font-bold text-[1.25rem] my-3 text-center sm:text-center sm:text-2xl md:w-[80%] md:text-left lg:text-[1.25rem]">Now addmissions are open in 
        Hyderabad </p>

        <div className="mb-7 mt-0 flex sm:mt-3 sm:gap-6 md:mb-0">
          <button className="w-full mt-0 rounded-md bg-main text-white py- px-3 text-center text-sm font-semibold tracking-widest transition-all hover:translate-y-1 sm:py-1 sm:text-base md:w-52 lg:w-full ">
            APPLYNOW
          </button>
          <Counter />
        </div>
        </div>
        <div className="relative mt-7 flex w-[85%] items-end sm:m-auto sm:justify-center  md:m-auto md:justify-end lg:justify-end xl:justify-end ">
          <Image 
          src={Cover}
          alt='GIAIC' 
          width={1088}
          height={896} className="md:ml-40  h-auto min-w-[800px] lg:w-[300px]"/>
        </div>
       </div>
        </div>
        
  );
}

export default HeroSection;
 


// https://www.governorsindh.com/_next/static/media/cover.1d863e39.png

