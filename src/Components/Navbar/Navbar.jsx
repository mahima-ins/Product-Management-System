import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom" 
export const Navbar = () => {
    return (
      <>
          <div className="navbar" id="myNavbar">
          <a href="#">Home</a>
  {/* <a href="/addProduct">Add Product</a> */}
  <Link to ="/addProduct">Add Product</Link>
  </div>
  
  
      </>
    )
  }