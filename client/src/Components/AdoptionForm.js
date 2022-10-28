import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'


function AdoptionForm() {
    const [adoptFormPatch, setAdoptFormPatch] = useState({})
    const [adoptName, setAdoptName] = useState("")
    const [adoptEmail, setAdoptEmail] = useState("")
    const [whyForeverHome, setWhyForeverHome] = useState("")
    const [work, setWork] = useState("")
    const [children, setChildren] = useState(false)
    const [pets, setPets] = useState(false)


    let {id} = useParams()

function handleAdoptionForm(e) {
    e.preventDefault()


    fetch(`/adoption_forms/${id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({name: adoptName, email: adoptEmail, whyForeverHome : whyForeverHome, work : work, children : children, pets : pets})
  })
      .then(resp => resp.json())
      .then(data => setAdoptFormPatch(data))

}


// function handleChildren(e) {
//     setChildren(children => !children) 
// }

// function handlePets(e) {
//     setPets(pets => !pets) 
// }

  return (
    // <div>
        <Container fluid textAlign="center">
            <Header as='h1'>Adoption Application </Header> <br></br>

<div class="ui one column center aligned page grid">
<Form size="medium" onSubmit={handleAdoptionForm} success="true">
        <Form.Input>
            <label>Name: </label>
            <input
            type="text"
            onChange = {(e) => setAdoptName(e.target.value)}
            value={adoptName}/>
        </Form.Input>
            
        <Form.Input>
            <label>Email: </label>
            <input
            type="text"
            onChange = {(e) => setAdoptEmail(e.target.value)}
            value={adoptEmail}/>
        </Form.Input>

        <Form.Field>
            <label>Tell us about why you want to become a forever home: </label>
            <input
            type="text"
            onChange = {(e) => setWhyForeverHome(e.target.value)}d
            value={whyForeverHome}/>
        </Form.Field>

        <Form.Field>
        <label htmlFor="work">tell us about your work, do you work from home? </label>
            <input 
            type="text"
            onChange = {(e) => setWork(e.target.value)}
            value={work}/>
        </Form.Field>

        <Form.Field>
            <Checkbox label="Do you have children?"/>
                {/* onChange={e => handleChildren(e)} */}
        </Form.Field>     

        <Form.Field>
            <Checkbox label="Do you have other pets?"/>
                {/* onChange={e => handleChildren(e)} */}
        </Form.Field>     
        <Button type="submit">submit you application for adoption!</Button>
    </Form>
    </div>


        </Container>
    // </div>
   


// <form onSubmit={handleAdoptionForm}>
//             <label  htmlFor="name">Name: </label>
//             <input 
//             type="text"
//             onChange = {(e) => setAdoptName(e.target.value)}
//             value={adoptName}
//             />
//            <label htmlFor="email">Email: </label>
//             <input 
//             type="text"
//             onChange = {(e) => setAdoptEmail(e.target.value)}
//              value={adoptEmail}
//              />
//              <label htmlFor="whyForeverHome">tell us about why you want to become a forever home: </label>
//              <input 
//             type="text"
//             onChange = {(e) => setWhyForeverHome(e.target.value)}
//             value={whyForeverHome}
//              />
//               <label htmlFor="work">tell us about your work, do you work from home? </label>
//             <input 
//             type="text"
//              onChange = {(e) => setWork(e.target.value)}
//              value={work}
//             />
//              <label htmlFor="children">Do you have Children? </label>
//              <input 
//             name="children?"
//             type="checkbox" 
//             label="Do you have children?"
//             checked={children}
//             onChange={e => handleChildren(e)}
//              >
//              </input>
//              <input 
//              name="pets??"
//             type="checkbox" 
//              label="Do you have other pets"
//              checked={pets}
//              onChange={e => handlePets(e)}
//             />
//             <button type="submit">submit you application for adoption! </button>
//          </form> 










        
    
  )
}


export default AdoptionForm



{/* <Form onSubmit={handleAdoptionForm}>
<Form.Field>
    <label>Name: </label>
    <input
    type="text"
    onChange = {(e) => setAdoptName(e.target.value)}
   value={adoptName}/>
</Form.Field>

<Form.Field>
    <label>Email: </label>
    <input
    type="text"
    onChange = {(e) => setAdoptEmail(e.target.value)}
    value={adoptEmail}/>
</Form.Field>

<Form.Field>
    <label>tell us about why you want to become a forever home: </label>
    <input
    type="text"
   onChange = {(e) => setWhyForeverHome(e.target.value)}d
    value={whyForeverHome}/>
</Form.Field>

<Form.Field>
   <label>tell us about your work, do you work from home? </label>
    <input
   type="text"
    onChange = {(e) => setWork(e.target.value)}
    value={work}/>
</Form.Field>

<Form.Field>
<Checkbox label='Do you have Children?' />
    <input
  name="children?"
label="Do you have children?"
checked={children}
onChange={e => handleChildren(e)}/>
</Form.Field>

<Form.Field>
<Checkbox label='Do you have any other pets?' />
   <input
name="pets??"
type="checkbox"
label="Do you have other pets"
checked={pets}
    onChange={e => handlePets(e)}/>
</Form.Field>

<Form.Field>
   <Button type="submit">submit you application for adoption! </Button>
</Form.Field>

</Form> */}
