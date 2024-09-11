import React from 'react'

function SignIn() {
  return (
    <div className='signin'>
        <div className='welcomemessage'>Heyy Tracker welcome back !!</div>
        <div className='details'>
            <div className='signinhead'><h1>SIGNIN</h1></div>
            <div className='signinbody'>
                 <form action="we can write api address to send data but onSubmit will handle in react" method="POST" > {/*onSubmit={} handle this submitr button after*/}
                    <label htmlFor="username">User Name:</label>
                    <input type="text" 
                            id='username' 
                            name='username' //for backend same name
                            // value={} 
                            // onChange={}
                            placeholder='enter user name..' 
                            required />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                            id='password' 
                            name='password' //for backend same name
                            // value={} 
                            // onChange={}
                            placeholder='type your password..' 
                            required/>
                    
                    <button type="submit">SignIn</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn