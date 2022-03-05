import React, { useState, useRef } from 'react';
import '../../stylesheets/index.scss';
import { PermMedia } from '@material-ui/icons';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';


// SERVER API URL
const apiUrl = "http://localhost:4000/api"


export const PostForm = () => {

  const { currentUser } = useAuth();

const body = useRef();
  // state for share img uploader
const [file, setFile] = useState(null)
// state for success/error message 
const [message, setMessage] = useState('')

  // empty submitHandler - onChange for img input is already set to change file to first img uploaded if multiple
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: currentUser._id,
      body: body.current.value,
    }
    if (file) {
      const data = new FormData()
      const fileName = file.name;
      data.append("file", file)
      data.append("name", fileName)
      newPost.img = fileName;
      try {
        await axios.post(`${apiUrl}/posts/upload`, data);
      } catch (err) {
        console.log(err)
        setMessage('ERROR! Could not post image...')
      }
    }
    try {
      await axios.post(`${apiUrl}/posts`, newPost)
      setMessage('SUCCESS! You made a new ')
       window.location.reload()
    } catch (err) {
      console.log(err)
      setMessage('ERROR! Could not create post...')
    }
  
    //multer img uploader
    // api post for image
  }


  return (
    <div className='post-form'>
      <div className="post-form-wrapper">
        <form onSubmit={submitHandler} >
        <div className="post-form-top">
          <div className="post-form-message">
          {message && <span className="post-img-text" style={{color:'green'}}>{message}</span>}
          </div>
          <img className="post-form-img" src='/assets/staticImages/no_pf_img.png' alt='' />
          <textarea cols="60" rows="5" placeholder='START A POST...' ref={body} className="post-form-input" />
        </div>
        <hr className="post-form-border" />
        <div className="post-form-bottom">
          <div className="post-img">
          <label htmlFor='file' className="post-img-label">
            <PermMedia className="post-img-icon" />
            {file ? <span className="post-img-text" style={{color:'green'}}>PHOTO ADDED!</span> 
            : <span className="post-img-text" style={{color:'crimson'}}>ADD PHOTO</span>}
            <input style={{display:'none'}} type="file" id="file" 
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => setFile(e.target.files[0])} />
          </label>

          </div>
          <button className="publish-btn" type='submit'>Publish</button>
        </div>
        </form>
      </div>


    </div>
  )
}
