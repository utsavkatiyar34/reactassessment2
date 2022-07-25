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
                      <NavLink to="/page1" className='menulinks'>Page1</NavLink>
              </ul>
              <ul>
                      <NavLink to="/page2" className='menulinks'>Page2</NavLink>
              </ul>
              <ul>
                      <NavLink to="/page3" className='menulinks'>Page3</NavLink>
              </ul>
              <ul>
                      <NavLink to="/page4" className='menulinks'>Page4</NavLink>
              </ul>
              </div>
            </nav>
        );
      };
      Navbar.protoTypes={};
      export default Navbar;