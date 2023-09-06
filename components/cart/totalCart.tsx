import { useShoppingCart } from "../../context/shoppingCartContext";

const TotalCart = ()=>{
    const {shoppingCart} = useShoppingCart();
    const totalPrice = shoppingCart.reduce((acc:number,{price,productAmount}:{price:number,productAmount:number})=>acc+price*productAmount,0)
     return(
    
        <table className="border-fourth border-[.5px]  md:w-full">
        <thead className="bg-lightGrey border-fourth border-[.5px]">
              <tr>
              <th scope="col" colSpan={2} className="text-[1.3rem] pl-[1.5rem] py-[1rem] text-left text-third font-poppins font-semibolds">                
                 <span className="capitalize">cart</span> totals
              </th>

              </tr>
        </thead>
        <tbody className="pl-[1rem]">
        <tr className="text-fourth text-[1.1rem] font-poppins capitalize border-b-[2px] ">
            <td className="pl-[1rem] pt-[2rem] pb-[.8rem]">
                subtotal
            </td>
            <td className="pr-[1rem] pt-[2rem] pb-[.8rem]">
                ${totalPrice.toFixed(2)}
            </td>
          
        </tr>
        <tr className="text-fourth text-[1.1rem] font-poppins capitalize border-b-[2px] ">
        <td className="pl-[1rem] py-[.8rem]">
                total
            </td>
            <td className="pr-[1rem] py-[.8rem]">
                ${totalPrice.toFixed(2)}
            </td>
        </tr>
        <tr className="text-fourth text-[1.1rem] font-inter ">
            <td className="px-[1rem] pt-[2rem] pb-[.8rem]" colSpan={2}>
                <p><span className="capitalize">have</span> a coupon?</p>
                <button className="bg-primary text-fifth tracking-widest uppercase font-semibold text-[1.2rem] text-center w-full block mt-[.8rem] py-[1em] px-[1.5em] ">
                    proceed to checkout
                </button>
            </td>
        </tr>
        </tbody>
      </table>
     )
}
export default TotalCart;