import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <nav className='bg-warning fixed-top d-flex justify-content-between align-items-center px-2 py-2' style={{width:'100%'}}>
        <div>LOGO</div>

        <div className='d-flex gap-3'>
            <a href="">home</a>

            <a href="">about</a>


            <a href="">contact us</a>
        </div>


       <div>
         <button>Log in</button>

         <Button/>
       </div>

    </nav>
  )
}

export default NavBar