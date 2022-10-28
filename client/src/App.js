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
import Login from './Components/login'
import DonateCardContainer from './Components/DonateCardContainer'
// import AdminPetCard from "./Components/AdminPetCard"
import AdoptionCardContainer from "./Components/AdoptionCardContainer";


function App() {
  const [dogs, setDogs] = useState([]);
  const [user, setUser] = useState(null)

  // const [filterAvailableDogs, setFilterAvailableDogs] = useState()
  

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
        fetch("/dogs")
        .then((resp) => resp.json())
        .then(dogs => {setDogs(dogs)
        
          // setFilterAvailableDogs(dogs.filter(dog => dog.available === true))
        })


    }, [])
// if (dogs.length > 0)
//  {let filterAvailableDogs = dogs.filter(dog => dog.available === true)}
// else {
//  let filterAvailableDogs = dogs}



  return (
    <div>
      <Nav user={user} setUser={setUser}/>
        <Switch>
          <Route exact path='/about'>
            <br></br>
            <About />
          </Route>
            {/* {filterAvailableDogs ? */}
          <Route exact path='/AdoptablePets'>
            <AdoptablePets dogs={dogs}/>
          </Route> 
          {/* : null} */}
          <Route exact path='/donation_forms/:id'>
            <Donate />
          </Route>

          <Route exact path='/adoption_forms/:id'>
            <AdoptionForm />
          </Route>

          <Route exact path='/Admin'>
            <Admin dogs={dogs} user={user} setUser={setUser}/>
          </Route>

          <Route exact path='/Login'>
            <Login user={user} setUser={setUser} />
          </Route>
 
          <Route exact path='/admin/donations'>
            <DonateCardContainer />
          </Route> 

          <Route exact path='/admin/adoptions'>
            <AdoptionCardContainer dogs={dogs}/>
          </Route> 

          <Route exact path='/admin/allPets'>
            <Admin dogs={dogs} setDogs={setDogs}/>
          </Route> 

          <Route exact path='/'>
            <Home />
          </Route>

          {/* <Route exact path='/admin/donations'>
            <Admin dogs={dogs} />
          </Route> */}
         
        </Switch>
    </div>    
 )
}


export default App
