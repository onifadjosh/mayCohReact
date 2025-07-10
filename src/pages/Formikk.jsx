import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Formikk = () => {
  let navigate = useNavigate();
  const [file, setfile] = useState(null)
  let token = localStorage.getItem('token')

   
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async () => {
      // console.log(values);
      // axios.post(URL, body, header)
   
      let firstName = formik.values.firstName
      let lastName = formik.values.lastName;
      let email = formik.values.email;
      let password = formik.values.password
      try {
        let response = await axios.post(
          "http://localhost:5000/user/signup",
         {firstName,lastName,email, password,profileImage:file},
          {headers:{
            "Authorization":`Bearer ${token}`,
            'Content-Type':'application/json'
          }}
        );
        console.log(response.data);
        if(response.data.status == false){
          navigate('/formik')
        }else{
          localStorage.setItem('token', response.data.token)
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },

  
    validationSchema: yup.object({
      firstName: yup.string().required("first name is required"),
      lastName: yup.string().required("last name is required"),
      email: yup
        .string()
        .email("input a valid email")
        .required("email is required"),
      password: yup.string().required("password is required"),
    }),
  });

  

  const handleFileChange=(e)=>{
      let image = e.target.files[0]

      let reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend=()=>{
        console.log(reader.result)
        setfile(reader.result)
      }
  }

  // console.log(formik.values)
  // console.log(formik.errors)
  console.log(formik.touched);
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`form-control w-50 mt-5  ${
          formik.touched.firstName && formik.errors.firstName
            ? "is-invalid"
            : ""
        }`}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <small className="text-danger">{formik.errors.firstName}</small>
      ) : (
        ""
      )}
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="last name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control w-50 "
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <small className="text-danger">{formik.errors.lastName}</small>
      ) : (
        ""
      )}
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control w-50"
      />
      {formik.touched.email && formik.errors.email ? (
        <small className="text-danger">{formik.errors.email}</small>
      ) : (
        ""
      )}
      <br />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control w-50"
      />
      {formik.touched.password && formik.errors.password ? (
        <small className="text-danger">{formik.errors.password}</small>
      ) : (
        ""
      )}
      <br />

      <input type="file" name="" id=""  onChange={(e)=>handleFileChange(e)}/>

      <button type="submit" onClick={formik.handleSubmit}>
        submit details
      </button>
    </div>
  );
};

export default Formikk;
