import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../stylesheets/index.scss"
import { Person } from '@material-ui/icons';
import axios from 'axios';

// SERVER API URL
const apiUrl = "http://localhost:4000/api"

export const Register = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();
const userName = useRef();
const name = useRef();

// useNavigate hook for page redirect
const navigate = useNavigate();

// register handler
const handleRegister = async (e) => {
  e.preventDefault()
  const user = {
      name: name.current.value,
      userName: userName.current.value,
      email: email.current.value,
      password: password.current.value,
  }
  try {
    await axios.post(`${apiUrl}/auth/register`, user)
    navigate("/login")
  } catch (err) {
    console.log(err)
  }
  
}


  return (
    <div className="register" >
      <h1>VIBE$</h1>
      <div className="register-wrapper">
      <Person htmlColor='seagreen' style={{fontSize: '65px'}}/>
      <h2>Sign Up for an Account</h2>
          <form className="register-box" onSubmit={handleRegister} >
          <input type='text' placeholder="Display Name" 
            className="register-input" ref={name} required />
          <input type='text' placeholder="Username" 
            className="register-input" ref={userName} required />
            <input type='email' placeholder="Email" 
            className="register-input" ref={email} required />
            <input type="password" placeholder="Password" 
            className="register-input" ref={password} required />
            <button type='submit' className="register-btn">Sign Up</button>
          </form>
          <Link to={"/login"}><button className="register-login">Or Log In Here</button></Link>
      </div>
    </div>
  )
}
