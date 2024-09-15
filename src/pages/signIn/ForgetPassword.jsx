import React from 'react'

function ForgetPassword() {
    const handleSubmit=()=>{
        
    }
    const handleForgetUsername=()=>{
        
    }
    const handleForgetOTP=()=>{
        
    }
  return (
    <div className='forget'>
        <div className='forgethead'><h1>Forget Password</h1></div>
        <div className='forgetbody'>
             <form >  {/*onSubmit={handleSubmit} */}
                <label htmlFor="username">User name:</label>
                <input type="email"
                        name="username" 
                        id="username" 
                        //value={} 
                        //onChange={handleForgetUsername} 
                        required/>
                <label htmlFor="otp">Enter Otp:</label>
                <input  type="number" 
                        name="otp" 
                        id="otp"
                        //value={}
                        //onChange={handleForgetOTP} 
                        required/>
                <button type="submit">submit</button>
            </form>
        </div>

    </div>
  )
}

export default ForgetPassword