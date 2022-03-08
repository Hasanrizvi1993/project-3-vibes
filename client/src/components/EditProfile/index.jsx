import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Cancel } from '@material-ui/icons';
import axios from 'axios';
import '../../stylesheets/index.scss';

// SERVER API URL
const apiUrl = "http://localhost:4000/api"


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
  const [file, setFile] = useState();
 

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
            <span className="user-info-label">Currently Playing:</span><br />
            <span className="currently-playing">{user && user.currentlyPlaying ? user.currentlyPlaying : "Nothing Yet!"}</span><br />
            <span className="user-info-label">About Me:</span><br />
            <span className="about-me">{user && user.aboutMe ? user.aboutMe : "No Bio Yet!"}</span>
          </div>
          </div>
          <hr className='edit-border' />
         {currentUser._id === user._id ? <><div className="edit-profile-center">
          <h4 className="edit-form-header">Edit Your Profile Info</h4>
          <form className="edit-form" onSubmit={updateUser} >
            <label htmlFor="" className="edit-label" >
              Email<br />
            <input type="email" placeholder="Edit Your Email" className="edit-input" defaultValue={currentUser.email} ref={email} required />
            </label><br />
            <label htmlFor="" className="edit-label">
              Display Name<br />
            <input type="name" placeholder="Edit Your Name" className="edit-input" defaultValue={currentUser.name} ref={name} required />
            </label><br />
            <label htmlFor="" className="edit-label">
              Currently Playing<br />
            <input type="text" placeholder="Currently Playing?" className="edit-input" defaultValue={currentUser.currentlyPlaying} ref={currentlyPlaying}  />
            </label><br />
            <label htmlFor="" className="edit-label">
              Location<br />
            <input type="text" placeholder="Location?" className="edit-input" defaultValue={currentUser.location} ref={location}  />
            </label><br />
            <label htmlFor="" className="edit-label">
              About Me <br />
            <textarea type="text" maxLength={180} placeholder="Edit Your About Me" className="edit-input" defaultValue={currentUser.aboutMe} ref={aboutMe}  />
            </label><br />
            <div className="pf-img-upload">
            {file && (
            <div className="pf-img-box">
              <img src={URL.createObjectURL(file)} alt="" className="pf-img-preview" style={{width: "120px", height: "120px", objectFit: "cover", borderRadius: '50%'}} />
              <Cancel className="pf-img-cancel" onClick={() => setFile(null)} />
            </div>
              )}
              <label htmlFor='file' className="post-img-label">Add or Update Your Profile Picture!<br />
                <input type="file" name="file" placeholder="Update Profile Picture" id="file"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setFile(e.target.files[0])} />
              </label>
            </div>
            <button type="submit" className="edit-profile-btn">Update Info</button>
          </form>
        </div><hr className='edit-border' /></> : <p></p>}
          <div className="edit-profile-bottom">
            <div className="saved-posts">
              NEED TO CREATE SAVED POST MODEL & LOGIC
            </div>
          </div>
          </div>
        </div>
      
  )
}
