import { motion } from "framer-motion";
import { useMemo } from "react";

export const About = useMemo(() => {
  return (
    <>
  

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{}} // Triggers every time the component comes into view
        className="flex flex-col md:flex-row justify-around items-center m-4 mb-14 mt-14 text-white"
      >
     
     
  

        {/* Image Section */}
        <div className="group mt-11 flex  justify-center md:justify-start">

        
        <img
  src="./About/aboutimage.avif"
  alt="about"
  className="rounded-3xl w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] shadow-2xl object-cover"
  style={{ maxHeight: '400px', objectFit: 'cover' }}
  loading="lazy"
/>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 p-4 sm:p-10 w-full md:w-[50vw] lg:w-[40vw]">
  <h1 className="text-3xl xl:text-4xl text-center md:text-left text-white m-auto font-extrabold uppercase">
    About Our Gym
  </h1>
  <p className="m-auto text-base sm:text-lg font-normal font-serif text-justify leading-relaxed">
    <span className="text-lime-500">
      With state-of-the-art equipment and a supportive community, GymTeam is your ultimate destination for a healthier, stronger you
    </span>{" "}
    At GymTeam, we believe fitness is more than just a routine—it's a lifestyle. Our expert trainers provide personalized workout plans, professional guidance, and the motivation you need to achieve your fitness goals. Whether you're looking to build strength, lose weight, or improve flexibility, we’ve got you covered. 
    <span className="text-lime-500">
      With a user-friendly app and reliable delivery team,
    </span>{" "}
  </p>
</div>

      </motion.section>
    </>
  );
});




