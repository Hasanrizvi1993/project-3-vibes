import React, { useEffect, useState } from 'react';    
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

// BACKEND PUBLIC FOLDER UPLOADS
const PF_IMG = process.env.REACT_APP_PF_IMAGES;

const apiUrl = "http://localhost:4000/api"

export const NavBar = () => {
  const { logout, currentUser } = useAuth();


  const signOut = () => {
    logout();
    window.location.reload();
  }


  return (
    <div className='nav-container'>
        <div className="logo">
        <Link to={"/"} style={{textDecoration: 'none'}} >
          <span className="logo" style={{fontSize: "50px", color:"white", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor:"black", position: "fixed", left:"5px", top:"0px"}}>VIBES</span>
        </Link>

        </div>
        <div className="icons">
        <div className="nav-links">
          <Link to={"/"} >
            <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px", left:"-150px", fontSize: "28px"}}>FEED</span>
          </Link>
          {currentUser ? <Link to={"/profile/"+currentUser.userName} >
            <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px", left:"-150px", fontSize: "28px"}}>PROFILE</span>
          </Link> : <p></p>}
          <Link to={"#"} >
                  <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px", left:"-150px",fontSize: "28px",}} onClick={signOut} >SIGN OUT</span>
          </Link>
          <div className="nav-pf" >
             {currentUser ? <Link to={`/profile/${currentUser.userName}`} >
              <img className='nav-img' style={{height: '50px', width: '50px', borderRadius: '50%', objectFit: 'cover', position: "relative", bottom: "30px", right:"-500px",}} src={currentUser && currentUser.profileImage 
              ? currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt="" />
              </Link> : <p></p>}
            </div>
            </div>
        </div>
        <div className="nav-right">
          <div className="dark-mode">
            <button type="button" className="btn" data-bs-toggle="button" style={{fontFamily: "helvetica", marginRight:"15px", marginTop: "28px"}}>LIGHT/DARK</button>
          </div>
            <div className="nav-pf" style={{marginLeft: '25px'}} >
             {currentUser ? <Link to={`/profile/${currentUser.userName}`} >
              <img className='nav-img' style={{height: '46px', width: '46px', borderRadius: '50%', objectFit: 'cover'}} src={currentUser && currentUser.profileImage 
              ? PF_IMG+currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt="" />
              </Link> : <p></p>}
            </div>
        </div>
    </div>
  )
}
