import React, { useEffect, useState, useRef } from 'react';
import '../../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { format } from 'timeago.js';
import axios from 'axios';

// BACKEND PUBLIC FOLDER UPLOADS
const POST_IMG = process.env.REACT_APP_POST_IMAGES;


// SERVER API URL
const apiUrl = "http://localhost:4000/api"



export const Post = ({ post }) => {
const [user, setUser] = useState({});
// ref hook for comment text
const comment = useRef();
// pulling logged in user from authcontext
const { currentUser } = useAuth();

// Fetching user who created post
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${apiUrl}/users?userId=${post.userId}`)
        setUser(res.data)
    }
    fetchUser();
    
  }, [post.userId])

  // Comment Submit Handler
  const submitComment = async (e) => {
    e.preventDefault()
    const newComment = {
      body: comment.current.value,
    }
    try {
        await axios.post(`${apiUrl}/posts/${post._id}/comments`, newComment)
        window.location.reload();
    } catch (err) {
      console.log(err)
    }

  }
  
 
  const likeHandler = () => {

  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
          <Link to={"/profile/"+user.userName} >
            <img className='post-profile-img' style={{position: "relative", left:"-250px", top:"-30px" }}
            src={"/assets/staticImages/no_pf_img.png"} alt="" />
          </Link>
          <Link to={"/profile/"+user.userName} style={{position: "relative", left:"-250px", top:"-100px", fontFamily: "Helvetica", fontSize: "24px"}} >
            <span className="post-username">{user && user.name}</span>
          </Link>
          </div>
          <div className="post-top-right">
          <span className="post-date">{post && format(post.createdAt)}</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post && post.body}</span>
          <img className="post-img" src={post.img && POST_IMG+post.img} alt="" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
          <img className="like-icon" src="/assets/staticImages/like_icon.png" 
          alt="" onClick={likeHandler} />
          </div>
          <div className="post-bottom-right">
            <form className='comment-box' onSubmit={submitComment} >
            <input className='comment-input' type="text" placeholder='Add Comment' ref={comment} />
            <button className="comment-btn" type="submit">Add Comment</button>
            </form>
          </div>
        </div>
        <div className="post-comments">
          <ul className="comments-list">
            {post && post.comments.map((c) => (
              <li className="comments-list-item" key={c._id+"-1"} >
                <div className='comment-left' key={c._id+"0"} >
                  <span className="comments-list-text" key={c._id} >{c.body}<br /> 
                  <small className="comment-time" key={c._id+"3"} >{c && format(c.createdAt)}</small> </span>
                  </div>
                  <div className='comment-right' key={c._id+"1"} >
                    <div className="delete-comment" key={c._id+"2"} >
                      {currentUser._id === post.userId ? <button className="delete-comment-btn" onClick={async () => (
                      await axios.delete(`${apiUrl}/posts/${post._id}/comments/${c._id}`), 
                      window.location.reload()
                      )} >Delete</button>
                      : <p style={{display: 'none'}}></p>}
                    </div>
                  </div>
                  <hr className="comment-border" key={c._id+"4"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
