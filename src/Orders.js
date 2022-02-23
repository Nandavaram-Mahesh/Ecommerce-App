import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import OrderElement from "./OrderElement";
import './Orders.css'
import { useStateValue } from "./StateProvider";

const Orders = () => {
    const [{basket,user},dispatch]=useStateValue()
    const [orders,setOrders]= useState([])


    useEffect(()=>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>{
                setOrders(snapshot.docs.map(doc=>({
                    id:doc.id,
                    data:doc.data()
            })))
        })
        }else{
            setOrders([])
        }
        
    },[])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders-order">
                {orders?.map(order=>(
                    <OrderElement order={order}/>
                ))}
            </div>
        </div>
    );
};

export default Orders;
