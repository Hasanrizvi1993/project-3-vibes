import React from 'react';    
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


// BACKEND PUBLIC FOLDER UPLOADS
const PF_IMG = process.env.REACT_APP_PF_IMAGES;

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
              <span className="nav-link" >FEED</span>
            </Link>
            {currentUser ? <Link to={"/profile/"+currentUser.userName} >
              <span className="nav-link" >PROFILE</span>
            </Link> : <p></p>}
            <Link to={"#"} >
                    <span className="nav-link" onClick={signOut} >SIGN OUT</span>
            </Link>
            <div className="nav-pf" >
              {currentUser ? <Link to={`/profile/${currentUser.userName}`} >
                <img className='nav-img' src={currentUser && currentUser.profileImage 
                ? PF_IMG+currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt="" />
                </Link> : <p></p>}
            </div>
          </div>
        </div>
    </div>
  )
}

