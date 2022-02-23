import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
const CheckoutProduct=({id,image,title,price,rating,hideButton})=> {
    const [{basket},dispatch] = useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
  return (
    <div className="checkoutProduct">
        <img src={image} className="checkoutProduct-image" alt=''/>
        <div className='checkoutProduct-info'>
            <p className="checkoutProduct-title">{title}</p>
            <p className="checkoutProduct-pricing">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct-rating'>
            {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
            {!hideButton && (<button className="checkoutProduct-RemoveBtn" onClick={removeFromBasket}>Remove from the basket</button>)}
            
            
        </div>

    </div>
  );
}

export default CheckoutProduct;
