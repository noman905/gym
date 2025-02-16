import { Choosecard } from "./choosecard";



const choosearray = [
    {
      link: "./choose/choose1.avif",
      heading: "Strength Training",
      reason: "Build muscle and increase strength.",
     hit: "Start now!"
    },
    {
      link: "./choose/choose2",
      heading: "Weight Loss",
      reason: "Burn fat and achieve your ideal physique.",
     hit: "Start now!"
    },
    {
      link: "./choose/choose3.jpg",
      heading: "Flexibility & Mobility",
      reason: "Improve flexibility and reduce stiffness.",
     hit: "Start now!"
    }
  ];







  export const Choose = () => {



    return(
    
    <>
    <section className="m-2 md:mt-10 bg-black text-white">
        <h1 className="text-3xl sm:text-4xl m-auto mb-9 flex justify-center items-center font-extrabold uppercase ">Why People Choose Us</h1>
    
       <ul className="flex flex-wrap  m-2 sm:p-1  gap-2 w-[95%] justify-center items-center ">
    
         {choosearray.map((current,ind)=>{
    
        return <Choosecard key={ind} current={current}/>
    
    
    
     })}
        
    
       </ul>
       </section>
       </>
    
       
    
    )
    
    
    }
    
    