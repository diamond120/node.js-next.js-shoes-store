
interface ProductAmountI{
   add : ()=>void;
   remove:()=>void;
   className?:string;
   productAmount:number;
   rest?:any;
}

const ProductAmount = ({add,remove,productAmount,className,...rest}:ProductAmountI)=>{

   return(
    <div className={"border-[1px]  flex justify-between w-[120px] " + `${className}`} {...rest}>
    <button onClick={remove} className="w-full text-primary border-r-[1px]  py-[.3rem]" >-</button>
    <input type="number" name="empty"  className="w-full focus:outline-0 text-center text-primary" value={productAmount}/>
    <button onClick={add} className="w-full text-primary border-l-[1px]">+</button>
</div>
   )

}

export default ProductAmount ;