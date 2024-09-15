import './App.css';
import { SignIn,SignUp } from './pages/Main';
import ForgetPassword  from './pages/signIn/ForgetPassword';
import CreateNewPassword from './pages/signIn/CreateNewPassword';
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div>
    <Router>

      <Link to="/">HOME</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
      <Routes>
        <Route path='/signin' element={<SignIn/>} exact/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/resetpassword' element={<CreateNewPassword/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
