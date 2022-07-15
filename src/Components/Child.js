import React from 'react'

export const Child = ({color1,color2}) => {

  return (
    <>
    <h1>This is Child Component</h1>
    <ol>
        <li>
          <h1 style={{color:color1}} >Hello users</h1>  
        </li>
        <li>
            <h1 style={{color:color2}}> Welcome</h1>
        </li>
    </ol>
    </>
  )
}
