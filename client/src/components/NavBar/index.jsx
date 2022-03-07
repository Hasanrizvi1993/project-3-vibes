import React, { useEffect, useState } from 'react'
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';


const apiUrl = "http://localhost:4000/api"


export const NavBar = () => {
  const { logout, currentUser } = useAuth();

  const [user, setUser] = useState({});
  // const { currentUser } = useAuth();


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${apiUrl}/users?userId=${user.userId}`)
        setUser(res.data)
    }
    fetchUser();
  }, [user.userId])

  const signOut = () => {
    logout()
    
  }


  return (
    <div className='nav-container'>
        <div className="logo">
        <Link to={"/"} style={{textDecoration: 'none'}} >
          <span className="logo" style={{fontSize: "50px", color:"white", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor:"black", }}>VIBES</span>
        </Link>

        </div>
        <div className="icons">
        <div className="nav-links">
          <Link to={"/"} >
            <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px", }}>FEED</span>
          </Link>
          <Link to={"/profile/"+user.userName} >
            <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px", }}>PROFILE</span>
          </Link>
          <Link to={"#"} >
                  <span className="nav-link" style={{color: "black", position: "relative", bottom: "-20px",}} onClick={signOut} >SIGN OUT</span>
          </Link>
            </div>
        </div>
        <div className="nav-right">
        <button type="button" className="btn" data-bs-toggle="button">LIGHT/DARK</button>
        </div>
    </div>
  )
}
