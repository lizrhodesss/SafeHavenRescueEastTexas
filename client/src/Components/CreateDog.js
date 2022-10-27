import React, { useState } from 'react'

function CreateDog({dogs, dog, setDogs}) {
    const [dogName, setDogName] = useState("")
    const [photo, setPhoto] = useState("")
    const [intakeDate, setIntakeDate] = useState("")
    const [DOB, setDOB] = useState("")
    const [breed, setBreed] = useState("")
    const [available, setAvailable] = useState(true)
    const [adoptionDate, setAdoptionDate] = useState("")
    const [vaccinesUpToDate, setVaccinesUpToDate] = useState(false)
    const [vaccinesGiven,setVaccinesGiven] = useState("")
    const [temperament, setTemperament] = useState("")
    const [spayNeuter,setSpayNeuter] = useState(false)
    const [spayNeuterDate,setSpayNeuterDate] = useState("")
    const [heartwormStatus,setHeartwormStatus] = useState(false)
    const [heartwormProduct, setHeartwormProduct] = useState("")
    const [heartwormPrevention, setHeartwormPrevention] = useState(true)



    function handleNewDog(e) {
        e.preventDefault()
         fetch(`/dogs`, {
            method: "POST",
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
            .then(data => setDogs([...dogs, data]))
            
    }


  return (
    <div>
        <form onSubmit={(e) => handleNewDog(e)}>
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
        <button type='submit'>add dog to records</button>
        </form> 
    </div>
  )
}

export default CreateDog