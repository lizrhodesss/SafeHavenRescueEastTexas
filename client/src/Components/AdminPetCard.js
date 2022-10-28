import React, { useState } from 'react'
import EditPets from './EditPets'
import { Card, Image, Grid, Button } from 'semantic-ui-react'
// import CreateDog from './CreateDog'

// import AdoptionForm from './Components/AdoptionForm'

function AdminPetCard({dogs, dog}) {
    const [detailsForm, setDetailsForm] = useState(false)
    // const [newDogForm, setNewDogForm] = useState({})


    const handleCardFlip = () => {
      setDetailsForm(detailsForm => !detailsForm)
    }

  //  const showNewDogForm = () => {
  //   setNewDogForm(newDogForm => !newDogForm)
  //  }
     
    


  return (
    <Grid.Column>
      <Card>
        <Image centered alt="please upload photo" src={dog.photo}/>
          <Card.Content>
              <Card.Header>{dog.name}</Card.Header>
                <Card.Meta>
                  <span className='breed'>Breed: {dog.breed}</span><br></br>
                  <span className='age'>estimated age: {dog.DOB}</span>
              </Card.Meta>
          </Card.Content>
          <div>
          <Button onClick={handleCardFlip}>
              {detailsForm ? "hide details" : "see and edit dog Details"}
            </Button>
              {detailsForm ? <EditPets dogs={dogs} dog={dog}/> : null}
          </div>
      </Card>
    </Grid.Column>
  )
}

export default AdminPetCard
