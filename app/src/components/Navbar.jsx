import React from 'react';
import "../styles/Navbar.css";
import{NavLink}from "react-router-dom";
const Navbar= () =>{
        return (
              <nav className="navbar">
              <div className='logonav'>
              <NavLink to="/" className='logonav-nav'> &#60; App &#47; &#62;</NavLink>
              </div>
              <div className='menu'>
              <ul>
                      <NavLink to="/signup" className='menulinks'>SignUp</NavLink>
              </ul>
              <ul>
                      <NavLink to="/login" className='menulinks'>Login</NavLink>
              </ul>
              </div>
            </nav>
        );
      };
      Navbar.protoTypes={};
      export default Navbar;