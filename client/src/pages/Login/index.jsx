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
      strings: [" COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", " COOL", " DOPE", " AWESOME", " GOOD", " FUN", " HYPED", " RELAXED", " EXCITING", " FUNKY", " ROMANTIC", " MOVING ", " FUNKY ", " CALMING ", " JOYFUL ", " INTERESTING ", "ROCK N ROLL", "BRAVE", "BRIGHT", "BEAUTIFUL", "COLORFUL", "DISTINCT", "FANTASTIC", "TENDER", ],
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
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo-text" style={{fontSize: "45px",}}>MUSIC NEVER SOUNDED SO...
          <div ref={textRef} className="typed-text"></div></h3>
        </div>
          <div className="login-right">
            <h2>LOG INTO YOUR ACCOUNT</h2>
            <div className="login-form-message">
          {loginMessage && <span className="post-img-text" style={{color:'crimson'}}>{loginMessage}</span>}
          </div>
          <form className="login-box" onSubmit={handleLogin} >
            <input style={{margin: "5px", border: "none", minHeight: "25px", borderRadius: "5px"}} type='email' placeholder="EMAIL" 
            className="login-input" ref={email} required />
            <input style={{margin: "5px", border: "none", minHeight: "25px", borderRadius: "5px"}} type="password" placeholder="PASSWORD" 
            className="login-input" ref={password} required />
            <button type='submit' className="login-btn" style={{backgroundColor: "#639275", color: "white", margin: "10px", border:"none", minHeight:"25px", borderRadius: "5px", fontWeight: "bold",}}>LOG IN</button>
            <span className="login-forgot">FORGOT PASSWORD?</span>
          </form>
          <span className="login-register">DON'T HAVE AN ACCOUNT? <Link to={"/register"} style={{fontWeight: "bold"
 }}>SIGN UP</Link></span>
         </div>
      </div>
    </div>
  )
}
