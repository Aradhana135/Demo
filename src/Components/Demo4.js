import React, { useState } from 'react'

const Demo4 = () => {
    const[value,setValue]=useState([])
    const handler=()=>{
setValue([...value,{value}])
    }
    console.log(value)
  return (
    <>
    <input placeholder={"enter the random numbers"}type={"text"} onChange={(e)=>e.target.value}/>
    <button onClick={handler}>Submit</button>
    </>
  )
}

export default Demo4