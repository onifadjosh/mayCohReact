import React, { useState } from 'react'

const AddStudent = ({saveStudent}) => {
    const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [email, setemail] = useState("");
      const [profileImage, setprofileImage] = useState("");
      const [password, setpassword] = useState("");

      let student = {
      firstName,
      lastName,
      email,
      password,
      profileImage,
    };

  return (
    <div>
        <input
        type="text"
        placeholder="first name"
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="profile image link"
        onChange={(e) => setprofileImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={()=>saveStudent(student)}>checkk</button>

      <hr />
    </div>
  )
}

export default AddStudent