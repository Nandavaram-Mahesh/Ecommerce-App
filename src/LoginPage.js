import React,{useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
import './LoginPage.css'


const LoginPage = () => {
    const history = useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const register=e=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    
        //some firebase login shitt...
    }
    
    const signIn = e=>{
        e.preventDefault()
        //some firebase login shitt...

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{history.push('/')}) 
        .catch(error=>alert(error.message))
    }
    

  return (
        <div className="login">
            <Link to='/'>
            <img
            className="login-logo" 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
            alt=''
            />
            </Link>
            <div className="login-container">
                <h1 className="sign-in">
                    Sign-in
                </h1>
                <form className="form">
                    <label htmlFor="email">E-mail</label>
                    <input type='text' id='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn}>Sign In</button>
                </form>
                <div className="form-button-container">
                <p className="form-description">
                    By signing you agree to Food Munch's Conditions of Use & Sale.
                    Please see our Privacy Notice , Our Cookies Notice and our Interest-Based Ads.
                </p>
                <button onClick={register}>SignUp</button>
                </div>
            </div>        
        </div>
  );
};

export default LoginPage;
