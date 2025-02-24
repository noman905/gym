import  Coachcard  from "./Coachescard";



const coacharray = [
    {
      link: "./coaches/coach1.avif",
      name: "John Smith",
      specialty: "Strength & Conditioning",
      experience: "10+ years"
    },
    {
      link: "./coaches/coach2.avif",
      name: "Emily Johnson",
      specialty: "Weight Loss & Nutrition",
      experience: "8+ years"
    },
    {
      link: "./coaches/coach3.avif",
      name: "Michael Brown",
      specialty: "Flexibility & Mobility",
      experience: "6+ years"
    },
    {
      link: "./coaches/coach4.avif",
      name: "Sarah Williams",
      specialty: "HIIT & Cardio Training",
      experience: "7+ years"
    },
   
  ];
  

  

   const Coach = () => {



    return(
    
    <>
    <section className="m-2 pt-16 mb-5 md:mt-10 bg-black text-white">
        <h1 className="text-3xl sm:text-4xl m-auto mb-9 flex justify-center items-center font-extrabold uppercase ">Our Best Coach</h1>
    
       <ul className="flex flex-wrap  m-2 sm:p-1  gap-2 w-[95%] justify-center items-center ">
    
         {coacharray.map((current,ind)=>{
    
        return <Coachcard key={ind} current={current}/>
    
    
    
     })}
        
    
       </ul>
       </section>
       </>
    
       
    
    )
    
    
    }
    
    export default Coach