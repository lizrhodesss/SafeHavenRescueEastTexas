import React from 'react'
import { Link } from 'react-router-dom';
import sharLogo from '../images/SHAR_logo.jpeg'


function Nav({user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", {
        method: "DELETE" })
        .then((resp) => {
            if (resp.ok) {
            setUser(null)
    }
  })
}



  return (
       user ? (
       <nav>
          <Link exact to="/">
              <img src={sharLogo}/>
          </Link>
          <Link exact to="/admin/allPets">
              all pets
          </Link>
          <Link exact to="/admin/donations">
              Donations
          </Link>
          <Link exact to="/admin/adoptions">
              Adoption Applications
          </Link>
            <button onClick={handleLogoutClick} className="logoutButton">Logout</button>
       </nav>
           ) : (
       <nav>
          <Link exact to="/">
              <img src={sharLogo}/>
          </Link>
          <Link exact to="/adoptablePets">
              Adoptable Pets
          </Link>
          <Link exact to="/about">
              About Us
          </Link>
          <Link exact to="/Login">
              Admin Login
          </Link>
        </nav>
        )
      )
  }


export default Nav
