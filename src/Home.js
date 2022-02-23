import React from 'react'
import './Home.css'
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';
const productDetailsobject=[
    {
        id:uuidv4(),
        imageUrl:'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
        title:'The Lean Startup',
        rating:5,
        price:29.99,
    },
    {
        id:uuidv4(),
        imageUrl:'https://m.media-amazon.com/images/I/61Li3cp0wvL._AC_SL1500_.jpg',
        title:'Smart Watch',
        rating:5,
        price:59.99,
    },
    {
        id:uuidv4(),
        imageUrl:'https://m.media-amazon.com/images/I/61Li3cp0wvL._AC_SL1500_.jpg',
        title:'Smart Watch',
        rating:5,
        price:59.99,
    },
]
const Home = () => {
  return (
        <div className='home'>
            <div className='home-container'>
                <img className='home-bgImg' src='https://m.media-amazon.com/images/I/81UwfObBWFL.jpg' alt='background-image'/>
            <div className='home-row'>
                {productDetailsobject.map((eachItem)=>
                    <Product id={eachItem.id} image={eachItem.imageUrl} title={eachItem.title} rating={eachItem.rating} price={eachItem.price}/>    
                )}

                {/* <Product id={123} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={345} image="https://m.media-amazon.com/images/I/61Li3cp0wvL._AC_SL1500_.jpg" title="Smart Watch" rating={5} price={29.99}/>
                <Product id={345} image="https://m.media-amazon.com/images/I/61Li3cp0wvL._AC_SL1500_.jpg" title="Smart Watch" rating={5} price={29.99}/> */}

            </div>
            <div className='home-row'>
                <Product id={678} image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={91011} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={121314} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={141516} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={171819} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={202122} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
            </div>
            <div className='home-row'>
                <Product id={232425} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>
                <Product id={262728} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" title="The Lean Startup" rating={5} price={29.99}/>       
            </div>
            </div>
        </div>
  );
};

export default Home;
