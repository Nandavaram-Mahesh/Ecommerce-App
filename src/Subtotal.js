import React from "react";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import {useHistory } from "react-router-dom";
import './Subtotal.css'
const Subtotal = () => {
    const history = useHistory()
    const[{basket}] = useStateValue()
  return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items):
                    {/* Part of the homework */}
                    <strong>{value}</strong> 
                </p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/>  This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework  
            displayType ={"text"}
            thousandSeparator={true}
            prefix={'$'}
                />
            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </div>
  );
}

export default Subtotal;
