import React from 'react'
import { useState } from 'react'
const Child2 = () => {
  const [name,setName]=useState("")
    const [email,setEmail]=useState("")
const handlesubmit=(e)=>{
e.preventDefault()
}
console.log(name);
console.log(email);

  return (
    <>
    <form onSubmit={handlesubmit}>
<label  placeholder='Name' htmlFor='name' >Name</label>
<input type={"text"} value={name} onChange={(e)=>setName(e.target.value)}></input>
<label placeholder='email' htmlFor='email'>Email</label>
<input type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<button type={'submit'}>submit</button>
    </form>

    </>
  )
}

export default Child2;