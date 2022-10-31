import React, { useState, useEffect } from 'react'
import AdoptCard from './AdoptCard'
import { Card, Grid } from 'semantic-ui-react'

function AdoptionCardContainer({dogs}) {


    const [adoptForms,setAdoptForms] = useState([])
  

    useEffect(() => {
      fetch("/adoption_forms")
      .then((resp) => resp.json())
      .then(data => setAdoptForms(data))
    },[])


  return (
    <Grid divided='vertically'>
        {adoptForms.map(adoptForm => <AdoptCard  adoptForm={adoptForm} adoptForms={adoptForms} dogs={dogs} key={adoptForms.id}/>)}<br></br>
  </Grid>
  )
}

export default AdoptionCardContainer