import ShoppingCartI from "../types/shoppingCart";
import useLocalStorage from "./useLocalStorage";

interface ShoppingCartContextI{
    shoppingCart: ShoppingCartI[];
    setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCartI[]>>

}
const useShoppingCartLogic = ({shoppingCart,setShoppingCart}:ShoppingCartContextI)=>{
    const [_,setLocalStorage] = useLocalStorage("shoppingCart");
    const handleDeleteProduct = (name:string)=>{
        return()=>{
           const filtredShoppingCart = shoppingCart.filter((product:ShoppingCartI)=>product.name!==name)
           setShoppingCart(filtredShoppingCart)
           setLocalStorage(filtredShoppingCart)
        }
      }
      const handleAddProduct = (name:string,productAmount:number,price:number)=>{ 
        return ()=>{
            const updatedShoppingCart = shoppingCart.map((product:ShoppingCartI)=>product.name===name?{...product,productAmount:productAmount+1,price}:product)    
            setShoppingCart(updatedShoppingCart)
            setLocalStorage(updatedShoppingCart)
        }
       }
    const handleRemoveProduct = (name:string,productAmount:number,price:number)=>{
      return ()=>{
          if(productAmount-1  > 0 ){
              const updatedShoppingCart = shoppingCart.map((product:ShoppingCartI)=>product.name===name?{...product,productAmount:productAmount-1,price}:product)    
              setShoppingCart(updatedShoppingCart)
              setLocalStorage(updatedShoppingCart)
          }
    
      }
    }
   
    return {handleAddProduct,handleRemoveProduct,handleDeleteProduct}
}
export default useShoppingCartLogic