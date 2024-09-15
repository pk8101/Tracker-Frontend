import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const[userName,setUserName]=useState('')
    const[otp,setOtp]=useState('')
    const[msg,setMsg]=useState('')
    const navigated=useNavigate()
    const handleSubmit=()=>{
      let x='1'
      if (x===otp){
        setMsg("otp..")
        navigated('/resetpassword')
        
      }
      else{
        setMsg("wrong otp..")
      }

    }
    const handleForgetUsername=(e)=>{
      setUserName(e.target.value)
    }
    const handleForgetOTP=(e)=>{
        setOtp(e.target.value)
    }
  return (
    <div className='forget'>
        <div className='forgethead'><h1>Forget Password</h1></div>
        <div className='forgetbody'>
             <form  onSubmit={handleSubmit}>  {/*onSubmit={handleSubmit} */}
                <label htmlFor="email">email:</label>
                <input type="email"
                        name="email" 
                        id="email" 
                        value={userName} 
                        onChange={handleForgetUsername}
                        placeholder='enter your email' 
                        required/>
                <label htmlFor="otp">Enter Otp:</label>
                <input  type="number" 
                        name="otp" 
                        id="otp"
                        value={otp}
                        onChange={handleForgetOTP}
                        placeholder='enter otp..' 
                        required/>
                <button type="submit">submit</button>
            </form>
        </div>
        <div className='forgettail'>{msg}</div>

    </div>
  )
}

export default ForgetPassword