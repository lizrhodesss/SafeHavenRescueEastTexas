import React, { useState } from 'react'
import EditPets from './EditPets'
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
    <div>
        <img alt="please upload photo" src={dog.photo}/>
          <h3>{dog.name}</h3>
          <p>intake date: {dog.intakeDate}</p>
              <button onClick={handleCardFlip}>
                {detailsForm ? "hide details" : "see and edit dog Details"}
              </button>
            {detailsForm ? <EditPets dogs={dogs} dog={dog}/> : null}
           {/* <button onClick={showNewDogForm}>create a new dog</button>
            {newDogForm ? <CreateDog dogs={dogs} dog={dog}/> : null} */}
            
    </div>
  )
}

export default AdminPetCard
