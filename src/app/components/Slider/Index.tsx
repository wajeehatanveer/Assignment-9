import React from 'react'
import Image from 'next/image';
import Slideshow1 from "../../../../public/slideShow1.jpg";
import Slideshow2 from "../../../../public/slideShow2.jpg";
import ImageWebsite from "../../../../public/imageWebsite.jpg";
import ImageWebsite2 from "../../../../public/imageWebsite2.jpg";

const Slider = () => {
  return (

<div className=" whitespace-nowrap xl:w-[1300px] lg:w-full w-full sm:mt-10   pb-5  ">
     <div className="grid sm:grid-cols-2 grid-cols-1  gap-2 m-3 s:m-0">
      <Image 
      src={Slideshow1}
      alt='logo1'
      width={1090}
      height={896} 
       loading="lazy" decoding="async"  data-nimg="1" className="  rounded-lg h-[400px] object-cover w-full"   />
      
      <Image 
      src={Slideshow2}
      alt='logo2'
        width={1090}
        height={896}
      loading="lazy" decoding="async"  data-nimg="1" className=" rounded-lg  h-[400px] object-cover w-full"  />
      </div>

      </div>



    
  )
}

export default Slider;