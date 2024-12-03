import React from 'react'
import { Poppins } from 'next/font/google';



const poppins = Poppins ({
  weight: ["300", "400", "500", "800"],
    
subsets: ["latin"],
})


const Counter = () => {
 return(
      <div className=" flex w-full flex-col items-center sm:mt-0 ">
          <div className="flex-col  mt-2 text-center text-lg tracking-wide text-main sm:text-sm">
            <div className="w-30  font-extrabold lg:text-lg sm:text-sm sm:text-center">562,143</div>
          </div>
        <div className="text-center  text-sm tracking-wide text-main sm:mb-0 sm:text-sm lg:text-sm sm:text-center">Accepted Applications</div>  
    </div>
 );
}

export default Counter;