import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageMagnifier, ProductAmount } from "../../common";
import Rating from "../../common/rating";
import visa from "../../../asset/images/svg/visa.svg"
import masterCard from "../../../asset/images/svg/mastercard.svg";
import americanExpress from "../../../asset/images/svg/americanexpress.svg";
import discover from   "../../../asset/images/svg/discover.svg";
import ProductI from "../../../types/product";
import { useShoppingCart } from "../../../context/shoppingCartContext";
import {useLocalStorage} from "../../../hooks";
import ShoppingCartI from "../../../types/shoppingCart";

interface propsI{
    product:ProductI
}
const ProductInfo = ({product:{name,rating,sale,price,description,categories,image}}:propsI)=>{
    const [productAmount,setProductAmount] = React.useState(1);
    const [isProductAdded,setIsProductAdded] = React.useState(false)
    const [_,setLocalStorage] = useLocalStorage("shoppingCart");
    const {shoppingCart,setShoppingCart} = useShoppingCart()
    React.useEffect(()=>{
      const isProductExist = shoppingCart.some((product:ShoppingCartI)=>product.name===name)
        setIsProductAdded(isProductExist)
    },[shoppingCart])

    
    const handleAddProduct = ()=>{ 
         setProductAmount(productAmount+1)
         const updatedShoppingCart = shoppingCart.map((product:ShoppingCartI)=>product.name===name?{...product,productAmount:productAmount+1,price}:product)    
         setShoppingCart(updatedShoppingCart)
         setLocalStorage(updatedShoppingCart)
        }
    const handleRemoveProduct = ()=>{
        if(productAmount-1  > 0 ){
            setProductAmount(productAmount-1)
            const updatedShoppingCart = shoppingCart.map((product:ShoppingCartI)=>product.name===name?{...product,productAmount:productAmount-1,price}:product)    
            setShoppingCart(updatedShoppingCart)
            setLocalStorage(updatedShoppingCart)
        }
    }
    
    const handleAddToCart = ()=>{
            if(!isProductAdded){
                setShoppingCart([...shoppingCart,{name,productAmount,price:price*productAmount,image}])
                setLocalStorage([...shoppingCart,{name,productAmount,price:price*productAmount,image}])

                setIsProductAdded(true)
            }           
    
        }
    
    return(
        <article className="pb-[3rem] flex justify-between  gap-[3rem] lg:gap-[2rem] md:flex-col" >
        <ImageMagnifier imgUrl={`${process.env.NEXT_PUBLIC_API_URL}${image.data.attributes.url}`}>
        {sale!=null?(<div className="bg-primary w-[60px] h-[60px] rounded-full flex justify-center items-center absolute top-[-2%] left-[-4%] md:w-[50px] md:h-[50px] md:left-[-3%] xsm:w-[40px] xsm:h-[40px] xsm:top-[-6%]">
         <span className="text-fifth text-[1.2rem] capitalize md:text-[1.1rem] xsm:text-[.9rem]">
          sale!
         </span>
         </div>):null}
        </ImageMagnifier>

        <div  className="w-full">
            {categories.data.map(({attributes}:any,idx:number)=>(
               <React.Fragment key={idx}>
            <span className="text-primary text-[1.1rem] capitalize font-medium font-poppins ">
             {attributes.name}
            </span>
            { idx !== categories.data.length-1 ?(
            <span className="text-primary mr-[.5rem] text-[1.1rem] ml-[.1rem]">
                ,
            </span>):null}
               </React.Fragment>
            ))}
           
            <h2 className="capitalize text-[1.8rem] text-third font-medium font-poppins my-[.8rem]">
            {name}
            </h2>
            <div className="mb-[.8rem] ]">
               <Rating rating={rating} className="text-[1.2rem]"/>
              <span className="text-primary ml-[.7rem] text-[1.1rem]">( 1 costumer review )</span>
            </div>
            <div className="text-fourth">
                {sale?(<span className="text-[1.8rem] font-inter mr-[.3rem] line-through opacity-40">
                  ${sale.toFixed(2)}
                </span>):null}
                    <span className="text-[1.8rem] font-semibold font-inter mr-[.3rem]">
                    ${price.toFixed(2)}
                    </span>
                    <span className="capitalize  text-[1.1rem]">
                    & free shipping
                    </span>
            </div>
            <p className="text-fourth text-[1.1rem] mt-[.8rem] leading-8">
           {description}
            </p>
            <div className="flex  py-[.8rem] gap-[1.5rem] sm:flex-col">
                <ProductAmount className="border-[1px]  flex justify-between w-[120px] self-start sm:self-center" remove={handleRemoveProduct} productAmount={productAmount} add={handleAddProduct}/>
                
                <button onClick={handleAddToCart} disabled={isProductAdded}  className={"bg-primary py-[.5em] px-[1.2em] text-center uppercase font-bold text-[1.1rem] text-fifth tracking-[.1rem] transition-all duration-[.3s] ease-in-out hover:bg-third focus:bg-third " + `${isProductAdded?"opacity-[.50]":""}`}>
                    add to cart
                </button>
            </div>
            <hr />
            <div className="text-fourth capitalize text-[1.1rem] pt-[.5rem]">
                <span className="mr-[.3rem]">
                categories : 
                </span>
                {categories.data.map(({attributes}:any,idx:number)=>(
                  <Link href="#">
                  <a className="text-primary mr-[.3rem] text-[1rem]">
                    {attributes.name}{idx!==categories.data.length-1?",":null}
                  </a>
                  </Link>
                   ))} 
               
            </div>
            <div className="border-[1px]  rounded relative mw-[500px] w-full py-[1.5rem] mt-[3rem]">
                <h3 className="absolute capitalize font-bold text-[1.1rem] text-center z-10 bg-fifth text-fourth left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] px-[1rem] sm:w-[90%] ">
                Guaranteed Safe Checkout
                </h3>
                <div className="w-full flex  justify-center gap-[1rem]">
                <Image src={visa} alt="visa icon" height={45} width={45}/>
                <Image src={masterCard} alt="master icon" height={45} width={45}/>
                <Image src={americanExpress} alt="american express icon" height={45} width={45}/>
                <Image src={discover} alt="american express icon" height={45} width={45}/>

                </div>
            </div>
        </div>
     </article>
    )
}

export default ProductInfo;