import React, { useEffect, useState } from 'react';    // NOTE NEED TO UPDATE NAVBAR PF IMAGE AFTER USER IMG UPLOADER COMPLETED
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

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
          <span className="logo">VIBE$</span>
        </Link>

        </div>
        <div className="icons">
        <div className="nav-links">
          <Link to={"/"} >
            <span className="nav-link">Feed</span>
          </Link>
          {currentUser ? <Link to={"/profile/"+currentUser.userName} >
            <span className="nav-link">Profile</span>
          </Link> : <p></p>}
          <Link to={"#"} >
                  <span className="nav-link" onClick={signOut} >Sign Out</span>
          </Link>
            </div>
        </div>
        <div className="nav-right">
          <div className="dark-mode">
            <button type="button" className="btn" data-bs-toggle="button">Light/Dark</button>
          </div>
            <div className="nav-pf" style={{marginLeft: '25px'}} >
             {currentUser ? <Link to={`/profile/${currentUser.userName}`} >
              <img className='nav-img' style={{height: '46px', width: '46px', borderRadius: '50%', objectFit: 'cover'}} src={currentUser && currentUser.profileImage 
              ? currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt="" />
              </Link> : <p></p>}
            </div>
        </div>
    </div>
  )
}
