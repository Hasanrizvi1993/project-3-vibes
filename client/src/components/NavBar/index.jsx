import React from 'react'
import './navBar.scss';



export const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="nav-left">
        <span className="logo">VIBE$</span>
        </div>
        <div className="nav-center">
        <div className="searchbar">
            
           
            </div>
        </div>
        <div className="nav-right">
            <div className="nav-links">
                <span className="nav-link">Home</span>
                <span className="nav-link">Profile</span>
            </div>
        </div>
    </div>
  )
}
