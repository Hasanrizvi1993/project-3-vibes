import React, { useState, useRef } from 'react';
import '../../stylesheets/index.scss';
import { HdrStrong, NoEncryption, PermMedia, Cancel } from '@material-ui/icons';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';


// SERVER API URL
// const apiUrl = "http://localhost:4000/api"
const apiUrl = "https://bussin.herokuapp.com/api"


export const PostForm = () => {

  const { currentUser } = useAuth();

const body = useRef();
  // state for share img uploader
const [file, setFile] = useState(null)
// state for success/error message 
const [message, setMessage] = useState('')
//procile picture
const PF_IMG = process.env.REACT_APP_PF_IMAGES;


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
      setMessage('SUCCESS! You made a new Post!')
       window.location.reload()
    } catch (err) {
      console.log(err)
      setMessage('ERROR! Could not create post...Try Again.')
    }
  
  }


  return (
    <div className='post-form'>
      <div className='post-spacer'></div>
      <div className="post-form-wrapper">
        <form onSubmit={submitHandler} >
        <div className="post-form-top">
          <div className="post-form-message">
          {message && <span className="post-img-text" style={{color:'green'}}>{message}</span>}
          </div>
          <img className="post-form-img"  style={{position: "relative", left:"-30px", top:"-30px", height: '65px', width: '65px', borderRadius: '150%', }}  src={currentUser && currentUser.profileImage 
              ? PF_IMG+currentUser.profileImage : "/assets/staticImages/no_pf_img.png"} alt=""  /> 
          <textarea style={{fontFamily: "helvetica", width: "98%",}} cols="60" rows="" placeholder='START A POST...' ref={body} className="post-form-input" />
        </div>
        <hr className="post-form-border" />
        <div className="post-form-bottom">
          {file && (
            <div className="post-img-box">
              <img src={URL.createObjectURL(file)} alt="" className="post-img-preview" style={{width: "350px", objectFit: "cover"}} />
              <Cancel className="post-img-cancel" onClick={() => setFile(null)} />
            </div>
          )}
          <div className="post-img">
          <label htmlFor='file' className="post-img-label">
            <PermMedia className="post-img-icon" style={{position: "absolute", bottom: "115px", left:"20px" }} />
            {file ? <span className="post-img-text" style={{color:'green', fontFamily: "Helvetica", position: "absolute", bottom: "115px", left:"55px" }}>PHOTO ADDED!</span> 
            : <span className="post-img-text" style={{color:'black', fontFamily: "Helvetica", position: "Absolute", bottom: "115px", left:"55px" }}>ADD PHOTO</span>}
            <input style={{display:'none'}} type="file" id="file" 
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => setFile(e.target.files[0])} />
          </label>

          </div>
          <button className="publish-btn" type='submit'  style={{fontFamily: "playfair display", border: "none", position: "Absolute", bottom: "20px", right: "50px",background: "rgba(236,237,238, .5)", fontSize: "20px",textDecoration: "underline", textDecorationColor: "#639275", textDecorationThicknes: "5px", }}>PUBLISH</button>
        </div>
        </form>
      </div>


    </div>
  )
}
