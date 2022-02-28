import React from 'react';
import './post.scss';
import { Link } from 'react-router-dom';


export const Post = () => {


 
  const likeHandler = () => {

  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
          <Link to="/profile" style={{textDecoration: 'none'}} >
            <img className='post-profile-img' 
            src="/assets/staticImages/no_pf_img.png" alt="" />
          </Link>
          <Link to="/profile" style={{textDecoration: 'none'}} >
            <span className="post-username" >Test Username</span>
          </Link>
          </div>
          <div className="post-top-right">
          <span className="post-date">4 hour ago</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">POST TEXT</span>
          <img className="post-img" src="/assets/staticImages/snowy.jpeg" alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
          <img className="like-icon" src="/assets/staticImages/like_icon.png" 
          alt="" onClick={likeHandler} />
          </div>
          <div className="post-bottom-right">
            <span className="post-comment">Comment</span>
          </div>
        </div>

      </div>

    </div>
  )
}
