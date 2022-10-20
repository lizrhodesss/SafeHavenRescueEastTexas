import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {




  return (
    <>
       <nav>
            <NavLink exact to="/">
            Home
            </NavLink>
            <NavLink exact to="/adoptablePets">
               Adoptable Pets
               </NavLink>
            {/* <NavLink exact to="/Donate">
                How You Can Help
            </NavLink> */}
            <NavLink exact to="/about">
               About Us
               </NavLink>
        </nav>
    </>
  )
}


export default Nav
