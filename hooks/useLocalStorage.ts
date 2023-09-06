import * as React from "react";


const useLocalStorage = <T>(key:string):[(T|string|null),any]=>{
   const data = typeof window !== "undefined" ?  JSON.parse(localStorage.getItem(key) as any) : null;  
   const setLocalStorage = (value:any)=>{
      if(typeof window !== "undefined"){
   
             const newVal = JSON.stringify(value);
             localStorage.setItem(key,newVal)
         
      }
   } 
  
    
   return [data,setLocalStorage]
}
export default useLocalStorage ;