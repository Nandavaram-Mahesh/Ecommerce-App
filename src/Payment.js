import React, { useEffect, useState } from "react";
import { Link,useHistory} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css"
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import axios from "./axios";
import { db } from "./firebase";
import { CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
const Payment = () => {
    const[{basket,user},dispatch]=useStateValue()
    
    const history = useHistory()
    
    const stripe = useStripe()
    
    const elements = useElements()

    const [succeeded,setSucceeded] = useState(false)
    const [processing,setProcessing] = useState("")
    const [error,setError] = useState(null)
    const [disabled,setDisabled]= useState(true)
    const [clientSecret,setClinetSecret] = useState(true)

   //most important part for payment 
    useEffect(()=>{
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret= async () =>{
                const response = await axios({
                    method:'post',
                    url:`/payments/create?total=${getBasketTotal(basket)*100}`
                });
                setClinetSecret(response.data.clientSecret)
        }
        getClientSecret() 
    },[basket])
    
    console.log(clientSecret)

    const handleSubmit= async (event) =>{
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        })
        .then(({paymentIntent,error})=>{
            //paymentIntent = paymentConfirmation
            
            console.log(error)

            if (error){
                db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(error.payment_intent.id)
                .set({
                    basket:basket,
                    amount:error.payment_intent.amount,
                    created:error.payment_intent.created
                })
            }

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type:"EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }
    const handleChange=(event)=>{
        //Listen for any changes in the cardElement
        //and display any error as the customer types their card details

        setDisabled(event.empty)
        setError(event.error?event.error.message:"")
    }

  return (
        <div className="payment">
            <div className="payment-container">
            <h1>Checkout(<Link to='/checkout'>{basket?.length} items</Link>) </h1>
            {/*Payment Section - Delivery Address */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.email}</p>
                    <p>8-1/3A</p>
                    <p>Thummalgunta Road</p>
                    <p>Tirupati,Chittoor Dist-517502</p>
                </div>
            </div>
            {/*Payment Section - Delivery Address */}
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment-items">
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}
                </div>
            </div>
            {/*Payment Section - Delivery Address */}
            <div className="payment-section">
                <div className="payment-title">
                        <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment-priceContainer">
                                <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                        <h3>Order Total:{value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} // Part of the homework  
                                displayType ={"text"}
                                thousandSeparator={true}
                                prefix={'$'}
                            />
                           <button disabled={processing||disabled||succeeded}>
                                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                           </button>
                        </div>
                        {error&&<div>{error}</div>}
                    </form>                        
                </div>
            </div>
            </div>
            
        </div>
  );
};

export default Payment;
