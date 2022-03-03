import React, { useState } from 'react';
import '../../stylesheets/index.scss';
import { PermMedia } from '@material-ui/icons';

export const PostForm = () => {
  // state for share img uploader
  const [file, setFile] = useState(null)

  // empty submitHandler - onChange for img input is already set to change file to first img uploaded if multiple
  const submitHandler = (e) => {
    e.preventDefault()
    // create new post
    // if photo upload handle using multer
    // api post for image
    // api post for new post 
    // try/catch? 
  }


  return (
    <div className='post-form'>
      <div className="post-form-wrapper">
        <form onSubmit={submitHandler} >
        <div className="post-form-top">
          <img className="post-form-img" src='/assets/staticImages/no_pf_img.png' alt='' />
          <textarea cols="60" rows="5" placeholder='START A POST...' className="post-form-input" />
        </div>
        <hr className="post-form-border" />
        <div className="post-form-bottom">
          <div className="post-img">
          <label htmlFor='file' className="post-img-label">
            <PermMedia className="post-img-icon" />
            <span className="post-img-text">ADD PHOTO TO POST</span>
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
