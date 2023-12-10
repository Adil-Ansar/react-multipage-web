import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data = {
    name: "Home Page",
    image: "./images/hero.jpg"
  }

  return (
    <div><HeroSection {...data}/></div>
  )
}

export default Home