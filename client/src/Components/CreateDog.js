import React, { useState } from 'react'
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'

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
    <Container fluid textAlign="center">
        <Header as='h4'>Add a new pet </Header> <br></br>
      
        <div class="ui one column center aligned page grid">
        <Form size="medium" onSubmit={(e) => handleNewDog(e)} success="true">
            <Form.Field>
                <label>Name:</label>
                <input 
                type="text"
                onChange = {(e) => setDogName(e.target.value)}
                value={dogName}/>
            </Form.Field>

            <Form.Field>
                <lable>Breed: </lable>
                <input
                type="text"
                onChange = {(e) => setBreed(e.target.value)}
                value={breed}/>
            </Form.Field>

            <Form.Field>
                <lable>Estimated age/DOB-</lable>
                <input
                type="text"
                onChange = {(e) => setDOB(e.target.value)}
                value={DOB}/>
            </Form.Field>

            <Form.Field>
                <lable>Photo URL:</lable>
                <input
                type="text"
                onChange = {(e) => setPhoto(e.target.value)}
                value={photo}/>
            </Form.Field>

            <Form.Field>
                <lable>IntakeDate</lable>
                <input
                type="text"
                onChange = {(e) => setIntakeDate(e.target.value)}
                value={intakeDate}
                />
            </Form.Field>

            <Form.Field>
                <lable>AdoptionDate: </lable>
                <input
                type="text"
                onChange = {(e) => setAdoptionDate(e.target.value)}
                value={adoptionDate}/>
            </Form.Field>

            <Form.Field>
                <lable>What heartworm prevention or treatment is being is administered?</lable>
                <input
                type="text"
                onChange = {(e) => setHeartwormProduct(e.target.value)}
                value={heartwormProduct}/>
            </Form.Field>

            <Form.Field>
                <lable>What is this dogs temperament? </lable>
                <input
                type="text"
                onChange = {(e) => setTemperament(e.target.value)}
                value={temperament}/>
            </Form.Field>

            {/* <Form.Input>
                <lable>Are vaccines up to date?</lable>
                <input
               />
            </Form.Input> */}


            <Form.Field>
                <lable>What vaccines have been given? </lable>
                <input
                type="text"
                onChange = {(e) => setVaccinesGiven(e.target.value)}
                value={vaccinesGiven}/>
            </Form.Field>

            <Form.Field>
                <lable>Spay/Neuter date? </lable>
                <input
                type="text"
                onChange = {(e) => setSpayNeuterDate(e.target.value)}
                value={spayNeuterDate}/>
            </Form.Field>

            <Form.Field>
                <Checkbox lable="Is this dog available for adoption?"/>
            </Form.Field>

            <Form.Field>
                <Checkbox lable="Are vaccines up to date"/>
            </Form.Field>
            
            <Form.Field>
                <Checkbox lable="Is this dog spayed or neutered?"/>
            </Form.Field>

            <Form.Field>
                <Checkbox lable="Is this dog positive for heart-worms?"/>
            </Form.Field>

            <Form.Field>
                <Checkbox lable="Is this dog being treated for heartworm prevention?"/>
            </Form.Field>
            
        </Form>   
        </div>
    </Container>
        
        )
      }
      
      export default CreateDog
        // <form onSubmit={(e) => handleNewDog(e)}>
        //     <label  htmlFor="name">Name: </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setDogName(e.target.value)}
        //     value={dogName}
        //     />

        //     <label>Breed: </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setBreed(e.target.value)}
        //     value={breed}
        //     />

        //     <label>Estimated age/DOB- </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setDOB(e.target.value)}
        //     value={DOB}
        //     />

        //     <label>Photo URL: </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setPhoto(e.target.value)}
        //     value={photo}
        //     />

        //     <label>Is this dog available for adoption?</label>
        //     <input 
        //     name="available"
        //     type="checkbox" 
        //     label="Is this dog available for adoption"
        //     checked={available}
        //     onChange={e => setAvailable(e.target.checked)}
        //     />

        //     <label>intakeDate: </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setIntakeDate(e.target.value)}
        //     value={intakeDate}
        //     />

        //     <label>adoptionDate: </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setAdoptionDate(e.target.value)}
        //     value={adoptionDate}
        //     />


        //     <label>Are vaccines up to date?</label>
        //     <input 
        //     name="vaccinesUpToDate?"
        //     type="checkbox" 
        //     label="Are vaccines up to date?"
        //     checked={vaccinesUpToDate}
        //     onChange={e => setVaccinesUpToDate(e.target.checked)}
        //     />

        //     <label>What vaccines have been given? </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setVaccinesGiven(e.target.value)}
        //     value={vaccinesGiven}
        //     />
        //     <label>Is this dog spayed or neutered?</label>
        //     <input 
        //     name="spayed or neutered"
        //     type="checkbox" 
        //     label="Is this dog spayed or neutered"
        //     checked={spayNeuter}
        //     onChange={e => setSpayNeuter(e.target.checked)}
        //     />

        //     <label>Spay/neuter date? </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setSpayNeuterDate(e.target.value)}
        //     value={spayNeuterDate}
        //     />

        //     <label>Is this dog positive for heart-worms?</label>
        //     <input 
        //     name="heartwormStatus"
        //     type="checkbox" 
        //     label="Is this dog positive for heart-worms?"
        //     checked={heartwormPrevention}
        //     onChange={e => setHeartwormStatus(e.target.checked)}
        //     />

        //     <label>What heartworm prevention or treatment is being is administered? </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setHeartwormProduct(e.target.value)}
        //     value={heartwormProduct}
        //     />
        
        //     <label>Is this dog being treated for heartworm prevention?</label>
        //     <input 
        //     name="heartwormPrevention"
        //     type="checkbox" 
        //     label="Is this dog being treated for heartworm prevention?"
        //     checked={heartwormPrevention}
        //     onChange={e => setHeartwormPrevention(e.target.checked)}
        //     />

        //     <label>What is this dogs temperament? </label>
        //     <input 
        //     type="text"
        //     onChange = {(e) => setTemperament(e.target.value)}
        //     value={temperament}
        //     />
        // <button type='submit'>add dog to records</button>
        // </form> 