import React, { useState } from 'react'



function AdoptionForm() {
    const [formPatch, setFormPatch] = useState({})
    const [adoptName, setAdoptName] = useState("")
    const [donateEmail, setDonateEmail] = useState("")
    const [whyForeverHome, setWhyForeverHome] = useState("")
    const [work, setWork] = useState("")
    const [children, setChildren] = useState(false)

function handleAdoptionForm(e) {
    e.preventDefault()


  return (
    <>
          <form onSubmit={handleAdoptionForm}>
            <label  htmlFor="name">Name: </label>
            <input 
            type="text"
            onChange = {(e) => setAdoptName(e.target.value)}
            value={adoptName}
            />
            <label htmlFor="email">Email: </label>
            <input 
            type="text"
            onChange = {(e) => setDonateEmail(e.target.value)}
            value={donateEmail}
            />
            <label htmlFor="whyForeverHome">tell us about why you want to become a forever home: </label>
            <input 
            type="text"
            onChange = {(e) => setWhyForeverHome(e.target.value)}
            value={whyForeverHome}
            />
             <label htmlFor="work">tell us about your work, do you work from home? </label>
            <input 
            type="text"
            onChange = {(e) => setWork(e.target.value)}
            value={work}
            />
            <input 
            type="checkbox" 
            value={children}
            checked={setChildren}>
            </input>
            <button type="submit">submit</button>
        </form>
    </>
  )
}


export default AdoptionForm