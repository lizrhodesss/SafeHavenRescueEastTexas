import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from "@mui/material/button";
import AdoptionForm from './AdoptionForm';



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

        function redirect(data) {
          history.push(`/adoption_forms/${data.id}`)
        }
        redirect(data)
      }
        
        
   


  return (
    <>
    <div>
      <img src={dog.photo} alt="no pic of this doggo yet"/>
      <div>Name: {dog.name}</div>
      <div>Breed: {dog.breed}</div>
      <div>Age/DOB: {dog.DOB}</div>
      <div>Health Details- <br/> 
        Vaccines up to date? {dog.vaccinesUpToDate}<br/>
        Vaccines given: {dog.vaccinesGiven}
      </div>
      <div>Bio: {dog.temperament}</div>
      <button type="submit" onClick={handleDonatePost}>click here to sponsor this dog</button>
      <Button type="submit" onClick={handleAdoptionPost}>start your application to adopt</Button>
    </div>
    {/* <AdoptionForm /> */}
    </>
  )
}


export default PetCard
