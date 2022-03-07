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
          <span className="logo">VIBE$</span>
        </Link>

        </div>
        <div className="icons">
        <div className="nav-links">
          <Link to={"/"} >
            <span className="nav-link">Feed</span>
          </Link>
          <Link to={"/profile/"+user.userName} >
            <span className="nav-link">Profile</span>
          </Link>
          <Link to={"#"} >
                  <span className="nav-link" onClick={signOut} >Sign Out</span>
          </Link>
            </div>
        </div>
        <div className="nav-right">
        <button type="button" className="btn" data-bs-toggle="button">Light/Dark</button>
        </div>
    </div>
  )
}
