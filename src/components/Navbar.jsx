import React from 'react'
import './nav.css'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import { SignIn,SignUp } from '../pages/Main';
import ForgetPassword  from '../pages/signIn/forgetpassword/ForgetPassword';
import CreateNewPassword from '../pages/signIn/resetpassword/CreateNewPassword';
import TrackerMain from './TrackerMain';
function Navbar() {
  return (
    
    <Router>
        <div className='navbar'>
            <div className='brand'>
                <Link to="/">Tracker</Link>
            </div>
            <div className='links'>
                <Link to="/signin">Signin</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>

        <Routes>
        <Route path='/' element={<TrackerMain/>} exact/>
            <Route path='/signin' element={<SignIn/>} exact/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/resetpassword' element={<CreateNewPassword/>}/>
        </Routes>
    </Router>
  )
}

export default Navbar