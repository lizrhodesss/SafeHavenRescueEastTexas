import React from 'react'
import { NavLink } from 'react-router-dom';
import PetCard from './PetCard'


function AdoptablePets({dogs}) {

  let filterAvailableDogs = dogs.filter(dog => dog.available === true)
console.log(dogs)


  return (
    <>
     {filterAvailableDogs.map(dog => <PetCard dog={dog} key={dog.id}/>)}
    
    </>
  )
}


export default AdoptablePets
