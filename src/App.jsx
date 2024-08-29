import { useState } from 'react'
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './App.css'
// import SignupPage from "./pages/Signup";
// import SigninPage from "./pages/Signin";
import AuthPage from "./pages/AuthPage"
const auth=getAuth(app);

function App() {
  const signupUser=()=>{
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((value)=>{console.log(value);
    })
  }

  

  return (
    <div className='App'>
      <AuthPage/>
      
    </div>
  )
}

export default App
