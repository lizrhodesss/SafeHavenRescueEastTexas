import {  BrowserRouter, Switch, Route } from "react-router-dom"
import React, { useEffect, useState } from "react";
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import AdoptablePets from './Components/AdoptablePets'
import Donate from './Components/Donate'


function App() {
  const [dogs, setDogs] = useState([]);
  //this will be for auth

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

      //fetch all dogs to pass down as props from here to children, conditional rendering for adoptable pets and admin/all pets
  useEffect(() => {
        fetch("/dogs")
        .then((resp) => resp.json())
        .then(dogs => setDogs(dogs))
    }, [])

 



    let filterAvailableDogs = dogs.filter(dog => dog.available == (true))
    console.log(filterAvailableDogs)


    

  return (
    <div>
      <Nav />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/AdoptablePets'>
            <AdoptablePets dogs={filterAvailableDogs}/>
          </Route>

          <Route exact path='/Donate'>
            <Donate />
          </Route>
        </Switch>
    </div>    
 )
}


export default App
