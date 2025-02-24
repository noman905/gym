import { motion } from "framer-motion";

export const Choosecard = ({ current }) => {
  const { link, reason, hit, heading } = current;

  return (
    <motion.section
      className="flex flex-col  bg-[#2a2a2a] items-center  rounded-2xl gap-2 sm:rounded-2xl border-[2px] border-black p-3
                 w-[69%%] sm:w-[48%] md:w-[45%] lg:w-[30%] xl:w-[24%]
                 h-[220px] sm:h-[280px] md:h-[290px] lg:h-[300px] 
                 mx-auto mb-3"
      initial={{ opacity: 0, y: 10 }} // Initial opacity and y position (slight move up)
      whileInView={{ opacity: 1, y: 0 }} // On view, set opacity to 1 and move back to original position
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      viewport={{ once: false }} // The animation triggers every time it comes into view
      whileHover={{
        scale: 1.05, // Slightly scale up the card on hover
        transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition for scaling
      }}
    >
      {/* Image Container - No Cropping */}
      <div className="w-full relative overflow-hidden  sm:rounded-lg"
           style={{ height: "55%" }}> 
        <img
          src={link}
          alt={heading}
          className=" h-[119%]  rounded-2xl  w-full sm:h-[110%] object-cover "
        />
      </div>

      {/* Heading - Big Reason (Bold) */}
      <h1 className="text-sm sm:text-base md:text-lg  font-serif mt-2 text-center font-bold">
        {heading}
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base font-serif mt-1 text-justify px-2">
        {reason}
      </p>

      {/* Button */}
      <button
        className="mt-2 text-xs sm:text-sm md:text-basefont-bold font-serif bg-lime-500
                   w-full sm:w-3/4 rounded-2xl py-1"
      >
        {hit}
      </button>
    </motion.section>
  );
};
