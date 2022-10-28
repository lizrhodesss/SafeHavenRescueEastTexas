import React from 'react'
import dog1 from '../images/about_dog1.jpeg'
import dog2 from '../images/about_dog2.jpeg'
import dog3 from '../images/about_dog3.jpeg'

function About() {


//for each dog i want to see the image only

  return (
    <>
     <div>
      <br></br>
        <h2>ABOUT US</h2>
        <h2>Safe Haven Rescue of East Texas </h2>
        <h3>is an animal rescue organization in Wood County Texas whose mission is to reduce the population of unwanted dogs and cats. To stop animal cruelty of negelected and abandoned animals through spaying/neutering initiatives; concentrating on low-income households. The number of animals in Wood County in need of help are estimated at 3,500 dogs and many thousands of feral cats. Safe Haven Rescue of East Texas has no employees, all rescue efforts are accomplished and paid for by volunteers that have a heart for animals , often working with local sheriff's department to pick up stray animals, provide veterinary care (shots,spaying/neutering, parasite treatment etc.), and return to owners or a rescue facility until adopted.</h3>
        <figure>
            <img src={dog1}/>
            Suzie came to us when a breeder surrendered her due to her inability to breed; now, shes treated like the queen she truly is. 
        </figure>
        <figure>
            <img src={dog2}/>
            Brian was found roaming the country roads, now he gets to ride in style and never worry about puppies he can't provide for cuz he has no wallet.
        </figure>
        <figure>
            <img src={dog3}/>
            Lucky had a rough start when he came to us with severe mange and starving. would you just look at that smile now?!
        </figure>
        
     </div>
    </>
  )
}


export default About
