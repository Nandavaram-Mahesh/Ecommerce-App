import React from "react";
import moment from 'moment'
import CheckoutProduct from "./CheckoutProduct";
import './OrderElement.css'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";

const OrderElement = ({order}) => {
  return (
    <div className="order">
        <h1>
            Order
        </h1>
        <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
        <p className="order-id">
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map(item=>(
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        ))}
         <CurrencyFormat
            renderText={(value)=>(
              <h3 className="order-total">Order Total:{value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount/100} // Part of the homework  
            displayType ={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />
        
    </div>
  );
};

export default OrderElement;
