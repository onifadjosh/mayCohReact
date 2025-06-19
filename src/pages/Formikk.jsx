import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formikk = () => {

    let formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },

        onSubmit:(values)=>{
            console.log(values)
        },
        validationSchema: yup.object({
            firstName: yup.string('input your first name').required('first name is required'),
            lastName: yup.string('input your last name').required('last name is required'),
            email: yup.string('input your email').required('email  is required'),
            password: yup.string('input your password').required('password is required')
        })
    })

    // console.log(formik.values)
    console.log(formik.errors)

  return (
    <div>
        <input type="text" placeholder='firstname' name='firstName' onChange={formik.handleChange}/>
        <input type="text" placeholder='lastname' name='lastName'  onChange={formik.handleChange}/>
        <input type="email" placeholder='email' name='email'  onChange={formik.handleChange}/>
        <input type="text" placeholder='password' name='password'  onChange={formik.handleChange}/>



        <button type='submit' onClick={formik.handleSubmit}>submit</button>
    </div>
  )
}

export default Formikk