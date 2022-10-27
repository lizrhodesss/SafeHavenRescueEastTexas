import React, { useState, useEffect } from 'react'
import AdoptCard from './AdoptCard'

function AdoptionCardContainer({dogs}) {


    const [adoptForms,setAdoptForms] = useState([])
  

    useEffect(() => {
      fetch("/adoption_forms")
      .then((resp) => resp.json())
      .then(data => setAdoptForms(data))
    },[])


  return (
    <div>
        {adoptForms.map(adoptForm => <AdoptCard  adoptForm={adoptForm} adoptForms={adoptForms} dogs={dogs} key={adoptForms.id}/>)}
    </div>
  )
}

export default AdoptionCardContainer