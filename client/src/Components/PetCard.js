import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";


function PetCard({dog}) {
    
  const [newDonation, setNewDonation] = useState({})
  
  // const history = useHistory()

    const handleDonatePost= () => {

            let newDonation = {
                name : "",
                email : "",
                amount : 10,
                dog_id : dog.id
            }

        fetch("/donation_forms", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newDonation)
        })
            .then(resp => resp.json())
            .then(data => setNewDonation(data))
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
      <button type="submmit" onClick={handleAdoptionPost}>start your application to adopt</button>
    </div>
    </>
  )
}


export default PetCard
