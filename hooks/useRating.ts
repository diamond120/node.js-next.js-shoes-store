import * as React from "react";


const useRating = ()=>{
    const [rating,setRating] = React.useState(0);
    const [allowRating,setAllowRating] = React.useState(true) ;
    const handleSelectRating = (rate:number)=> () => allowRating ? setRating(rate) : null ; 
    
    const handleRate = (rate:number)=>{
        return () => {
              setRating(rate)
             setAllowRating(false)
        }
    }

    return {handleSelectRating,handleRate,rating}
}
export default useRating;