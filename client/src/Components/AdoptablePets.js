import React from 'react'
import { NavLink } from 'react-router-dom';
import PetCard from './PetCard'
import { Card, Grid } from 'semantic-ui-react'


function AdoptablePets({dogs}) {

  let filterAvailableDogs = dogs.filter(dog => dog.available === true)
console.log(dogs)


  return (
    <>
    <Grid columns={4}>
      {filterAvailableDogs.map(dog => <PetCard dog={dog} key={dog.id}/>)}
     </Grid>
    </>
  )
}


export default AdoptablePets
