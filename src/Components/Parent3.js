import React, { useState } from 'react'
import { Child } from './Child';

export const Parent3 = () => {
    const [fName,setfName]=useState("Aradhana ")
    const [lName,SetlName]=useState(" Sharma")
    console.log(fName);
    console.log(lName);

  return (
    <>
    <h1> this is a parent Component</h1>
    
    <ChildA fName={fName} lName={lName}/>
    </>
  )
}

function ChildA ({fName,lName}){
return(
    <>
    <h1> This is ChildA Component</h1>
    <ChildB fName={fName} lName={lName}/>
    </>
)
}

function ChildB ({fName,lName}){
    return(
        <>
        <h1>This is ChildB Component</h1>
        <ChildC fName={fName} lName={lName}/>
        </>
    )
}
function ChildC ({fName,lName}){
    return(
        <>
        <h1>This is ChildC Component</h1><br>
        </br>
        <h1>data from parent Component is as :</h1>
        <p>fName{fName} , lName{lName}</p>
        </>
    )
}