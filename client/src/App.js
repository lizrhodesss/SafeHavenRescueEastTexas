// import {  Switch, Route } from "react-router-dom"
import React, { useEffect, useState } from "react";
import './App.css'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import AdoptablePets from './Components/AdoptablePets'


function App() {
  const [dogs, setDogs] = useState([]);
  //this will be for auth i believe (copied over when i saw it in another project)

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


    
//filter dogs by "available" pass down available dogs to <AvailablePets /> and not available to </About>
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <AdoptablePets dogs={filterAvailableDogs}/>
      {/* <PetCard /> */}
    </div>    
 )
}


export default App



    // // <div>
    //   {/* <Header />
    //   <Footer /> */}
    // {/* <Switch>
    //   <Route> */}
    //   {/* <Home /> */}
    //   {/* <About />
    //   <AdoptablePets />
    //   <Donate />
    //   <AdoptionForm />
    //   <Admin /> */}
    //     {/* unsure about how this- do i need routes for admin since this is the only users that can log in */}
    //   {/* <AllPets />
    //   <AdoptionForms />
    //   <DonationForms /> */}
    // {/* </Route>
    // </Switch>  */}
    // // </div>
    //this is set up per phase 2 lecture on routing

     // <BrowserRouter>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/testing">
    //         <h1>Test Route</h1>
    //       </Route>
    //       <Route path="/">
    //         <h1>Page Count: {count}</h1>
    //       </Route>
    //     </Switch>
    //   </div>
    // </BrowserRouter>
