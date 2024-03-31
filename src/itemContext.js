import { createContext, useState, useContext} from "react";
import CartModal from "./components/CartModal";

export const itemContext = createContext();

export function useValue(){
    const value = useContext(itemContext);
    return value;
}

export function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = (prod) => {
        const index = cart.findIndex((item) => item.id === prod.id)
        console.log("prod", prod);
        if(index === -1){
            setCart([...cart, {...prod, qty:1}])
            setTotal(total + prod.price);
            
        }else{
            cart[index].qty++
            setCart(cart);
            setTotal(total + cart[index].price);
        }
        setItem(item + 1);
    
      };
    
      const handleRemove = (id) => {
        const index = cart.findIndex((item)=> item.id === id);
        if(index !== -1){
            cart[index].qty--;
            setItem((prevstate) => prevstate - 1);
            setTotal(total-cart[index].price);
            if(cart[index].qty == 0){
                cart.splice(index,1)
            }
        }
        setCart(cart);
        
      };
    
    const handleReset = () =>{
        setTotal(0);
        setItem(0);
        setCart([]);
    }
    const toggle = () =>{
        setShowCart(!showCart);
    }
      return(
    <itemContext.Provider value = {{item, total, handleAdd, handleRemove, handleReset, toggle, cart}}>
        {showCart && <CartModal/>}
        {children}

    </itemContext.Provider>
    )
    
}
