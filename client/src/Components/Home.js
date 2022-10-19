import React from 'react'
import happyDog from '../images/Happy_dog.png'



function Home() {




  return (
    <div>
      <h1>Home</h1>
      {/* <img src={'.../public/Happy_dog.png'}/>  */}
      {/* <img src="/client/public/doggo.jpeg"/> */}
      <img src={happyDog}/>
     
      {/* <img src="https://petsguidemagazine.com/wp-content/uploads/2018/08/scoop_topspot_650-x-3201.png"/> */}
      
      <h3>Our mission is to reduce the number of abandoned animals caused by an abundance of unplanned litters through neutering and
spaying program that concentrates on low-income households. To educate the public on care of animals and the need for
spaying/neutering.</h3>
      <button>Adopt</button>
      <button>Donate</button>
    </div>
  )
}


export default Home
