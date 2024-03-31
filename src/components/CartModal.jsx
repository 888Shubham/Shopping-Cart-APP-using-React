import React from "react";
import styles from "../styles/CardModal.module.css";
import { useValue } from "../itemContext";

function CartModal(){
    const {cart, total, handleReset, toggle} = useValue();
    return (
        <div className= {styles.cartModal}>
            <div className={styles.closeButton} onClick={toggle}>
                close
            </div>
            <div className= {styles.clearButton} onClick={handleReset}>
                clear
            </div>
            <div className= {styles.itemContainer}>
                {cart.map((item)=>{
                    return(
                        <div className= {styles.cartCard} key ={item.id}>
                            <h1>{item.name}</h1>
                            <h3>{item.qty}</h3>
                            <h3>{item.qty * item.price}</h3>
                            </div>
                    );
                })}
            </div>
            <div className={styles.total}>
                <div className= {styles.totalText}>Total</div>
                <div className= {styles.totalPrice}>{total}</div>
            </div>
        </div>
    )
}

export default CartModal;