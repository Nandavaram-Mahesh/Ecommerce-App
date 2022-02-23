import React from "react";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout=()=> {
    const[{basket,user},dispatch] = useStateValue()
  return (
  <div className="checkout">
        <div className="checkout-left">
            <img src='https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png' alt='' className="checkout-banner"/>
            <h3>Hello, {user?.email}</h3>
            <h1 className="checkout-title">Your Shopping Basket</h1>
            
            {basket.map(eachProduct=>(
                <CheckoutProduct 
                    id={eachProduct.id} 
                    title={eachProduct.title}
                    image={eachProduct.image}
                    price={eachProduct.price}
                    rating={eachProduct.rating} 
                />
                
            ))}
            
        </div>
        <div className="checkout_right">
        <Subtotal/>
        </div>
  </div>
  );
}

export default Checkout;
