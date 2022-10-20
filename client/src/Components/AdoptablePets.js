import React from 'react'
import { NavLink } from 'react-router-dom';
import PetCard from './PetCard'


function AdoptablePets({dogs}) {


  return (
    <>
     {dogs.map(dog => <PetCard dog={dog} key={dog.id}/>)}
    
    </>
  )
}


export default AdoptablePets
