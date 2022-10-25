import React, { useState } from 'react'
import EditPets from './EditPets'
// import AdoptionForm from './Components/AdoptionForm'

function AdminPetCard({dogs, dog}) {
    const [detailsForm, setDetailsForm] = useState(false)


    const handleCardFlip = () => {
      setDetailsForm(detailsForm => !detailsForm)
    }



  return (
    <div>
        <img alt="please upload photo" src={dog.photo}/>
          <h3>{dog.name}</h3>
          <p>intake date: {dog.intakeDate}</p>
              <button onClick={handleCardFlip}>
                {detailsForm ? "hide details" : "see and edit dog Details"}
              </button>
            {detailsForm ? <EditPets dogs={dogs} dog={dog}/> : null}
    </div>
  )
}

export default AdminPetCard
