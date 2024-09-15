import React, { useState } from 'react'
import {Link} from 'react-router-dom';

function SignIn() {

  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')

  const handleUserName=(e)=>{
    let x=e.target.value;
    setUserName(x)
  
  }
  const handlePassword=(e)=>{
    let x=e.target.value;
    setPassword(x)
  
  }
  const handleSubmit=()=>{
    //need to handle submit that username and password need to give to backend
    console.log(userName,password)
  }
  return (
    <div className='signin'>
        <div className='welcomemessage'>Heyy Tracker welcome back !!</div>
        <div className='details'>
            <div className='signinhead'><h1>SIGNIN</h1></div>
            <div className='signinbody'>
                 <form action="we can write api address to send data but onSubmit will handle in react" method="POST" onSubmit={handleSubmit}  > {/*1.onSubmit={} handle this submitr button after  2.*/}
                    <label htmlFor="username">User Name:</label>
                    <input type="text" 
                            id='username' 
                            name='username' //for backend same name
                            value={userName} 
                            onChange={handleUserName}
                            placeholder='enter user name..' 
                            required />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                            id='password' 
                            name='password' //for backend same name
                            value={password} 
                            onChange={handlePassword}
                            placeholder='type your password..' 
                            required/>
                    
                    <button type="submit">SignIn</button>
                </form>
            </div>
            <div className="signintail">
                <Link to="/forgetpassword">forget password?</Link>
            </div>
        </div>
    </div>
  )
}

export default SignIn