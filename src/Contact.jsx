import { motion } from "framer-motion";

 const Contact = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{}} // Triggers every time the component comes into view
        className="About mt-24 flex flex-col text-white lg:flex-row m-4 mb-20 justify-around items-center lg:items-start"
      >
        {/* Image Section */}
        <img 
          className="w-full lg:w-[40%] xl:w-[30%] h-auto lg:h-[79vh] rounded-xl mb-8 lg:mb-0 shadow-2xl" 
          src="./About/aboutimage.avif" 
          alt="Chef" 
        />
  
        {/* Form Section */}
        <form action="submit" className="flex flex-col gap-4 w-full lg:w-[60%] xl:w-[50%]">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-medium">Name</p>
            <input 
              className="w-full h-[40px] focus:outline-none  bg-black border-[2px] rounded-lg border-lime-500 outline-lime-500 px-2" 
              type="text" 
              placeholder="Enter your Name" 
              name="Name"
            />
          </div>
  
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-medium">Email</p>
            <input 
              className="w-full h-[40px] focus:outline-none border-[2px]  bg-black  rounded-lg border-lime-500 outline-lime-500 px-2" 
              type="email" 
              placeholder="Enter your Email" 
              name="Email"
            />
          </div>
  
          {/* Message Textarea */}
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl font-medium">Message</p>
            <textarea 
              className="w-full focus:outline-none border-[2px] h-[150px] md:h-[200px] rounded-lg border-lime-500 outline-lime-500  bg-black px-2 py-2" 
              placeholder="Enter your Message" 
              name="Message"
            />
          </div>

          <button className="h-[50px] w-[100px] rounded-xl m-auto bg-lime-500">Submit</button>
        </form>
      </motion.section>
    );
  };
  
  

  export default Contact
  
  
  
  
  
  