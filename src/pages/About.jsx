import React from 'react'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'

const About = () => {
  const number = useSelector((state)=>state.pamilerin.count)
  console.log(number)
  return (
    <div>
  
        <h1>{number}</h1>
        <h1 style={{marginTop:'100px'}}>This is my about page</h1>
    </div>
  )
}

export default About