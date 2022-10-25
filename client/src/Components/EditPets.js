import React, { useState } from 'react'

function EditPets({dog}) {

    const [dogName, setDogName] = useState(dog.name)
    const [photo, setPhoto] = useState(dog.photo)
    const [intakeDate, setIntakeDate] = useState(dog.intakeDate)
    const [DOB, setDOB] = useState(dog.DOB)
    const [breed, setBreed] = useState(dog.breed)
    const [available, setAvailable] = useState(dog.available)
    const [adoptionDate, setAdoptionDate] = useState(dog.adoptionDate)
    const [vaccinesUpToDate, setVaccinesUpToDate] = useState(dog.vaccinesUpToDate)
    const [vaccinesGiven,setVaccinesGiven] = useState(dog.vaccinesGiven)
    const [temperament, setTemperament] = useState(dog.temperament)
    const [spayNeuter,setSpayNeuter] = useState(dog.spayNeuter)
    const [spayNeuterDate,setSpayNeuterDate] = useState(dog.spayNeuterDate)
    const [heartwormStatus,setHeartwormStatus] = useState(dog.heartwormStatus)
    const [heartwormProduct, setHeartwormProduct] = useState(dog.heartwormProduct)
    const [heartwormPrevention, setHeartwormPrevention] = useState(dog.heartwormPrevention)
    



    //      fetch(`/dogs`, {
    //         method: "POST",
    //         headers: {"Content-Type" : "application/json"},
    //         body: JSON.stringify({dogDetails})
           
    //     }
    //    ) 


        function handleDelete(e){ 
            fetch(`/dogs/${dog.id}`, {
            method: "DELETE"
        })
        }
        

        function handleDogForm(e) {
            e.preventDefault()
          fetch(`/dogs/${dog.id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                breed: breed,
                name : dogName,
                photo : photo,
                vaccinesUpToDate : vaccinesUpToDate,
                vaccinesGiven : vaccinesGiven,
                spayNeuter : spayNeuter,
                spayNeuterDate : spayNeuterDate,
                available : available,
                DOB : DOB,
                heartwormStatus : heartwormStatus,
                heartwormPrevention : heartwormPrevention,
                heartwormProduct : heartwormProduct,
                temperament : temperament,
                adoptionDate : adoptionDate
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        }



  return (
    <div> 
       <form onSubmit={handleDogForm}>
            <label  htmlFor="name">Name: </label>
            <input 
            type="text"
            onChange = {(e) => setDogName(e.target.value)}
            value={dogName}
            />

            <label>Breed: </label>
            <input 
            type="text"
            onChange = {(e) => setBreed(e.target.value)}
            value={breed}
            />

            <label>Estimated age/DOB- </label>
            <input 
            type="text"
            onChange = {(e) => setDOB(e.target.value)}
            value={DOB}
            />

            <label>Photo URL: </label>
            <input 
            type="text"
            onChange = {(e) => setPhoto(e.target.value)}
            value={photo}
            />

            <label>Is this dog available for adoption?</label>
            <input 
            name="available"
            type="checkbox" 
            label="Is this dog available for adoption"
            checked={available}
            onChange={e => setAvailable(e.target.checked)}
            />

            <label>intakeDate: </label>
            <input 
            type="text"
            onChange = {(e) => setIntakeDate(e.target.value)}
            value={intakeDate}
            />

            <label>adoptionDate: </label>
            <input 
            type="text"
            onChange = {(e) => setAdoptionDate(e.target.value)}
            value={adoptionDate}
            />


            <label>Are vaccines up to date?</label>
            <input 
            name="vaccinesUpToDate?"
            type="checkbox" 
            label="Are vaccines up to date?"
            checked={vaccinesUpToDate}
            onChange={e => setVaccinesUpToDate(e.target.checked)}
            />

            <label>What vaccines have been given? </label>
            <input 
            type="text"
            onChange = {(e) => setVaccinesGiven(e.target.value)}
            value={vaccinesGiven}
            />
            <label>Is this dog spayed or neutered?</label>
            <input 
            name="spayed or neutered"
            type="checkbox" 
            label="Is this dog spayed or neutered"
            checked={spayNeuter}
            onChange={e => setSpayNeuter(e.target.checked)}
            />

            <label>Spay/neuter date? </label>
            <input 
            type="text"
            onChange = {(e) => setSpayNeuterDate(e.target.value)}
            value={spayNeuterDate}
            />

            <label>Is this dog positive for heart-worms?</label>
            <input 
            name="heartwormStatus"
            type="checkbox" 
            label="Is this dog positive for heart-worms?"
            checked={heartwormPrevention}
            onChange={e => setHeartwormStatus(e.target.checked)}
            />

            <label>What heartworm prevention or treatment is being is administered? </label>
            <input 
            type="text"
        onChange = {(e) => setHeartwormProduct(e.target.value)}
            value={heartwormProduct}
            />
        
            <label>Is this dog being treated for heartworm prevention?</label>
            <input 
            name="heartwormPrevention"
            type="checkbox" 
            label="Is this dog being treated for heartworm prevention?"
            checked={heartwormPrevention}
            onChange={e => setHeartwormPrevention(e.target.checked)}
            />

            <label>What is this dogs temperament? </label>
            <input 
            type="text"
            onChange = {(e) => setTemperament(e.target.value)}
            value={temperament}
            />
            <button onClick={handleDogForm} type="submit">Edit Dog Details </button>
            <button onClick={e => handleDelete(e)}type="delete">Delete pet from the database-</button>
        </form> 
    </div>
  )
}

export default EditPets