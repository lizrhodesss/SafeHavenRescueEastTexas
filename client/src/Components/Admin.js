import React, { useEffect, useState } from 'react'
import DonateCard from './DonateCard'
import AdminPetCard from './AdminPetCard'
import CreateDog from './CreateDog'
import { Card, Grid } from 'semantic-ui-react'


function Admin({dogs, dog, setDogs}) {
  const [newDogForm, setNewDogForm] = useState(false)
  // const [adoptForms,setAdoptForms] = useState([])
  

  // useEffect(() => {
  //   fetch("/adoption_forms")
  //   .then((resp) => resp.json())
  //   .then(data => setAdoptForms(data))
  // },[])


  const showNewDogForm = () => {
    setNewDogForm(newDogForm => !newDogForm)
  }


  return (
    <>
      {/* {donateAdmin.map(donate => <DonateCard />)} */}
      <button onClick={showNewDogForm}>create a new dog</button><br></br>
      <br></br>
      <br></br>
      <Grid columns={4}>
            {newDogForm ? <CreateDog setDogs={setDogs} dogs={dogs} dog={dog}/> : null}
      {dogs ? dogs.map(dog => <AdminPetCard  dogs={dogs} dog={dog} key={dog.id}/>) : "loading"}
 
      {/* {adoptForms.map(adoptForm => <AdoptCard  adoptForm={adoptForm} adoptForms={adoptForms} dogs={dogs} key={adoptForms.id}/>)} */}
      </Grid>
    </>
  )
  }
  
  
  export default Admin

