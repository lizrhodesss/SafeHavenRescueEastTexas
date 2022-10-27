import React from 'react'

function AdoptCard({adoptForm}) {

// console.log(adoptForms.name)

// if(dogs){
// return
// const dog = dogs.map(dog => <img alt="photo unavailable" src={dog.photo}/>)}

return (
  

    <div>
         {/* {dog} */}
         {/* <div>Adopter Name: {dog} </div> */}
{/* {dogs ? dogs.map(dog => <img alt="photo unavailable" src={dog.photo}/>) : null} */}
<img src={adoptForm.dog.photo} alt="photo unavailable"/>
<p>Adopter Name: {adoptForm.name}</p>
<p>Dog name: {adoptForm.dog.name}</p>
<p>other pets? {adoptForm.otherPets}</p>
<p>children? {adoptForm.children}</p>
<p>why become a forever home? {adoptForm.whyForeverHome}</p>
<p>type of work? {adoptForm.children}</p>
<p>adopters email: {adoptForm.email}</p>
    </div>
  )
}

export default AdoptCard