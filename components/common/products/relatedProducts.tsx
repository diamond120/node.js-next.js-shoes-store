import { useFetchQuery } from "../../../hooks";
import Product from "./product";





const RelatedProducts = ()=>{
    const {data,isLoading} = useFetchQuery("bestSellers",`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`)
    if(isLoading) return null

    return(
      <article className="mt-[3rem]">
       <h2 className="text-third text-[1.8rem] font-poppins font-medium mb-[1.2rem]"><span className="capitalize">related</span> products</h2>
       <Product products={data.data}/>
      </article>
    )
}
export default RelatedProducts;