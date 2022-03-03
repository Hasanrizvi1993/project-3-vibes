import React from 'react'
import './navBar.scss';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="nav-left">
        <Link to={"/"} style={{textDecoration: 'none'}} >
          <span className="logo">VIBE$</span>
        </Link>

        </div>
        <div className="nav-center">
        <div className="nav-links">
          <Link to={"/"} style={{textDecoration: 'none', color: 'white'}} >
            <span className="nav-link">Feed</span>
          </Link>
          <Link to={"/profile"} style={{textDecoration: 'none', color: 'white'}} >
            <span className="nav-link">Profile</span>
          </Link>
          <Link to={"#"} style={{textDecoration: 'none', color: 'white'}} >
                  <span className="nav-link">Sign Out</span>
          </Link>
            </div>
        </div>
        <div className="nav-right">
        <button type="button" className="btn" data-bs-toggle="button">Light/Dark</button>
        </div>
    </div>
  )
}
