import React from 'react'
import { useState } from 'react'
export const Demo3 = (props) => {
    const name=props.name
  return (
    <>
<h1>{props.greeting}{name} </h1>
    </>
  )
}
