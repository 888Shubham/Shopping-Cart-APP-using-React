import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const {total, item, handleReset, toggle} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className= {styles.buttonWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
