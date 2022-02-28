import React from 'react'
import './navBar.scss';
import { Link } from 'react-router-dom';



export const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="nav-left">
        <span className="logo">VIBE$</span>
        </div>
        <div className="nav-center">
        <div className="nav-links">
                  <span className="nav-link">Feed</span>
                  <span className="nav-link">Profile</span>
                  <span className="nav-link">Sign Out</span>
            </div>
        </div>
        <div className="nav-right">
        <button type="button" class="btn" data-bs-toggle="button" autocomplete="off">Light/Dark</button>
        </div>
    </div>
  )
}
