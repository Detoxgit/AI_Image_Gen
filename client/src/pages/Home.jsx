import React from 'react'
import Header from '../componenets/Header'
import Steps from '../componenets/steps'
import Description from '../componenets/Description'
import Testimonials from '../componenets/Testimonials'
import Generatebutton from '../componenets/Generatebutton'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <Description/>
        <Testimonials/>
        <Generatebutton/>
    </div>
  )
}

export default Home
