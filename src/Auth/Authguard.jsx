import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Authguard = ({isAuth, redirect_path='/login', children}) => {
    // let navigate = useNavigate()
   
 if(!isAuth){
  return  <Navigate to={redirect_path} replace/>
 }

 return children?children: <Outlet/>

}

export default Authguard