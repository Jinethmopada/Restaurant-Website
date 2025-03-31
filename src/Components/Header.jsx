import React from "react";

const Header = ()=>{
    return (
      <>
        <div className="nav-bar">
        <a href="/">
        <img className="logo-img" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgf-G27Cm2yNlQu0B7HLaLTsG9tCPxQAH4_w&s"/>
        </a>
        <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        </div>
        </div>
      </>
    )
  }

export default Header;