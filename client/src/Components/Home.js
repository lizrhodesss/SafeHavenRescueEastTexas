import React from 'react'
import happyDog from '../images/Happy_dog.png'
import About from './About'


function Home() {




  return (
    <div class="grid-container">
      <br></br>
      <div class="grid-item-1"> <h3>Our mission is to reduce the number of abandoned animals caused by an abundance of unplanned litters through neutering and
          spaying program that concentrates on low-income households. To educate the public on care of animals and the need for
          spaying/neutering.
      </h3>
      </div>
      <div className="home-photo" class="grid-item-2">
          <img src={happyDog}/> 
      </div>
      
      <About />     
    </div>
  )
}


export default Home


// <div class="grid-item-1"></div>
//       <div class="grid-item-1"></div>