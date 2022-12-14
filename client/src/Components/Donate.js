

import React, { useState } from 'react'
import {useParams} from 'react-router-dom'




function Donate() {
    const [formPatch, setFormPatch] = useState({})
    const [donateName, setDonateName] = useState("") 
    const [donateEmail, setDonateEmail] = useState("")
    const [amount, setAmount] = useState(10)
    // console.log(id)
    
    
    let {id} = useParams()

    function handleDonateForm(e) {
        e.preventDefault()

        fetch(`/donation_forms/${id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name: donateName, email: donateEmail, amount: amount})
        })
            .then(resp => resp.json())
            .then(data => setFormPatch(data))

    }
    
  return (
    <>
        <form onSubmit={handleDonateForm}>
            <label htmlFor="name">Name: </label>
            <input 
            type="text"
            onChange = {(e) => setDonateName(e.target.value)}
            value={donateName}
            />
            <label htmlFor="email">Email: </label>
            <input 
            type="text"
            onChange = {(e) => setDonateEmail(e.target.value)}
            value={donateEmail}
            />
            <label htmlFor="amount">Amount: </label>
            <input 
            type="text"
            onChange = {(e) => setAmount(e.target.value)}
            value={amount}
            />
            <button type="submit">submit</button>
        </form>
    </>
  )
}

export default Donate
