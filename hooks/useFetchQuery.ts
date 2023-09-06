import { useQuery } from "react-query"

 
type queryType = string | string[];

const useFetchQuery = (query:queryType,endpoint:string)=>{
  
  const headers = {
    method : "get"
  }
  return useQuery("bestSellers",()=>fetch(endpoint,headers).then(res=>res.json()))
}


export default useFetchQuery;