import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    let params = useParams()
    console.log(params.username)
    let {username, id} = params
    console.log(id)

   let navigate=  useNavigate()

   const logout=()=>{
    navigate('/')
   }
  return (
    <div>
        welcome to Instagram {username}


        <button className='btn btn-danger' onClick={logout}>log out</button>
    </div>
  )
}

export default User