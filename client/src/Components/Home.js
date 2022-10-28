import React from 'react'
import happyDog from '../images/Happy_dog.png'
import About from './About'


function Home() {




  return (
    <div>
          <br></br>
      <h3>Our mission is to reduce the number of abandoned animals caused by an abundance of unplanned litters through neutering and
          spaying program that concentrates on low-income households. To educate the public on care of animals and the need for
          spaying/neutering.
      </h3>
          <br></br>
      <img src={happyDog}/> 
      <About />     
    </div>
  )
}


export default Home
