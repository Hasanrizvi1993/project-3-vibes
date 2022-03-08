import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../stylesheets/index.scss"
import { Person } from '@material-ui/icons';
import axios from 'axios';
import { init } from 'ityped';

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
const textRef = useRef()
useEffect(()=> {
  init(textRef.current, {
    backDelay: 1000,
    backSpeed: 70,
    showCursor: false,
    strings: [" COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", " COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", " COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", " COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", ],
  })
}, [])



  return (
    <div className="register" >
       <div className="login-left">
          <h3 className="login-logo-text" style={{fontSize: "45px", position: "absolute", left:"50px", top: "90px"}}>MUSIC NEVER SOUNDED SO...
          <div ref={textRef} className="typed-text" style={{position:"relative", left:"400px"}}></div></h3>
        </div>
      <div className="register-wrapper">
        <Person htmlColor='#639275' style={{fontSize: '65px',}}/>
        <h2>SIGN UP FOR AN ACCOUNT</h2>
            <form className="register-box" onSubmit={handleRegister} >
              <input type='text' placeholder="Display Name" 
                className="register-input" ref={name} required /> 
              <input type='text' placeholder="  USERNAME" style={{margin: "5px", border: "none", minHeight: "25px", borderRadius: "5px"}}
                className="register-input" ref={userName} required />
              <input type='email' placeholder="  EMAIL" style={{margin: "5px", border: "none", minHeight: "25px", borderRadius: "5px"}}
                className="register-input" ref={email} required />
              <input type="password" placeholder="  PASSWORD" style={{margin: "5px", border: "none", minHeight: "25px", borderRadius: "5px"}}
                className="register-input" ref={password} required />
              <button type='submit' className="register-btn" style={{backgroundColor: "#639275", color: "white", margin: "5px", border:"none", minHeight:"25px", borderRadius: "5px", fontWeight: "bold"}}>SIGN UP</button>
            </form>
            <Link to={"/login"}><button className="register-login" style={{ margin: "5px", border:"none", minHeight:"25px", borderRadius: "5px"}}>LOG IN</button></Link>
      </div>
    </div>
  )
}
