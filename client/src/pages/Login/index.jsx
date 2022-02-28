import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './login.scss';

export const Login = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();


// login handler
const handleLogin = (e) => {
  e.preventDefault()
}


  return (
    <div className="login" >
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo-text">VIBE$</h3>
          <span className="loginDesc">
          MUSIC NEVER SOUNDED SO...
          </span>
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
