import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {Link} from 'react-router-dom'
import './Header.css'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Header=()=> {
    const[{basket,user}] = useStateValue()
    // Calling Firebase SignOut Authentication Function 
    const handelAuthentication = ()=>{    
            auth.signOut()                              
    }
    
  return( 
                  
            <div className="header">
            {/* Logo */}
                    <Link to='/'>
                        <img className="header-logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon-logo'/>
                    </Link>
            {/* SearchBar */}
                <div className="header-search">
                    <input className="header-searchinput" type='text' placeholder="Search" />
                    <SearchIcon className="header-searchIcon"/>
                </div>
            {/* Nav-options*/}
                <div className="header-nav">
                    <Link to={!user && '/login'}>
{/* when user clicks on this div then handelAuthentication function is called */}
                <div onClick={handelAuthentication} className="header-options">
                       <span className="header-optionLineOne">
            {/* Got user from context ,
             since user needed to accessed in multiplepages
             and different routes , to avoid prop drilling it is stored in context api and accessed whereever neccessary 
             */} 
                    {user?`Hello ${user.email}`:'Hello Guest'}
                       </span>
                       <span className="header-optionLineTwo">
                           {user? "Sign Out":"Sign In"}
                       </span>
                    </div>
                    </Link>
                    <Link to='/Orders'>
                    <div className="header-options">
                       <span className="header-optionLineOne">
                           Returns
                       </span>
                       <span className="header-optionLineTwo">
                           <span>&</span> Orders
                       </span>
                    </div>
                    </Link>
                    <Link to='/prime'>
                        <div className="header-options">
                            <span className="header-optionLineOne">
                                Amazon Prime
                            </span>
                            <span className="header-optionLineTwo">
                                Videos
                            </span>
                        </div>
                    </Link>
                </div>
                <Link to='/checkout'>
                <div className="header-BasketContainer">
                    <ShoppingBasketOutlinedIcon  className="header-BasketIcon"/>
                    <span className="header-optionLineTwo header-basketCount">
        {/* Got basket from context 
        since user needed to accessed in multiplepages and different routes ,
        to avoid prop drilling it is stored in context api and 
        accessed whereever neccessary*/}  
                    {basket?.length}
                       </span>
                </div>
                </Link>                
            </div>
        )
}

export default Header;
