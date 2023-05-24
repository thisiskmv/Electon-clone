import React, { useState } from 'react'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth0,user, isAuthenticated ,logout } from "@auth0/auth0-react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button, Link } from '@mui/material';
import Tippy from "@tippyjs/react"
import 'tippy.js/dist/tippy.css';
import './Header.css'


const Header = () => {
    
    const { loginWithRedirect,user, isAuthenticated,logout  } = useAuth0();
   console.log(user)
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
            <FavoriteBorderIcon/>&nbsp;<span style={{backgroundColor:"#eda515"}}>0</span>
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
            <ShoppingCartOutlinedIcon/>&nbsp;<span style={{backgroundColor:"#eda515"}}>0</span>&nbsp;&nbsp;
            <Link href="#" color="inherit" underline="none">Cart</Link>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
