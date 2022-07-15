import React, { useState } from 'react'
import { Demo3 } from './Demo3'
export const Demochild3 = () => {
    const [greeting,setgreeting]=useState("Hello")
  return (
    <>
    <Demo3 name={'Aradhana'} greeting={greeting}/>
    </>
  )
}
