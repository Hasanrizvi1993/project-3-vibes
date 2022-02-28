import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import { Person } from '@material-ui/icons';



export const Register = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();
const username = useRef();


// register handler
const handleRegister = (e) => {
  e.preventDefault()
  // need to create new user
  // make api post call to create new user
  // redirect to login page
  // try/catch?
}


  return (
    <div className="register" >
      <h1>VIBE$</h1>
      <div className="register-wrapper">
      <Person htmlColor='seagreen' style={{fontSize: '65px'}}/>
      <h2>Sign Up for an Account</h2>
          <form className="register-box" onSubmit={handleRegister} >
          <input type='text' placeholder="Username" 
            className="register-input" ref={username} required />
            <input type='email' placeholder="Email" 
            className="register-input" ref={email} required />
            <input type="password" placeholder="Password" 
            className="register-input" ref={password} required />
            <button type='submit' className="register-btn">Sign Up</button>
          </form>
          <Link to={"/register"}><button className="register-login">Or Log In Here</button></Link>
      </div>
    </div>
  )
}
