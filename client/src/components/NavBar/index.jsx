import React from 'react'
import './navBar.scss';
import { Search, Person, Home } from '@material-ui/icons';



export const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className="nav-left">
        <span className="logo">VIBE$</span>
        </div>
        <div className="nav-center">
        <div className="searchbar">
        <Search className='search-icon'/>
        <input placeholder="Search..." className="search-input" />
        </div>
        </div>
        <div className="nav-right">
            <div className="nav-links">
                <div className="nav-link-item">
                  <Home />
                  <span className="nav-link">Home</span>
                </div>
                <div className="nav-link-item">
                  <Person />
                  <span className="nav-link">Profile</span>
                </div>
            </div>
            <img className="nav-img" src="/assets/staticImages/no_pf_img.png" alt="" />
        </div>
    </div>
  )
}
