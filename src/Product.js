import  React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
const Product = ({id,image,title,price,rating}) => {
    
    const [{},dispatch] = useStateValue()  // state={basket}
    const addToBasket =()=>{
        //dispatch the item into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
            id:id,
            image:image,
            title:title,
            price:price,
            rating:rating,
        }
        })
    }

    return( 
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {Array(rating).fill().map((_,i)=>(
                            <p>⭐</p>
                    ))}
                </div>
                </div>
                <img className='product-image' src={image} alt=''/>
                <button  onClick={addToBasket}>
                    Add to Basket
                </button>

        </div>
  );
};

export default Product;
