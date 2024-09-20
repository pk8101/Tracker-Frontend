import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './createnew.css'

function CreateNewPassword() {
  const[password,setPassword]=useState('')
  const[repassword,setRePassword]=useState('')
  const[details,setDetails]=useState('')
  const[msg,setMsg]=useState('')
  const Navigate=useNavigate()
  const handlePassword=(e)=>{
    let x=e.target.value;
    setPassword(x)
  
  }
  const handleRePassword=(e)=>{
    let x=e.target.value;
    setRePassword(x)
  
  }
  const handleSubmit=()=>{
    //need to handle submit that username and password need to give to backend
    if (password===repassword){
      setDetails({
        password:password
      })
      //need to handle post request 
      console.log(details)
      Navigate('/signin')
    }
    else{
      setMsg("mismatch of both passwords, it must be same!!")
    }
    
  }
  return (
    <div className='create'>
        <div className='createhead'><h1>ResetPassword</h1></div>
        <div className='createbody'>
            <form onSubmit={handleSubmit}>{/* onSubmit={} */}
                <label htmlFor="newpassword">New password:</label>
                <input  type="password" 
                        name="newpassword" 
                        id="newpassword"
                        value={password}
                        onChange={handlePassword} 
                        required/>

                <label htmlFor="renewpassword">Re-enter New password:</label>
                <input  type="password"
                         name="renewpassword" 
                         id="renewpassword"
                         value={repassword}
                        onChange={handleRePassword}
                        required 
                         />
                <button type="submit">submit</button>   
            </form>
        </div>
        <div className='createtail'>{msg}</div>
    </div>
  )
}

export default CreateNewPassword