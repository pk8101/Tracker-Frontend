import React from 'react'

function SignUp() {
  return (
    <div className='signup'>
      <div className='signupheader'>Heyy Tracker create you finance account fast!!</div>
      <div className='signupbody'>
        <form method="post">
          <label htmlFor="first_name">first name:</label>
          <input  type="text" 
                  name="first_name" 
                  id="first_name"
                  //value={}
                  //onChange={}
                  placeholder='enter first name' 
                  required/>
          <label htmlFor="last_name">last_name:</label>
          <input  type="text" 
                  name="last_name" 
                  id="last_name"
                  //value={}
                  //onChange={}
                  placeholder='enter last name' 
                  required/>
          <label htmlFor="email">email:</label>
          <input  type="email" 
                  name="email" 
                  id="email"
                  //value={}
                  //onChange={}
                  placeholder='enter email' 
                  required/>
          <label htmlFor="password">password:</label>
          <input  type='password'
                  name="password" 
                  id="password"
                  //value={}
                  //onChange={}
                  placeholder='enter password' 
                  required/>
          <label htmlFor="re-password">confirm password:</label>
          <input  type='password'
                  name="re-password" 
                  id="re-password"
                  //value={}
                  //onChange={}
                  placeholder='confirm password' 
                  required/>
          <button type="submit">submit</button>
        </form>
      </div>
      <div className='signuptail'></div> 
    </div>
  )
}

export default SignUp