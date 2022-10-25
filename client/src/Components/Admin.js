import React, { useEffect, useState } from 'react'
import DonateCard from './DonateCard'
import AdminPetCard from './AdminPetCard'


function Admin({dogs}) {



//   useEffect(() => {
//     fetch("/donation_forms")
//     .then((resp) => resp.json())
//     .then(donateAdmin => setDonateAdmin(donateAdmin))
//   },[])
  




  return (
    <>
      {/* {donateAdmin.map(donate => <DonateCard />)} */}
      {dogs.map(dog => <AdminPetCard  dogs={dogs} dog={dog} key={dog.id}/>)}
      <DonateCard />
      {/* <AdoptionForm /> */}
    </>
  )
  }
  
  
  export default Admin













  // const handleDonateAdmin = {
  //   //get to donation_forms [index, show, delete, update]
  // const donationsList = donationForms.map((donation) => 
  //   <DonationItem key={}

  // }


//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

  // const handleAdoptAdmin = {
  //   //get to adoption_forms [full crud]
  // }

  // const handleDogs = {
  //   //props-dogs from <App/>, POST/PATCH/DELETE to '/dogs'
  //     //filter by available, heartworm status, spay/neuter status, [bonus, add a column to table that allows a good with other pets and kids], sort by intake date (maybe this amount of sorting/filtering should move to the backend)
  // }



  


// <button type="submit" onClick={handleDonateAdmin}>see completed donations</button>
//  <button type="submit" onClick={handleAdoptAdmin}>see adoption applications</button>
//  <button type="submit" onClick={handleDogs}>add and edit pet</button> 