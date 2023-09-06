import { useFetchQuery } from "../../../hooks";
import Product from "./product";

const Men = ()=>{
    const {data,isLoading} = useFetchQuery("bestSellers",`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`)
   if(isLoading) return null
    return(
    <Product products={data.data}/>

  )
}

export default Men; 