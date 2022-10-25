import {  BrowserRouter, Switch, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import AdoptablePets from './Components/AdoptablePets'
import Donate from './Components/Donate'
import AdoptionForm from './Components/AdoptionForm'
import Admin from './Components/Admin'



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

  useEffect(() => {
        fetch("/dogs")
        .then((resp) => resp.json())
        .then(dogs => setDogs(dogs))
    }, [])

 



    let filterAvailableDogs = dogs.filter(dog => dog.available == (true))



  return (
    <div>
      <Nav />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/AdoptablePets'>
            <AdoptablePets dogs={filterAvailableDogs}/>
          </Route>

          <Route exact path='/Donate'>
            <Donate />
          </Route>

          <Route exact path='/AdoptionForm'>
            <AdoptionForm />
          </Route>

          <Route exact path='/Admin'>
            <Admin dogs={dogs}/>
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
    </div>    
 )
}


export default App
