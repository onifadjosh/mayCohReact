import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AllStudents = () => {
    const [allStudents, setallStudents] = useState([])
    let token = localStorage.getItem('token')

    useEffect(()=>{
        const fetchStudents= async()=>{
            let response = await axios.get('http://localhost:5000/students/allStudents', 
                {
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                }
            )
            console.log(response.data);
            setallStudents(response.data);
        }

        fetchStudents()
    }, [])

  return (
    <div>
        {allStudents.map((student, index)=>(
            <div key={index}>
                <p>Name: {student.firstName+ ' '+ student.lastName}</p>
            </div>
        ))}
    </div>
  )
}

export default AllStudents