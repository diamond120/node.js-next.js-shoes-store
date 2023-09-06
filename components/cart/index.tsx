import ProductsCart from "./productsCart";
import TotalCart from "./totalCart";

const Cart = ()=>{
    return(
        <section className="container container-primary-px bg-lightGrey py-[3rem] mb-[3rem]" tabIndex={-1}>
        <div className="container container-primary-px bg-fifth pt-[3rem] pb-[10rem]">
          <h1 className="capitalize text-third text-[4.5rem] font-poppins font-medium text-center mx-auto ">
            cart
          </h1>
          <div className="mt-[1rem] flex justify-between items-start gap-[1.5rem] flex-wrap">
          <ProductsCart/>
          <TotalCart/>
          </div>
          </div>
          </section>  
    )
}

export default Cart ; 