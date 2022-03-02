import React from 'react'
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';



export const NavBar = () => {
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
          <Link to={"/profile"} >
            <span className="nav-link">Profile</span>
          </Link>
          <Link to={"#"} >
                  <span className="nav-link">Sign Out</span>
          </Link>
            </div>
        </div>
        <div className="nav-right">
        <button type="button" class="btn" data-bs-toggle="button" autocomplete="off">Light/Dark</button>
        </div>
    </div>
  )
}
