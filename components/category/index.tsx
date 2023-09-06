import * as React from "react";
import {Close,Hamburger,Men} from "../common/"; 
import Filter from "./filter";
const Category = ()=>{
    const [showCollection,setShowCollection] = React.useState(false)
    const handleShowCollection = ()=>{
       setShowCollection(true)
      window.document.body.style.overflowY = "hidden"
    }
    const handleDeleteCollection = ()=>{
       setShowCollection(false)
       window.document.body.style.overflowY = "auto"
 
    }
    
    return(
       <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
       <div className="container px-[3rem] bg-fifth pt-[3rem] pb-[10rem]">
          <h1 className="font-poppins font-medium text-[1.9rem] text-primary pb-[1.8rem]">
             Men
          </h1>
       <div className="flex justify-between mb-[3.5rem]">
          <div className="flex gap-[1.3rem] items-center">
             <button className="bg-primary py-[.5em] px-[1.2em] flex items-center gap-[.4rem] text-center uppercase font-bold text-[1rem] text-fifth tracking-[.1rem] transition-all duration-[.3s] ease-in-out hover:bg-third focus:bg-third" onClick={handleShowCollection}>
              {!showCollection?<Hamburger size="19" color="#ffffff"/>:<Close color="#ffffff" size="19"/>}
                <span>filter shoes</span>
             </button>
             <p className="text-fourth text-[1.1rem] font-inter" >
                <span className="capitalize">showing</span> all 8 results
             </p>
          </div>
             <select className="text-primary text-[1.1rem] w-[180px] bg-transparent focus:outline-none" aria-label="shop order">
                <option value="sort by popularity">Sort by popularity</option>
                <option value="sort by popularity">sort by popularity</option>
                <option value="sort by popularity">sort by popularity</option>
                <option value="sort by popularity">sort by popularity</option>
                <option value="sort by popularity">sort by popularity</option>
                <option value="sort by popularity">sort by popularity</option>
             </select>
           
          </div>
          <Men/>
       <Filter handleDeleteCollection={handleDeleteCollection} showCollection={showCollection}/>
          </div>
          </section>
    )
}

export default Category;