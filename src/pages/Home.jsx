import React from 'react'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'

const Home = () => {
  const firstName = useSelector((state)=>state.pamilerin.firstName)
  
  return (
    <div>
      

        <h1 style={{marginTop:'100px'}}>Home my home, when shall I see my home.......{firstName}</h1>
    </div>
  )
}

export default Home