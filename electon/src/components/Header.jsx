import React, { useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Link } from '@mui/material';
import { useAuth0, user, isAuthenticated, logout } from '@auth0/auth0-react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import 'tippy.js/dist/tippy.css';
import './Header.css';

const Header = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  useEffect(() => {
    const fetchWishlistItemCount = async () => {
      try {
        const response = await fetch('https://electon-server.onrender.com/wishlistArr');
        const data = await response.json();
        setWishlistItemCount(data.length);
      } catch (error) {
        console.error('Error fetching wishlist item count:', error);
      }
    };

    fetchWishlistItemCount();
  }, []);

  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        const response = await fetch('https://electon-server.onrender.com/cartArr');
        const data = await response.json();
        setCartItemCount(data.length);
      } catch (error) {
        console.error('Error fetching cart item count:', error);
      }
    };

    fetchCartItemCount();
  }, []);

  return (
    <div>
      <div className="header">
        <div className='left'>
        <div className="header__first">
            <img src="" alt=""/>
            <h1>Electon</h1>
        </div>
        <div className="header__second">
            <input type="text" placeholder='Search any things'/>
            {/* <SearchIcon/> */}
            <Button>Search</Button>
        </div>
        </div>
        <div className='right'>
        <div className="header__third">
            <PersonOutlineIcon/>
            
            <Link href="#" color="inherit" underline="none">{isAuthenticated ? user.email : "Welcome to Electon"}</Link>
            
    
        </div>
        <div className="header__fourth">
            <FavoriteBorderIcon/>&nbsp;<span style={{backgroundColor:"#eda515",borderRadius:"50px"}}>{wishlistItemCount}</span>
        </div>
        <div className="header__fifth">
        {
            isAuthenticated?
            <Link href="#" color="inherit" underline="none" onClick={()=>logout (
                { logoutParams: { returnTo: window.location.origin } }
            )}>Sign out</Link>
            :<Link href="#" color="inherit" underline="none" onClick={()=>loginWithRedirect()}>Sign in</Link>
        }
        
        </div>
        <div className="header__sixth">
            <ShoppingCartOutlinedIcon/>&nbsp;<span style={{backgroundColor:"#eda515",borderRadius:"50px"}}>{cartItemCount}</span>&nbsp;&nbsp;
            <Link href="#" color="inherit" underline="none">Cart</Link>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
