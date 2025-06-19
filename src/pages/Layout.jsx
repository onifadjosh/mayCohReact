import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex w-100 ' style={{height:'100vh'}}>
        <div className='sidebar bg-primary text-light p-5' style={{flexBasis:'20%'}} >
            <Link to={'/'} className='text-dark'>Home</Link> <br />
            <Link to={'/about'} className='text-dark'>About</Link>
        </div>

        <div style={{flexBasis:'80%'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout