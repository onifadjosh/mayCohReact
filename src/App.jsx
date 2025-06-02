import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import DIsplayStudent from "./components/DIsplayStudent";
import AddStudent from "./components/AddStudent";

function App() {
  //React Hooks

  // const[initialState, funtionToChangeTheState]= useState(initialValue)
  
  const [allStudents, setallStudents] = useState([]);

  // const checkSom=(e)=>{
  //   console.log(e.target.value)

  //   setfirstName(e.target.value)

  // }

  const saveStudent = (student) => {
    // let student = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   profileImage,
    // };

    // allStudents.push(student)

    setallStudents([...allStudents, student]);
    console.log(allStudents);

    // let fruits = ['mango', 'apple', 'orange']
    // let newFruits = [...fruits, 'banana']
    // console.log(newFruits)
  };

  const deleteStudent=(index)=>{
    let newAllStudents = [...allStudents]
    newAllStudents.splice(index, 1)

    setallStudents(newAllStudents)
  }

  const editStudent=(index, newStudent)=>{
    let newAllStudents = [...allStudents]
    newAllStudents.splice(index, 1, newStudent)

    setallStudents(newAllStudents)
  }

  return (
    <>
      <AddStudent saveStudent={saveStudent}/>

      <DIsplayStudent allStudents={allStudents} deleteStudent={deleteStudent} editStudent={editStudent}/>
    </>
  );
}

export default App;
