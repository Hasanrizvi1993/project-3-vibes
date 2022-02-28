import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './login.scss';
import { init } from 'ityped';

export const Login = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();
// ref for ityped text
const textRef = useRef()

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
}


  return (
    <div className="login" >
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo-text">MUSIC NEVER SOUNDED SO...
          <span ref={textRef} className="typed-text"></span></h3>
          
        </div>
          <div className="login-right">
          <form className="login-box" onSubmit={handleLogin} >
            <input type='email' placeholder="Email" 
            className="login-input" ref={email} required />
            <input type="password" placeholder="Password" 
            className="login-input" ref={password} required />
            <button type='submit' className="login-btn">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
          </form>
          <span className="login-forgot">Don't have an account?<Link to={"/register"}>Sign Up</Link></span>
         </div>
      </div>
    </div>
  )
}
