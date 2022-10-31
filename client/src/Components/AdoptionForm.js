import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { Button, Checkbox, Form, Container, Header, Message } from 'semantic-ui-react'


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
        <Message
            success
            header="Form Completed!" 
            content="information was successfully saved"/>  
        <Button type="submit">submit you application for adoption!</Button>
    </Form>
    </div>
</Container>

  )
}


export default AdoptionForm
