import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name: "Adil Ansari",
    image: "./images/about.jpg"
  }
  return (
    <div><HeroSection {...data}/></div>
  )
}

export default About