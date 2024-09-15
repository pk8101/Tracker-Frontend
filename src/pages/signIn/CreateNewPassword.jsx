import React from 'react'

function CreateNewPassword() {
  return (
    <div className='create'>
        <div className='createhead'><h1>ResetPassword</h1></div>
        <div className='createbody'>
            <form method="post" >{/* onSubmit={} */}
                <label htmlFor="newpassword">New password:</label>
                <input  type="password" 
                        name="newpassword" 
                        id="newpassword"
                        //value={}
                        //onChange={} 
                        required/>

                <label htmlFor="renewpassword">Re-enter New password:</label>
                <input  type="password"
                         name="renewpassword" 
                         id="renewpassword"
                         //value={}
                        //onChange={}
                        required 
                         />
                <button type="submit">submit</button>   
            </form>
        </div>
    </div>
  )
}

export default CreateNewPassword