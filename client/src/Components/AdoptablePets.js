import React from 'react'
import PetCard from './PetCard'


function AdoptablePets({dogs}) {

//    let filterAvailableDogs = dogs.filter(dog => dog.available === true)
// console.log(filterAvailableDogs)
  return (
    <>
     {dogs.map(dog => <PetCard dog={dog} key={dog.id}/>)}
    </>
  )
}


export default AdoptablePets
