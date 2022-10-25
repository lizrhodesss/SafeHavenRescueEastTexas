import React from 'react'
import { Link } from 'react-router-dom';
import sharLogo from '../images/SHAR_logo.jpeg'


function Nav() {




  return (
    <>
       <nav>
            <Link exact to="/">
            <img src={sharLogo}/>
            Home
            </Link>
            <Link exact to="/adoptablePets">
               Adoptable Pets
               </Link>
            {/* <NavLink exact to="/Donate">
                How You Can Help
            </NavLink> */}
            <Link exact to="/about">
               About Us
               </Link>
              <Link exact to="/admin">
              Admin
              </Link>
        </nav>
    </>
  )
}


export default Nav
