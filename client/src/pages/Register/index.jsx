import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import { Person } from '@material-ui/icons';



export const Register = () => {
// useRef hooks for email/password
const email = useRef();
const password = useRef();
const username = useRef();

// state for file upload
const [file, setFile] = useState(null);


// login handler
const handleRegister = (e) => {
  e.preventDefault()
  // need to create new user
  // handle file uploading (multer)
  // set user profilePicture
  // make api post call to create new user
  // redirect to login page
  // try/catch?
}


  return (
    <div className="register" >
      <h1>VIBE$</h1>
      <div className="register-wrapper">
      <h2>Sign Up or Login</h2>
          <form className="register-box" onSubmit={handleRegister} >
            <label htmlFor='file' className="img-upload-label">
            <Person htmlColor="seagreen" style={{ fontSize: '65px' }}  />
            <span>Upload a PF Picture</span>
              <input style={{display:'none'}} type="file" id="file" 
                    accept='.png, .jpg, .jpeg' 
                    onChange={(e) => setFile(e.target.files[0])} />
            </label>
            
            
          <input type='text' placeholder="Username" 
            className="register-input" ref={username} required />
            <input type='email' placeholder="Email" 
            className="register-input" ref={email} required />
            <input type="password" placeholder="Password" 
            className="register-input" ref={password} required />
            <button type='submit' className="register-btn">Sign Up</button>
          </form>
          <Link to={"/register"}><button className="register-login"> Or Log In Here</button></Link>
      </div>
    </div>
  )
}
