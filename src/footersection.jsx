export const Footersection=((props)=>{
 
    const {name,item1,item2,item3}=props.current;


return(

    <section className="flex flex-col gap-3">
        <div>
            <h1 className="text-2xl  font-medium">{name}</h1>
        </div>
        <div className="flex flex-col gap-3">
            <p>{item1}</p>
            <p>{item2}</p>
            <p>{item3}</p>

        </div>
    </section>

)


})