import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:async(values)=>{
            console.log(values)
            let response = await axios.post('http://localhost:5000/user/login', values)
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            navigate('/fetchStudents')
            
        }
    })

    // const [email, setemail] = useState('')  
    // const [password, setpassword] = useState('')
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to login</p>
        </div>

        <div    className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={formData.email}
            //   onChange={(e)=>setemail(e.target.value)}
            onChange={formik.handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleInputChange}
            onChange={formik.handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                // checked={formData.rememberMe}
                // onChange={handleInputChange}
                
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button" onClick={formik.handleSubmit}>
            Login
          </button>
        </div>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="#signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login