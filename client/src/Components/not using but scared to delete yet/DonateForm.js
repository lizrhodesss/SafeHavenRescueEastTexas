

//moved everything here to <Donate /> delete this component later


// import React, { useState } from "react";


// function DonateForm() {
//     const [formPost, setFormPost] = useState({})
//     const [donateName, setDonateName] = useState("") 
//     const [donateEmail, setDonateEmail] = useState("")
//     const [amount, setAmount] = useState(null)
  

//     function handleDonateForm(e) {
//         e.preventDefault()

//         fetch("/donation_forms", {
//             method: "PATCH",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({name: donateName, email: donateEmail, amount: amount})
//         })
//             .then(resp => resp.json())
//             .then(data => setFormPost(data))

//     }
    





//   return (
//     <>
//         <form onSubmit={handleDonateForm}>
//             <label  htmlFor="name">Name: </label>
//             <input 
//             type="text"
//             onChange = {(e) => setDonateName(e.target.value)}
//             value={donateName}
//             />
//             <label  htmlFor="email">Email: </label>
//             <input 
//             type="text"
//             onChange = {(e) => setDonateEmail(e.target.value)}
//             value={donateEmail}
//             />
//             <label  htmlFor="amount">Amount: </label>
//             <input 
//             type="text"
//             onChange = {(e) => setAmount(e.target.value)}
//             value={amount}
//             />
//             <button type="submit">submit</button>
        
//         </form>
//     </>
//   )
// }


// export default DonateForm
