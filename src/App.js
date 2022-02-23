import React ,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Checkout from './Checkout';
import LoginPage from './LoginPage';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';


const promise= loadStripe("pk_test_51KNXV2SJBtmSRJsexeRkeMC2RNQ6ComMRSRKfh6Ti4H4hUffap8AUOKRS6NrNKGiFD8w2vkJCozPr9EvxNqyC3BF00BkZLBG1U")

const App=()=> {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is>>>>", authUser)

      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
      // Header - First Component
      //Home Page - second Component
      // 
      <BrowserRouter>
      <div className="app">
      <Switch>
      <Route exact path='/'>
          <Header/>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <LoginPage/>
        </Route>
        <Route exact path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route exact path='/payment'>
          <Header/>
          <Elements stripe={promise}> 
            <Payment/>
          </Elements>
        </Route>     
        <Route exact path='/orders'>
          <Header/>
          <Orders/>
        </Route>   
      </Switch>
      </div>
      </BrowserRouter>
      
  );
}

export default App;
