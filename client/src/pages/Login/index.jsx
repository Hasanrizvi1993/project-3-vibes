import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../stylesheets/index.scss';
import { init } from 'ityped';
import { useAuth } from '../../context/AuthContext';



export const Login = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();
// ref for ityped text
const textRef = useRef()
// message state hook
const [message, setMessage] = useState('');
// useAuth hook to pull loginCall from AuthContext
const { currentUser, loginCall, loginMessage } = useAuth();




// useEffect for ityped text
useEffect(()=> {
  init(textRef.current, {
    backDelay: 1000,
    backSpeed: 70,
    showCursor: false,
    strings: [" COOL", " DOPE"],
  })
}, [])



// login handler
const handleLogin = (e) => {
  e.preventDefault()
  const userFound = {
    email: email.current.value,
    password: password.current.value,
  }
  try {
    loginCall(userFound);  
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="login" >
      <h1>VIBE$</h1>
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo-text">MUSIC NEVER SOUNDED SO...
          <span ref={textRef} className="typed-text"></span></h3>
        </div>
          <div className="login-right">
            <h2>Log In to Your Account</h2>
            <div className="login-form-message">
          {loginMessage && <span className="post-img-text" style={{color:'crimson'}}>{loginMessage}</span>}
          </div>
          <form className="login-box" onSubmit={handleLogin} >
            <input type='email' placeholder="Email" 
            className="login-input" ref={email} required />
            <input type="password" placeholder="Password" 
            className="login-input" ref={password} required />
            <button type='submit' className="login-btn">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
          </form>
          <span className="login-register">Don't have an account? <Link to={"/register"}>Sign Up</Link></span>
         </div>
      </div>
    </div>
  )
}
