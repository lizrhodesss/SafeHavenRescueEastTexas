// import { Card } from '@mui/material'
import React from 'react'
import { Card, Icon, Image, Grid, Button, Container, Header } from 'semantic-ui-react'

function AdoptCard({adoptForm, dogs}) {

// console.log(adoptForms.name)

// if(dogs){
// return
// const dog = dogs.map(dog => <img alt="photo unavailable" src={dog.photo}/>)}

return (
  <Grid>
  <Grid.Column width={6}>
    <Image src={adoptForm.dog.photo} alt="photo unavailable" size='medium'/>
  </Grid.Column>
    <Grid.Column width={10}> 
      <Container text>
        <Header as='h2'>{adoptForm.dog.name}</Header>
        <p>
          Adopter Name: {adoptForm.name}<br></br>
          Dog name: {adoptForm.dog.name}<br></br>
          other pets? {adoptForm.otherPets}<br></br>
          children? {adoptForm.children}<br></br>
          Why be a forever home? {adoptForm.whyForeverHome}<br></br>
          Type of work? {adoptForm.work}<br></br>
          adopters email: {adoptForm.email}
        </p>
      </Container>
    </Grid.Column>
  </Grid>
  )
}

export default AdoptCard




{/* <div>
<img src={adoptForm.dog.photo} alt="photo unavailable"/>
<p>Adopter Name: {adoptForm.name}</p>
<p>Dog name: {adoptForm.dog.name}</p>
<p>other pets? {adoptForm.otherPets}</p>
<p>children? {adoptForm.children}</p>
<p>why become a forever home? {adoptForm.whyForeverHome}</p>
<p>type of work? {adoptForm.children}</p>
<p>adopters email: {adoptForm.email}</p>
    </div> */}