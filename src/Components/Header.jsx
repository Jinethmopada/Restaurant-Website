import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Header = ()=>{
const [loggedInUser, setLoggedInUser] = useState(false);

    return (
      <>
        <div className="nav-bar">
        <a href="/">
        <img className="logo-img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgf-G27Cm2yNlQu0B7HLaLTsG9tCPxQAH4_w&s"/>
        </a>
        <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li>Cart</li>
          {
            loggedInUser ? <button onClick={()=> setLoggedInUser(false)}>Logout</button> : <button onClick={()=> setLoggedInUser(true)}>Login</button>
          }
        </ul>
        </div>
        </div>
      </>
    )
  }

export default Header;