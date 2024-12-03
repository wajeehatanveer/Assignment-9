import React from 'react'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Slider from "../Slider/Index";

import ImageWebsite from "../../../../public/imageWebsite.jpg";
import ImageWebsite2 from "../../../../public/imageWebsite2.jpg";
import ImageWebsite3 from "../../../../public/imageWebsite3.jpg";


const poppins = Poppins ({
  weight: ["300", "400", "500", "800","900"],
  subsets: ["latin"],
})

const Text = () => {
  return (
    <>
    <div className="xl:w-[1300px] lg:w-[87%] w-[90%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10 ">
      <h1 className={` text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] ${poppins.className}`}>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className={`sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify ${poppins.className}`}>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members</p>
     <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 gap-5 m-3 s:m-0">
      <Image 
      src={ImageWebsite}
      alt='logo1'
      width={1088}
      height={896} 
       loading="lazy" decoding="async"  data-nimg="1" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"   />
      
      <Image 
      src={ImageWebsite2}
      alt='logo2'
        width={500}
        height={375}
      loading="lazy" decoding="async"  data-nimg="1" className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"  />
      
      <Image 
      src={ImageWebsite3}
      alt='logo3'
      width={1088} 
      height={896}
       loading="lazy" decoding="async"  data-nimg="1"  className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"  />
     </div>
     <Slider />
     </div>
     
     </>
  )
}

export default Text;