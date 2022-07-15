import React from 'react'

export const Propsdemo = (props) => {
    const data=[
        {
            name:"Aradhana",
            age:23,
            city:"Dhanbad"

        },
        {
            name:"XYZ",
            age:25,
            city:"Pune "
        },
        {
            name:"ABC",
            age:30,
            city:"Mumbai"
        }
    ]
  return (
    <>
    {data.map((item)=> {return ( <h1>Name: {item.name} <br></br> Age:{item.age}<br></br> City : {item.city}</h1> )})}
    </>
  )
}
