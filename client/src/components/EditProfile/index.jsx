import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Cancel } from '@material-ui/icons';
import axios from 'axios';
import '../../stylesheets/index.scss';

// SERVER API URL
// const apiUrl = "http://localhost:4000/api"
const apiUrl = "https://bussin.herokuapp.com/api"


export const EditProfile = ({ user }) => {
   // current logged in user
   const { currentUser } = useAuth();
  // refs for update user
  const email = useRef(currentUser.email);
  const name = useRef(currentUser.name)
  const currentlyPlaying = useRef(currentUser.currentlyPlaying);
  const location = useRef(currentUser.location);
  const aboutMe = useRef(currentUser.aboutMe);
  // pf img upload hook
  const [file, setFile] = useState(null);
 

  // User Update Handler
  const updateUser = async (e) => {
    e.preventDefault()
    const updatedUser = {
    email: email.current.value,
    name: name.current.value,
    currentlyPlaying: currentlyPlaying.current.value,
    location: location.current.value,
    aboutMe: aboutMe.current.value,
    }
    if (file) {
      const data = new FormData()
      const fileName = file.name;
      data.append("file", file)
      data.append("name", fileName)
      updatedUser.profileImage = fileName;
      try {
        await axios.post(`${apiUrl}/users/upload`, data);
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axios.put(`${apiUrl}/users/${currentUser._id}`, updatedUser)
      localStorage.setItem("userData", JSON.stringify(res.data.data))
      
    } catch (err) {
      console.log(err)
    }
    window.location.reload();
  }



  return (
    <div className='edit-profile' >
       <div className="edit-profile-wrapper">
        <div className="edit-profile-top">
          <div className='user-info'>
          <br></br>
            <h2 className="profile-display-name" style={{fontWeight: "bold"}} >{user && user.name ? user.name+"'s Profile" : ""}</h2><br />
            <br></br>
            <span className="user-info-label"style={{fontWeight: "bold"}} >LOCATION:
            </span><br />
            <span className="location" >{user && user.location ? user.location : ""}</span><br />
            <br></br>
            <span className="user-info-label"style={{fontWeight: "bold"}} >CURRENTLY PLAYING:
            </span><br />
            <span className="currently-playing" >{user && user.currentlyPlaying ? user.currentlyPlaying : "Nothing Yet!"}</span><br />
            <br></br>
            <span className="user-info-label" style={{fontWeight: "bold"}}>ABOUT ME:</span><br />
            <span className="about-me">{user && user.aboutMe ? user.aboutMe : "No Bio Yet!"}</span>
            <br></br>
            <br></br>
          </div>
          </div>
          <hr className='edit-border' />
         {currentUser._id === user._id ? <><div className="edit-profile-center">
          <h4 className="edit-form-header">EDIT YOUR PROFILE INFO</h4>
          <form className="edit-form" onSubmit={updateUser} style={{justifyContent: 'center', alignItems: 'center'}}  >
            <label htmlFor="" className="edit-label" >
              EMAIL<br />
            <input type="email" placeholder="Edit Your Email" className="edit-input" defaultValue={currentUser.email} ref={email} required style={{width: '88%', borderRadius: '10px', padding: '4px'}} />
            </label><br />
            <br></br>
            <label htmlFor="" className="edit-label">
              DISPLAY NAME<br />
            <input type="name" placeholder="Edit Your Name" className="edit-input" defaultValue={currentUser.name} ref={name} required style={{width: '88%', borderRadius: '10px', padding: '4px'}} />
            </label><br />
            <br></br>
            <label htmlFor="" className="edit-label">
              CURRENTLY PLAYING<br />
            <input type="text" placeholder="Currently Playing?" className="edit-input" defaultValue={currentUser.currentlyPlaying} ref={currentlyPlaying} style={{width: '88%', borderRadius: '10px', padding: '4px'}}  />
            </label><br />
            <br></br>
            <label htmlFor="" className="edit-label">
              LOCATION<br />
            <input type="text" placeholder="Location?" className="edit-input" defaultValue={currentUser.location} ref={location} style={{width: '88%', borderRadius: '10px', padding: '4px'}} />
            </label><br />
            <br></br>
            <label htmlFor="" className="edit-label">
              ABOUT ME <br />
            <textarea type="text" maxLength={180} placeholder="Edit Your About Me" className="edit-input edit-textarea" defaultValue={currentUser.aboutMe} ref={aboutMe}  />
            </label><br />
            <br></br>
            <div className="pf-img-upload">
            {file && (
            <div className="pf-img-box">
              <img src={URL.createObjectURL(file)} alt="" className="pf-img-preview" style={{width: "120px", height: "120px", objectFit: "cover", borderRadius: '50%'}} />
              <Cancel className="pf-img-cancel" onClick={() => setFile(null)} />
            </div>
              )}
              <label htmlFor='file' className="post-img-label" style={{fontWeight:"bold"}}>ADD PF PICTURE<br /><br />
                <input type="file" name="file"  id="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setFile(e.target.files[0])} />
              </label>
              
            </div>
            <br></br>
            <button type="submit" className="edit-profile-btn">UPDATE INFO</button>
          </form>
          <br></br>
        </div><hr className='edit-border' /></> : <p></p>}
          <div className="edit-profile-bottom">
            <div className="saved-posts">
              {/* NEED TO CREATE SAVED POST MODEL & LOGIC */}
              <br></br>
            </div>
          </div>
          </div>
        </div>
      
  )
}
