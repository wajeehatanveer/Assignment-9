import { Poppins } from "next/font/google";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

const poppins = Poppins ({
  weight: ["300", "400", "500" ,"700"],
  subsets: ["latin"],
})

function Navbar(){
  return (
      <>
      <div className= {`  sticky top-0 z-40 w-full bg-main print:hidden ${poppins.className}`}>
       <div className=" flex m-auto h-16  justify-between w-[95%] items-center sm:w-full md:h-20 lg:h-16 lg:w-[95%]  " >
       <Image 
        src={Logo} 
        alt='logo'
        width={80}
        height={113}
        loading="lazy"   decoding="async" data-nimg="1"  className="mt-20  mx-14 w-[50px]sm:w-[80px] md:w-[90px]" 
           />  
           
           <h1 className=" text_shadow hidden  font-extrabold text-[15px] mr-10 lg:items-center text-[#b9d8f3] lg:block lg:text-lg xl:text-2xl">
            Tuition Free Education Program on Latest Technologies</h1>
            <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] items-center  lg:hidden ">
              Tution Free Program{" "}
            </h1>
         <ul className="flex gap-5 text-blue-50 text-xs font-normal   items-center mr-10 sm:lg:gap-5 ">              
           <li className="">Home</li>
            <li className="">Apply</li>
           <li className="">Jobs</li>
           <li className="">Result</li>
         <li className="overflow-visible text-xs ">Courses</li>
          </ul>
           </div>
          </div>
        
        </>
          );
        }
        export default Navbar;

       
      {/* <div className="relative flex  z-0 w-full h-full overflow-hidden bg-opacity-75 bg-url[('')] bg-cover">
<div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80 "></div>
<div className="z-50  m-auto block w-95 justify-between">

  <div className=" h-fit w-fit pt-5 ">
    <h1 className=" whitespace-nowrap  text-main mt-20 px-24 text-[2rem] font-extrabold leading-10 tracking-wider">Governor Sindh</h1>
    <h1 className="whitespace-nowrap text-main  font-normal text-1.5rem leading-2rem px-24">Kamran Khan Tessori</h1>
    <h1 className="whitespace-nowrap text-sub font-semibold text-1.5rem leading-2rem mt-5 px-24">Certified Cloud<br />Applied Generative<br />AI Engineer (GenEng)</h1>
      <p className="whitespace-nowrap text-main font-extrabold text-1.25rem my-5 px-24">Earn upto $5000/month</p>
      <p className="tracking-wider w-full text-main font-bold text-1.25rem  my-5 px-24">Now addmissions are open in 
        hyderabad</p> */}
      {/* <div className="mb-7 mt-5 flex">
        <button className="w-44 rounded-md bg-blue-900 text-white h-11 mx-24  mt-5 text-center text-sm font-semibold tracking-widest transition-all hover:translate-y-1 ">APPLYNOW</button>
        <div className="mt-4 flex  flex-col -mx-5">
          <div className="flex-col  text-center text-xl tracking-widest text-main">
            <div className="w-45 font-extrabold">562,143</div>
          </div>
        <div className="text-center text-sm tracking-wider text-main ">Accepted Applications</div>
        
      </div>
      </div> */}

      







     {/* <div className="relative flex mt-7  items-end ">
      <Image alt="piaic" loading="lazy" width="1600" height="1212" decoding="async" data-nimg="1" className="md: ml-40 h-auto min-w-900px" src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png"/>
     </div>
    </div>
    </div>
     </div>
     */}

     
     

     
     
  

     {/* <div className="xl:w-1300x lg:w-90% w-95% m-auto sm:mt-20 mt-10 border-300 pb-10">
      <h1 className="text-center xl:text-36px sm:text-32px text-xl sm:leading-1.75rem text-main font-extrabold m-auto md:w-95%">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className="sm:mt-10 mt-7 mb-8 xl:text-1.25rem sm:text-1.2rem text-1800 sm:tracking-wider tracking-normal text-justify">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members</p>
     </div>
     <div className="grid sm:grid-cols-3 gris-cols-1 mt-10 gap-5 m-3 s:m-0">
      <img alt="logo1" loading="lazy" decoding="async"  data-nimg="1" width="1088" height="896" className="shadow-2xl shadow-black rounded-lg h-300px object-cover w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite.5c6ae62f.jpg"   />
      <img alt="logo2" loading="lazy" decoding="async"  data-nimg="1" width="500" height="375" className="shadow-2xl shadow-black rounded-lg h-300px object-cover w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite2.a102c7b5.jpg"   />
      <img alt="logo3" loading="lazy" decoding="async"  data-nimg="1" width="1088" height="896" className="shadow-2xl shadow-black rounded-lg h-300px object-cover w-full" src="https://www.governorsindh.com/_next/static/media/imageWebsite3.b845fe78.jpg"   />
     </div>

     <div className="w-full mt-10">
     <div className="px-3 xl:lg:px">
      <div className="relative bg-slate-900 rounded-lg overflow-hidden">
      

       </div>
      </div>
     </div>
    </> */}
  
  

