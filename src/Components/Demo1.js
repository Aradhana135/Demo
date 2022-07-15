import React, { useEffect, useState } from 'react'

const Demo1 = () => {
    const [name,setName]=useState("")
    useEffect(()=>{
        setTimeout(()=>{
setName("Aradhana")
        },5000)
    }, [])
    console.log(name);
  return (
    <>
    <h1> name {name}</h1>
    </>
  )
}

export default Demo1