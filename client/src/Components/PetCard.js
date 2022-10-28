import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import AdoptionForm from './AdoptionForm';
import { Card, Image, Grid, Button } from 'semantic-ui-react'



function PetCard({dog}) {
  const [newDonationState, setNewDonationState] = useState({})
  const [newAdoptionState, setNewAdoptionState] = useState({})
  
  
  const history = useHistory()

  const handleDonatePost = async() => {

        let newDonation = {
            name : "",
            email : "",
            amount : 10,
            dog_id : dog.id
        }

    const res = await fetch("/donation_forms", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newDonation)
        })
        const data = await res.json()

        function redirect(data) {
          history.push(`/donation_forms/${data.id}`)         
        }
        redirect(data)
        }



  const handleAdoptionPost = async() => {

        let newAdoption = {
            name : "",
            email : "",
            whyForeverHome : "",
            dog_id : dog.id,
            work : "",
            children : false,
            otherPets : false,
            admin_id : 1
        }

    const res = await fetch("/adoption_forms", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newAdoption)
        })
        const data = await res.json()
        console.log(data)

        function redirect(data) {
          history.push(`/adoption_forms/${data.id}`)
        }
        redirect(data)
      }
        
        
   


  return (
          <Grid.Column>
          <Card>
              <Image centered src={dog.photo} alt="no pic of this doggo yet" wrapped ui={false} />
              <Card.Content>
                <Card.Header>{dog.name}</Card.Header>
                <Card.Meta>
                  <span className='breed'>Breed: {dog.breed}</span><br></br>
                  <span className='age'>estimated age: {dog.DOB}</span>
                </Card.Meta>
              <Card.Description>Bio: {dog.temperament}</Card.Description>
              </Card.Content>
              <Card.Content extra>
              <div>
                <Button type="submit" onClick={handleDonatePost} size="mini" style={{width: '50%'}}>
                    Sponsor this pet!
                </Button>
                <Button type="submit" onClick={handleAdoptionPost} size="mini" style={{width: '50%'}}>
                  Apply to adopt this pet!
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Grid.Column>
  )
}


export default PetCard
