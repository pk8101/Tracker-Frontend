import React, { useState } from 'react'

function SignUp() {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[rePassword,setRePassword]=useState('')
  const[msg,setMsg]=useState('') //add this variable to store it is not persisting...
  const handleFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleRePassword=(e)=>{
    setRePassword(e.target.value)
  }
  const handleSubmit =()=>{
    if (password===rePassword){
      //handle post req for submission
      setMsg('user created successfully')
    }
    else{
      setMsg('password must be same')
    }

    

  }
  return (
    <div className='signup'>
      <div className='signupheader'>Heyy Tracker create you finance account fast!!</div>
      <div className='signupbody'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">first name:</label>
          <input  type="text" 
                  name="first_name" 
                  id="first_name"
                  value={firstName}
                  onChange={handleFirstName}
                  placeholder='enter first name' 
                  required/>
          <label htmlFor="last_name">last_name:</label>
          <input  type="text" 
                  name="last_name" 
                  id="last_name"
                  value={lastName}
                  onChange={handleLastName}
                  placeholder='enter last name' 
                  required/>
          <label htmlFor="email">email:</label>
          <input  type="email" 
                  name="email" 
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder='enter email' 
                  required/>
          <label htmlFor="password">password:</label>
          <input  type='password'
                  name="password" 
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder='enter password' 
                  required/>
          <label htmlFor="re-password">confirm password:</label>
          <input  type='password'
                  name="re-password" 
                  id="re-password"
                  value={rePassword}
                  onChange={handleRePassword}
                  placeholder='confirm password' 
                  required/>
          <button type="submit">submit</button>
        </form>
      </div>
      <div className='signuptail'>{msg}</div> 
    </div>
  )
}

export default SignUp