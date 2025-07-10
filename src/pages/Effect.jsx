import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [name, setname] = useState('Onifade')
    const [number, setnumber] = useState(0)

    const changeName=()=>{
        setname('Pamilerin')
    }

   useEffect(()=>{
    console.log('use effect ran')
   },[number])

//    useEffect(() => {
 
   
   
//    }, [])
   
    
    
  return (


    <div>

        <h1 onClick={changeName}>{name}</h1>

        <h1 onClick={()=>setnumber(number+1)}>{number}</h1>
    </div>
  )
}

export default Effect