import React, { useState } from 'react';
import '../../stylesheets/index.scss';

export const EditProfile = ({ user }) => {
  // pf img upload hook
  const [file, setFile] = useState();


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
          <div className="edit-profile-center">
            <h4 className="edit-form-header">Edit Your Profile Info</h4>
            <form className="edit-form">
              <input type="email" placeholder="Edit Your Email" className="edit-input" />
              <input type="name" placeholder="Edit Your Name" className="edit-input" />
              <input type="text" placeholder="Edit Your Username" className="edit-input" />
              <input type="text" placeholder="Currently Playing?" className="edit-input" />
              <input type="text" placeholder="Edit Your About Me" className="edit-input" />
              <div className="pf-img-upload">
              <label htmlFor='file' className="post-img-label">Add or Update Your Profile Picture!
                <input type="file" name="file" placeholder="Update Profile Picture" id="file" 
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => setFile(e.target.files[0])} />
              </label>
              </div>
              <button type="submit" className="edit-profile-btn">Update Info</button>
            </form>
          </div>
          <hr className='edit-border' />
          <div className="edit-profile-bottom">
            <div className="saved-posts">
              NEED TO CREATE SAVED POST MODEL & LOGIC
            </div>
          </div>
          </div>
        </div>
      
  )
}
