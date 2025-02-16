import { footerarray } from "./footerarray";
import { Footersection } from "./footersection";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";



export const Footer = () => {
     return (
      <footer>
       <section
         className="flex flex-col sm:flex-row w-full bg-lime-500  text-black p-6 
                    justify-between items-center sm:items-start"
       >
         {/* Left Section: Logo & Social Icons */}
         <div className="flex flex-col gap-4 text-center sm:text-left w-full sm:w-auto">
           <h1 className="text-3xl sm:text-4xl font-semibold">Gymteam</h1>
           <p className="text-sm sm:text-base">
             Our Gym is trusted by 
             millions of people
           </p>
           <h1 className="text-xl sm:text-2xl font-semibold">Follow Us</h1>
           <div className="icons flex gap-4 justify-center sm:justify-start">
             <IoLogoFacebook className="text-xl sm:text-2xl" />
             <FaInstagramSquare className="text-xl sm:text-2xl" />
             <AiFillTikTok className="text-xl sm:text-2xl" />
           </div>
         </div>
   
         {/* Right Section: Footer Links */}
         <div className="w-full sm:w-auto mt-5 sm:mt-0">
           <ul
             className="flex flex-wrap justify-center sm:justify-start gap-14 sm:gap-[5vw] md:gap-[7vw]"
           >
             {footerarray.map((curr, ind) => (
               <Footersection key={ind} current={curr} />
             ))}
           </ul>
         </div>
       </section>
       </footer>
     );
   };
   














