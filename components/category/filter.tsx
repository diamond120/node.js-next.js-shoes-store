import {Close,Rating,MultiRangeSlider} from "../common/"; 


interface propsI{
    handleDeleteCollection : (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>)=>any
    showCollection : boolean;
}

const Filter = ({handleDeleteCollection,showCollection}:propsI)=>{
    return (
        <div className={"absolute left-[0] top-[0] bottom-[0]  min-h-[100vh] bg-[rgba(0,0,0,0.4)] w-full right-[0]  " + `${showCollection? "opacity-1" :" opacity-0 -z-20"}`} >
        <div className={"bg-white overflow-y-auto  h-[100vh] transition-all duration-[.5s]  right-0 w-full max-w-[325px] px-[1.3rem] py-[1.5rem]"+ `${showCollection? " " :" p-0 w-0"}`} >
           <div className="flex justify-end">
              <Close color="#979a9b" size="24" className="cursor-pointer" onClick={handleDeleteCollection}/>
           </div>
           <h3 className="text-fourth font-semibold text-[1.3rem] tracking-wide">
              <span className="capitalize">filtred price</span>
           </h3>
   
         <div className="mt-[1.5rem]">
           <MultiRangeSlider max={1000.00} min={40.00} step={0.01}/>            
          </div>
          <ul className="text-primary font-poppins mt-[2rem] text-[1.1rem] capitalize">
          <li className="mb-[1rem]">men <span className="text-fourth">(5)</span></li>
          <ul className="pl-[1.5rem]">
           <li className="mb-[.3rem]">running <span className="text-fourth">(1)</span></li>
           <li className="mb-[.3rem]">sneakers <span className="text-fourth">(3)</span></li>
           <li className="mb-[.3rem]">training <span className="text-fourth">(1)</span></li>
          </ul>
          </ul>   
          <ul className="text-primary font-poppins mt-[2rem]  text-[1.1rem] capitalize">
          <li className="mb-[1rem]">women <span className="text-fourth">(5)</span></li>
          <ul className="pl-[1.5rem]">
           <li className="mb-[.3rem]">running <span className="text-fourth">(1)</span></li>
           <li className="mb-[.3rem]">sneakers <span className="text-fourth">(3)</span></li>
           <li className="mb-[.3rem]">training <span className="text-fourth">(1)</span></li>
          </ul>
          </ul>   
          <h3 className="text-fourth py-[1.5rem] font-semibold text-[1.3rem] tracking-wide">
              <span className="capitalize">average rating</span>
           </h3>
           <div className="flex flex-col gap-[.5rem] pl-[1.5rem]">
              <div className="flex gap-[.2rem] items-center">
              <Rating rating={5} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>
              <div className="flex gap-[.2rem] items-center">
              <Rating rating={3} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>
              <div className="flex gap-[.2rem] items-center">
              <Rating rating={2} className="text-[1.3rem]"/>
              <span className="text-fourth text-[1rem] font-poppins">(5)</span>
              </div>

           </div>
        </div>
     </div>
    )
}

export default Filter;