import * as React from "react";
import { useRating } from "../../../hooks";


const AddReview = ()=>{
  const {handleRate,handleSelectRating,rating} = useRating();
  return(
    <article className="my-[3rem] py-[2rem] px-[2rem] border-[1px]   rounded-[3px] sm:px-[1rem]">
    <h2 className="text-fourth text-[1.5rem]"><span className="capitalize">add</span> a review</h2>
    <p className="text-fourth text-[1.1rem] pt-[.5rem]">
    Your email address will not be published. Required fields are marked *
    </p>
    <div className="flex  items-center sm:flex-col sm:mb-[2rem]">
    <span className="text-fourth text-[1.5rem] my-[1rem] mr-[.8rem] sm:mr-[0rem] "><span className="capitalize">your</span> rating *</span>
     <div className="flex gap-[.3rem]" onMouseLeave={handleSelectRating(0)}>
     {new Array(5).fill(undefined).map((_,idx)=>(
          
      <span key={idx} className={`fa fa-star text-[1.5rem] ${idx+1 <= rating ? 'text-secondary' : 'text-fourth'} `} onMouseEnter={handleSelectRating(idx+1)} onClick={handleRate(idx+1)}></span>  
   ))}
    </div>
   </div>
    <form action="">
    <label className="text-fourth text-[1.4rem] block mb-[.5rem]">
    Your review *
    </label>
    <textarea className="border-[1px] rounded-[3px] px-[.7rem] py-[1rem] w-full block"/>
    <div className="flex w-full gap-[1.3rem] mt-[1.5rem] sm:flex-col">
    <div className="w-full"> 
    <label className="text-fourth text-[1.4rem] capitalize block mb-[.5rem]">
    name *
    </label>
    <input type="text" className="border-[1px] rounded-[3px] px-[.7rem] py-[.6rem] w-full"/>
    </div>
    <div className="w-full">
    <label className="text-fourth text-[1.4rem] capitalize block mb-[.5rem]">
    email *
    </label>
    <input  type="email" className="border-[1px] rounded-[3px] px-[.7rem] py-[.6rem] w-full"/>
    </div>
    </div>
    <input type="checkbox" className="mt-[1.5rem]"/>
    <span className="text-fourth text-[1.1rem] mt-[1.5rem] "> Save my name, email, and website in this browser for the next time I comment.</span>
   <button className="bg-primary  text-fifth uppercase text-poppins tracking-widest font-semibold py-[.7rem] px-[1.5rem] text-center block mt-[1.5rem] sm:m-auto sm:mt-[1rem] transition-all duration-[100ms] hover:bg-third focus:bg-fourth">
      submit
   </button>
  </form>   
  </article>
  )
}
export default AddReview;