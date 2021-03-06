import React, { useState, useEffect } from 'react';
import { NavBar } from '../../components/NavBar';
import { Sidebar } from '../../components/Sidebar';
import { Timeline } from '../../components/Timeline';
import { EditProfile } from '../../components/EditProfile';
import '../../stylesheets/index.scss';
import axios from 'axios';
import { useParams } from 'react-router';


// SERVER API URL
const apiUrl = "http://localhost:4000/api"


export const Profile = () => {
// state hook for user's profile
const [user, setUser] = useState({});
// useParams gives the key/value from the current url
const userName = useParams().userName;

// fetch user based on username param
useEffect(() => {
  const fetchUser = async () => {
    const userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await axios.get(`${apiUrl}/users?userName=${userName}`, {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${userToken}`
      }
    })
    setUser(res.data)
    
  }
  fetchUser();
}, [])



  return (
    <div>
      <NavBar />
      <div className='profile' >
        <Sidebar />
        <Timeline userName={userName} />
        <EditProfile user={user} />
      </div>
    </div>
  )
}
